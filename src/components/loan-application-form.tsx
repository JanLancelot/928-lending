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
                  currentStep >= step.id ?"bg-[#0B192C]" :"bg-slate-200"
                )} />

                <div className={cn("flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 z-10 transition-all duration-300",
                  currentStep > step.id ?"bg-[#0B192C] border-[#0B192C] text-white" :
                  currentStep === step.id ?"bg-[#E87722] border-[#E87722] text-white shadow-md" :"bg-white border-slate-300 text-slate-400"
                )}>
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : <span className="font-semibold">{step.id}</span>}
                </div>

                <div className={cn("h-[2px] w-full",
                  idx === steps.length - 1 ?"opacity-0" :"opacity-100",
                  currentStep > step.id ?"bg-[#0B192C]" :"bg-slate-200"
                )} />
              </div>
              <span className={cn("absolute top-12 text-xs font-semibold whitespace-nowrap text-center transition-colors duration-300",
                currentStep >= step.id ? (currentStep === step.id ?"text-[#E87722]" :"text-[#0B192C]") :"text-slate-400"
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
                  <h2 className="text-2xl font-bold text-[#0B192C]">Loan Details</h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Tell us about the loan facility you are requesting.</p>
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
                            className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]"
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
                          <Input
                            placeholder="e.g., Working Capital, Inventory Purchase"
                            className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]"
                            {...field}
                          />
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
                  <h2 className="text-2xl font-bold text-[#0B192C]">Personal Information</h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Provide your primary contact details.</p>
                </div>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Juan Dela Cruz" className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="juan@example.com" type="email" className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]" {...field} />
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
                          <FormLabel className="text-slate-700">Mobile Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="09171234567" className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0B192C]">Business Financial Information</h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Tell us about your registered enterprise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Dela Cruz Trading Corp." className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]" {...field} />
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
                        <FormLabel className="text-slate-700">TIN Number</FormLabel>
                        <FormControl>
                          <Input placeholder="000-000-000-000" className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]" {...field} />
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
                        <FormLabel className="text-slate-700">Business Structure</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Sole Proprietorship, Corporation" className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]" {...field} />
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
                        <FormLabel className="text-slate-700">Years in Operation</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 3"
                            className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]"
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
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="businessAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Business Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Building/Street, Barangay, City, Province" className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="annualRevenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Estimated Annual Gross Revenue (₱)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="e.g., 2000000"
                              className="h-12 border-slate-300 rounded-md focus-visible:ring-[#E87722]"
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
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0B192C]">Upload Documents & Submit</h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Upload supporting business registration documents (optional) and confirm.</p>
                </div>

                <div className="space-y-4">
                  <FormLabel className="text-slate-700">Supporting Business Documents (DTI/SEC, Mayor's Permit, Bank Statements)</FormLabel>
                  <div className="relative flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                    <Paperclip className="w-8 h-8 text-[#E87722] mb-2" />
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">Click or drag files to upload</p>
                    <p className="text-[11px] text-slate-500 mt-1">PDF, PNG, JPG up to 10MB per file</p>
                    <input
                      id="documents-upload"
                      type="file"
                      multiple
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => {
                        if (e.target.files) {
                          setUploadedFiles(Array.from(e.target.files));
                        }
                      }}
                    />
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold text-[#0B192C]">Selected Files ({uploadedFiles.length}):</p>
                      <div className="space-y-1">
                        {uploadedFiles.map((file, idx) => (
                          <div key={idx} className="flex items-center text-xs text-slate-600 bg-white p-2 rounded-md border border-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                            <span className="truncate">{file.name}</span>
                            <span className="ml-auto text-slate-400 text-[10px]">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="agreedToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border border-slate-200 p-4 bg-slate-50">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                          I agree to the <a href="#" className="text-[#E87722] font-semibold hover:underline">Terms & Conditions</a> and <a href="#" className="text-[#E87722] font-semibold hover:underline">Privacy Policy</a>. I authorize 928 Credit Concept Lending Investor Corp. to verify my information and contact me regarding my application.
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
                <Button type="button" variant="outline" onClick={prevStep} className="h-11 px-7 text-[#0B192C] border-slate-300 hover:bg-slate-100 rounded-md font-semibold text-xs sm:text-sm">
                  ← Back
                </Button>
              ) : (
                <div />
              )}
              
              {currentStep < 4 ? (
                <Button type="button" onClick={nextStep} className="h-11 px-8 bg-[#E87722] hover:bg-[#d46716] text-white font-bold rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm">
                  Next Step →
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="h-11 px-8 bg-[#E87722] hover:bg-[#d46716] text-white font-bold rounded-md shadow-md flex items-center transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
