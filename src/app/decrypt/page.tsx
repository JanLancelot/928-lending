"use client";

import { useState } from "react";
import { Lock, AlertCircle, FileKey } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DecryptPage() {
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState("");

  const handleDecryptFiles = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setError("");

    if (!secretKey || secretKey.length !== 32) {
      setError("Please provide a valid 32-character secret key first.");
      event.target.value = ""; // Reset file input
      return;
    }

    try {
      const keyBuffer = new TextEncoder().encode(secretKey);
      const cryptoKey = await crypto.subtle.importKey(
        "raw",
        keyBuffer,
        { name: "AES-GCM" },
        false,
        ["decrypt"]
      );

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const arrayBuffer = await file.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        
        if (data.length < 32) {
          throw new Error(`File ${file.name} is too small to be a valid encrypted file.`);
        }

        const iv = data.slice(0, 16);
        const authTag = data.slice(16, 32);
        const encrypted = data.slice(32);

        const encryptedWithTag = new Uint8Array(encrypted.length + authTag.length);
        encryptedWithTag.set(encrypted);
        encryptedWithTag.set(authTag, encrypted.length);

        const decryptedBuffer = await crypto.subtle.decrypt(
          { name: "AES-GCM", iv },
          cryptoKey,
          encryptedWithTag
        );

        const blob = new Blob([decryptedBuffer]);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name.replace(/\.enc$/, "");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "File decryption failed. Check your secret key or the file format.");
    } finally {
      event.target.value = ""; // Reset file input so same file can be selected again
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight flex items-center justify-center gap-2">
          <Lock className="h-8 w-8 text-emerald-600" />
          Secure Decryption Portal
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Decrypt loan applications securely in your browser. No data is sent to the server.
        </p>
      </div>

      <Card className="mb-8 border-slate-200 dark:border-slate-800 shadow-xl">
        <CardHeader>
          <CardTitle>Master Key</CardTitle>
          <CardDescription>
            Enter your 32-character secret key to enable file decryption.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="password"
            placeholder="32-character secret key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
          {error && (
            <div className="mt-4 p-3 text-sm text-red-600 bg-red-100 rounded-md flex items-start gap-2">
              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Decrypt Attached Files</CardTitle>
          <CardDescription>
            Select the <code>.enc</code> file attachments from your email to download them securely.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center min-h-[160px] border-2 border-dashed rounded-lg p-6 text-center bg-slate-50 dark:bg-slate-900/50">
          <FileKey className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-sm text-muted-foreground mb-4">
            Requires Master Key to be entered above. You can select multiple files at once.
          </p>
          <div className="relative">
            <Input
              type="file"
              multiple
              accept=".enc"
              onChange={handleDecryptFiles}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="secondary" className="pointer-events-none w-48">
              Select .enc Files
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
