"use client";

import { useState } from"react";
import { Lock, AlertCircle, FileKey, ShieldCheck } from"lucide-react";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from"@/components/ui/card";

export default function DecryptPage() {
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState("");

  const handleDecryptFiles = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setError("");

    if (!secretKey || secretKey.length !== 32) {
      setError("Please provide a valid 32-character secret key first.");
      event.target.value =""; // Reset file input
      return;
    }

    try {
      const keyBuffer = new TextEncoder().encode(secretKey);
      const cryptoKey = await crypto.subtle.importKey("raw",
        keyBuffer,
        { name:"AES-GCM" },
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
          { name:"AES-GCM", iv },
          cryptoKey,
          encryptedWithTag
        );

        const blob = new Blob([decryptedBuffer]);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name.replace(/\.enc$/,"");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message ||"File decryption failed. Check your secret key or the file format.");
    } finally {
      event.target.value =""; // Reset file input so same file can be selected again
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
          <ShieldCheck className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#0A1A2F]  tracking-tight flex items-center justify-center gap-2">
          Secure Decryption Portal
        </h1>
        <p className="mt-3 text-base text-slate-600  max-w-xl mx-auto">
          Access encrypted client loan applications securely. Decryption happens locally in your browser.
        </p>
      </div>

      <Card className="mb-8 border-0 shadow-xl rounded-2xl bg-white  overflow-hidden">
        <div className="h-2 bg-[#0A1A2F] w-full" />
        <CardHeader className="pt-8 px-8">
          <CardTitle className="text-2xl text-[#0A1A2F]  flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" /> Master Key
          </CardTitle>
          <CardDescription className="text-base mt-1">
            Enter your 32-character secret key to enable file decryption.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <Input
            type="password"
            placeholder="Enter 32-character secret key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            className="h-12 border-slate-300 focus-visible:ring-primary focus-visible:border-primary"
          />
          {error && (
            <div className="mt-4 p-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-600" />
              <span>{error}</span>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl rounded-2xl bg-white  overflow-hidden">
        <div className="h-2 bg-primary w-full" />
        <CardHeader className="pt-8 px-8">
          <CardTitle className="text-2xl text-[#0A1A2F]">Decrypt Attached Files</CardTitle>
          <CardDescription className="text-base mt-1">
            Select the <code className="bg-slate-100  px-1.5 py-0.5 rounded text-primary">.enc</code> file attachments from your email to download them securely.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-slate-300  rounded-xl p-8 text-center bg-slate-50  hover:bg-slate-100  transition-colors relative">
            <FileKey className="h-14 w-14 text-primary mb-4" />
            <p className="text-lg font-semibold text-[#0A1A2F]  mb-2">
              Select or drop .enc files here
            </p>
            <p className="text-sm text-slate-500  mb-6 max-w-xs">
              Requires Master Key to be entered above. You can select multiple files at once.
            </p>
            
            <Input
              type="file"
              multiple
              accept=".enc"
              onChange={handleDecryptFiles}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            
            <Button className="pointer-events-none w-48 h-11 bg-[#0A1A2F] text-white">
              Browse Files
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
