"use client";

import { useState } from"react";
import { useForm } from"react-hook-form";
import { zodResolver } from"@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send, Paperclip, Check } from"lucide-react";
import { Checkbox } from"@/components/ui/checkbox";

import {
  loanApplicationSchema,
  type LoanApplicationInput,
} from"@/schemas/application";
import { submitApplication } from"@/actions/submit-application";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from"@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from"@/components/ui/form";
import { cn } from"@/lib/utils";

const steps = [
  { id: 1, title:"Loan Details" },
  { id: 2, title:"Personal Info" },
  { id: 3, title:"Financial Info" },
  { id: 4, title:"Upload & Submit" },
];

export function LoanApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<LoanApplicationInput | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const form = useForm<LoanApplicationInput>({
    resolver: zodResolver(loanApplicationSchema),
    defaultValues: {
      fullName:"",
      businessName:"",
      businessAddress:"",
      businessType:"",
      yearsInBusiness: undefined,
      tinNumber:"",
      email:"",
      phone:"",
      requestedAmount: undefined,
      annualRevenue: undefined,
      purposeOfLoan:"",
      agreedToTerms: false,
      turnstileToken:"demo-verified-token",
    },
    mode:"onTouched",
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof LoanApplicationInput)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["requestedAmount","purposeOfLoan"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["fullName","email","phone"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["businessName","tinNumber","businessAddress","businessType","yearsInBusiness","annualRevenue"];
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  async function onSubmit(values: LoanApplicationInput) {
    if (currentStep !== 4) return;
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined) formData.append(key, value.toString());
      });

      const fileInput = document.getElementById("documents-upload") as HTMLInputElement;
      if (fileInput && fileInput.files) {
        for (let i = 0; i < fileInput.files.length; i++) {
          formData.append("documents", fileInput.files[i]);
        }
      }

      const result = await submitApplication(formData);
      
      if (result.success) {
        setSubmittedData(values);
        setReferenceId(result.referenceId || null);
      } else {
        alert(result.error ||"Failed to submit application.");
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submittedData) {
    return (
      <Card className="w-full max-w-3xl mx-auto border-emerald-500/20 bg-white  shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600   mb-4">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900">
            Application Submitted!
          </CardTitle>
          <CardDescription className="text-lg mt-2 text-slate-600">
            Thank you for applying. We have securely encrypted and transmitted your loan request directly to our processing team.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm mt-4">
          <div className="rounded-lg bg-slate-50 p-6 border border-slate-200   space-y-3">
            {referenceId && (
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-muted-foreground text-base">Reference ID:</span>
                <span className="font-semibold text-base">{referenceId}</span>
              </div>
            )}
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <span className="text-muted-foreground text-base">Business Name:</span>
              <span className="font-semibold text-base">{submittedData.businessName}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <span className="text-muted-foreground text-base">Requested Amount:</span>
              <span className="font-semibold text-base text-primary">₱{submittedData.requestedAmount?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-base">Purpose:</span>
              <span className="font-semibold text-base">{submittedData.purposeOfLoan}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pb-8">
          <Button
            variant="outline"
            className="w-full py-6 text-lg border-primary text-primary hover:bg-primary/5"
            onClick={() => {
              setSubmittedData(null);
              setReferenceId(null);
              setCurrentStep(1);
              setUploadedFiles([]);
              form.reset();
            }}
          >
            Submit Another Application
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl border-0 rounded-2xl bg-white">
      <CardHeader className="px-8 pt-8 pb-4">
        <div className="flex items-center justify-between w-full mb-8">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex flex-col items-center relative flex-1">
              <div className="flex items-center w-full">
                <div className={cn("h-[2px] w-full",
                  idx === 0 ?"opacity-0" :"opacity-100",
                  currentStep >= step.id ?"bg-[#0A1A2F]" :"bg-slate-200"
                )} />

                <div className={cn("flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 z-10",
                  currentStep > step.id ?"bg-[#0A1A2F] border-[#0A1A2F] text-white" :
                  currentStep === step.id ?"bg-primary border-primary text-white" :"bg-white  border-slate-300  text-slate-400"
                )}>
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : <span className="font-semibold">{step.id}</span>}
                </div>

                <div className={cn("h-[2px] w-full",
                  idx === steps.length - 1 ?"opacity-0" :"opacity-100",
                  currentStep > step.id ?"bg-[#0A1A2F]" :"bg-slate-200"
                )} />
              </div>
              <span className={cn("absolute top-12 text-xs font-semibold whitespace-nowrap text-center",
                currentStep >= step.id ? (currentStep === step.id && step.id === steps.length ?"text-primary" :"text-[#0A1A2F]") :"text-slate-400"
              )}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="px-8 pt-6 pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0A1A2F]">Loan Details</h2>
                  <p className="text-muted-foreground mt-1">Tell us about the loan you are requesting.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="requestedAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Requested Amount (₱)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 50000"
                            className="h-12 border-slate-300"
                            {...field}
                            value={field.value ?? ""}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value ==="" ? undefined : Number(e.target.value)
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="purposeOfLoan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Purpose of Loan</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="">Select a purpose...</option>
                            <option value="Working Capital">Working Capital</option>
                            <option value="Equipment">Equipment Purchase</option>
                            <option value="Expansion">Business Expansion</option>
                            <option value="Inventory">Inventory</option>
                            <option value="Other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0A1A2F]">Personal Info</h2>
                  <p className="text-muted-foreground mt-1">Provide your personal contact information.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-slate-700">Applicant Full Name</FormLabel>
                        <FormControl>
                          <Input className="h-12 border-slate-300" placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Email Address</FormLabel>
                        <FormControl>
                          <Input className="h-12 border-slate-300" type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Phone Number</FormLabel>
                        <FormControl>
                          <Input className="h-12 border-slate-300" type="tel" placeholder="(555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0A1A2F]">Financial Info</h2>
                  <p className="text-muted-foreground mt-1">Provide your business and financial details.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Business Name</FormLabel>
                        <FormControl>
                          <Input className="h-12 border-slate-300" placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tinNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Registration No. / TIN</FormLabel>
                        <FormControl>
                          <Input className="h-12 border-slate-300" placeholder="e.g. 123-456-789" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessAddress"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-slate-700">Business Address</FormLabel>
                        <FormControl>
                          <Input className="h-12 border-slate-300" placeholder="123 Main St, City, Province" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Business Type</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="">Select a type...</option>
                            <option value="Sole Proprietorship">Sole Proprietorship</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Corporation">Corporation</option>
                            <option value="LLC">LLC</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="annualRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Annual Revenue (₱)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 250000"
                            className="h-12 border-slate-300"
                            {...field}
                            value={field.value ?? ""}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value ==="" ? undefined : Number(e.target.value)
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="yearsInBusiness"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Years in Business</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g. 5"
                            className="h-12 border-slate-300"
                            {...field}
                            value={field.value ?? ""}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value ==="" ? undefined : Number(e.target.value)
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-[#0A1A2F]">Document Upload</h2>
                  <p className="text-muted-foreground mt-1">Upload a valid government-issued ID (JPG, PNG, or PDF — max 5MB).</p>
                </div>

                <div className="relative flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-300  rounded-xl bg-slate-50  hover:bg-slate-100  transition-colors">
                  <Input
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                    id="documents-upload"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={(e) => {
                      if (e.target.files) {
                        setUploadedFiles(Array.from(e.target.files));
                      }
                    }}
                  />
                  <Paperclip className="h-12 w-12 text-primary mb-4" />
                  <p className="text-lg font-semibold text-[#0A1A2F]">Drag & drop your ID here</p>
                  <p className="text-sm text-slate-500 mt-1">or <span className="text-primary underline">browse file</span> - JPG, PNG, PDF - Max 5MB</p>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg flex flex-col space-y-2">
                    <p className="text-sm font-semibold text-emerald-800 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {uploadedFiles.length} file(s) selected
                    </p>
                    <div className="space-y-1">
                      {uploadedFiles.map((file, idx) => (
                        <div key={idx} className="text-xs text-emerald-700 flex items-center justify-between bg-white px-3 py-2 rounded border border-emerald-100">
                          <span className="truncate max-w-[200px] sm:max-w-[300px]">{file.name}</span>
                          <span className="text-emerald-500 font-medium">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-slate-100  p-4 rounded-lg">
                  <p className="text-sm font-semibold text-[#0A1A2F]  mb-2">Accepted Government IDs:</p>
                  <p className="text-sm text-slate-600">
                    National ID · Passport · Driver's License · SSS / GSIS · PhilHealth · Voter's ID · PRC ID · TIN ID
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="agreedToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-slate-600  font-normal leading-relaxed">
                          I agree to the <a href="#" className="text-primary hover:underline">Terms & Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>. I authorize 928 Credit Concept Lending Investor Corp. to verify my information and contact me regarding my application.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            )}

            <div className="flex justify-between items-center pt-8 mt-8 border-t border-slate-200">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep} className="h-12 px-8 text-[#0A1A2F] border-[#D99026] text-[#D99026] hover:bg-[#D99026]/10">
                  ← Back
                </Button>
              ) : (
                <div />
              )}
              
              {currentStep < 4 ? (
                <Button type="button" onClick={nextStep} className="h-12 px-8 bg-[#D99026] hover:bg-[#c27c20] text-white">
                  Next Step →
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="h-12 px-8 bg-[#D99026] hover:bg-[#c27c20] text-white font-semibold flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
