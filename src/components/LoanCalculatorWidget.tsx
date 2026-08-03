"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Calculator,
  X,
  Sparkles,
  RotateCcw,
  HelpCircle,
  Percent,
  Calendar,
  DollarSign,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Payment Frequencies
type Frequency = "monthly" | "semi-monthly" | "weekly" | "daily";

interface FrequencyOption {
  id: Frequency;
  label: string;
  perMonth: number;
  subtitle: string;
}

const FREQUENCY_OPTIONS: FrequencyOption[] = [
  { id: "monthly", label: "Monthly", perMonth: 1, subtitle: "1x per month" },
  { id: "semi-monthly", label: "Semi-Monthly", perMonth: 2, subtitle: "Every 15 days" },
  { id: "weekly", label: "Weekly", perMonth: 4, subtitle: "4x per month" },
  { id: "daily", label: "Daily", perMonth: 20, subtitle: "20 business days" },
];

const PRESET_AMOUNTS = [50000, 100000, 250000, 500000, 1000000];
const PRESET_TERMS = [3, 6, 12, 18, 24, 36];

const LOCAL_STORAGE_KEY = "928_loan_calculator_state_v1";

interface CalculatorState {
  isOpen: boolean;
  amount: number;
  termMonths: number;
  monthlyRate: number; // e.g. 2.5%
  frequency: Frequency;
  processingFeePercent: number; // e.g. 2.5%
}

const DEFAULT_STATE: CalculatorState = {
  isOpen: false,
  amount: 250000,
  termMonths: 12,
  monthlyRate: 2.5,
  frequency: "monthly",
  processingFeePercent: 2.5,
};

export function LoanCalculatorWidget() {
  const [state, setState] = useState<CalculatorState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  // Load saved state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setState((prev) => ({
          ...prev,
          ...parsed,
          amount: Math.max(10000, Math.min(2000000, Number(parsed.amount) || 250000)),
          termMonths: Math.max(1, Math.min(36, Number(parsed.termMonths) || 12)),
          monthlyRate: Math.max(0.1, Math.min(10, Number(parsed.monthlyRate) || 2.5)),
          processingFeePercent: Math.max(0, Math.min(10, Number(parsed.processingFeePercent) || 2.5)),
        }));
      }
    } catch {
      // Fallback to default state if localStorage is unavailable
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Persist state to localStorage whenever inputs change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage errors
    }
  }, [state, isLoaded]);

  // Calculations
  const calculations = useMemo(() => {
    const amount = Math.max(0, state.amount);
    const termMonths = Math.max(1, state.termMonths);
    const monthlyRate = Math.max(0, state.monthlyRate);
    const feePercent = Math.max(0, state.processingFeePercent);

    // Total interest = Amount * (monthly rate / 100) * termMonths
    const totalInterest = amount * (monthlyRate / 100) * termMonths;

    // Processing fee = Amount * (feePercent / 100)
    const processingFeeAmount = amount * (feePercent / 100);

    // Net disbursement = Amount - Processing Fee
    const netDisbursement = Math.max(0, amount - processingFeeAmount);

    // Total repayment = Amount + Total Interest
    const totalRepayment = amount + totalInterest;

    // Payments frequency info
    const freqConfig = FREQUENCY_OPTIONS.find((f) => f.id === state.frequency) || FREQUENCY_OPTIONS[0];
    const totalPaymentsCount = termMonths * freqConfig.perMonth;
    const installmentPerPeriod = totalRepayment / Math.max(1, totalPaymentsCount);

    return {
      amount,
      termMonths,
      monthlyRate,
      feePercent,
      totalInterest,
      processingFeeAmount,
      netDisbursement,
      totalRepayment,
      totalPaymentsCount,
      installmentPerPeriod,
      freqLabel: freqConfig.label,
    };
  }, [state]);

  const updateState = <K extends keyof CalculatorState>(key: K, value: CalculatorState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setState((prev) => ({
      ...DEFAULT_STATE,
      isOpen: prev.isOpen,
    }));
  };

  // Currency formatters
  const formatPHP = (val: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatPHPExact = (val: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 2,
    }).format(val);
  };

  // Slider progress fill percentages
  const amountSliderPercent = Math.max(0, Math.min(100, ((state.amount - 10000) / (2000000 - 10000)) * 100));
  const termSliderPercent = Math.max(0, Math.min(100, ((state.termMonths - 1) / (36 - 1)) * 100));
  const rateSliderPercent = Math.max(0, Math.min(100, ((state.monthlyRate - 0.5) / (10.0 - 0.5)) * 100));
  const feeSliderPercent = Math.max(0, Math.min(100, ((state.processingFeePercent - 0.0) / (10.0 - 0.0)) * 100));

  if (!isLoaded) return null;

  return (
    <>
      {/* Floating Trigger Button on Bottom Right */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-auto">
        <button
          onClick={() => updateState("isOpen", !state.isOpen)}
          aria-label="Toggle Loan Calculator"
          className={`group flex items-center justify-center w-14 h-14 sm:w-auto sm:h-auto p-0 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border ${
            state.isOpen
              ? "bg-slate-900 border-slate-800 text-white hover:bg-slate-800"
              : "bg-[#0B192C] border-[#0B192C] text-white hover:bg-[#12253f] ring-4 ring-[#0B192C]/20"
          }`}
        >
          {state.isOpen ? (
            <X className="w-6 h-6 text-slate-300 shrink-0" />
          ) : (
            <>
              <Calculator className="w-6 h-6 text-[#E87722] group-hover:rotate-12 transition-transform duration-300 shrink-0" />
              <span className="text-xs font-bold text-white tracking-wide ml-2 hidden sm:inline">
                Loan Calculator
              </span>
            </>
          )}
        </button>
      </div>

      {/* Floating Popup Modal Card (White Theme) */}
      {state.isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[85vh] z-50 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-slate-100 text-[#0B192C] rounded-lg">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#0B192C] leading-tight">
                  928 Loan Calculator
                </h3>
                <p className="text-[11px] text-slate-500">
                  Instant Repayment & Disbursement Estimator
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleReset}
                title="Reset to Default"
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => updateState("isOpen", false)}
                title="Close"
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body (Scrollable Controls & Output) */}
          <div className="p-4 sm:p-5 overflow-y-auto space-y-5 flex-1 custom-scrollbar text-xs sm:text-sm">
            
            {/* Primary Result Card */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-sm">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Estimated {calculations.freqLabel} Payment</span>
                <span className="text-slate-700 text-[10px] font-bold bg-slate-200/70 px-2 py-0.5 rounded border border-slate-300/50">
                  {calculations.totalPaymentsCount} Payments
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B192C]">
                {formatPHPExact(calculations.installmentPerPeriod)}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-slate-500">Net Received:</span>
                  <p className="font-bold text-slate-800">{formatPHP(calculations.netDisbursement)}</p>
                </div>
                <div>
                  <span className="text-slate-500">Total Repayment:</span>
                  <p className="font-bold text-slate-800">{formatPHP(calculations.totalRepayment)}</p>
                </div>
              </div>
            </div>

            {/* Adjustable Controls */}
            <div className="space-y-4">
              
              {/* 1. Loan Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label className="text-slate-700 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-slate-500" />
                    <span>Loan Amount (₱)</span>
                  </label>
                  <input
                    type="number"
                    min="10000"
                    max="2000000"
                    step="5000"
                    value={state.amount}
                    onChange={(e) => updateState("amount", Number(e.target.value))}
                    className="w-28 text-right bg-slate-50 border border-slate-200 rounded px-2 py-0.5 font-bold text-slate-900 text-xs focus:outline-none focus:border-slate-400"
                  />
                </div>

                <input
                  type="range"
                  min="10000"
                  max="2000000"
                  step="5000"
                  value={state.amount}
                  onChange={(e) => updateState("amount", Number(e.target.value))}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#E87722]"
                  style={{
                    background: `linear-gradient(to right, #E87722 0%, #E87722 ${amountSliderPercent}%, #e2e8f0 ${amountSliderPercent}%, #e2e8f0 100%)`,
                  }}
                />

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => updateState("amount", amt)}
                      className={`text-[10px] font-semibold px-2 py-1 rounded-md transition-all border ${
                        state.amount === amt
                          ? "bg-[#0B192C] text-white border-[#0B192C]"
                          : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      ₱{(amt / 1000).toLocaleString()}k
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Terms (Months) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label className="text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>Terms (Months)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="36"
                    step="1"
                    value={state.termMonths}
                    onChange={(e) => updateState("termMonths", Number(e.target.value))}
                    className="w-20 text-right bg-slate-50 border border-slate-200 rounded px-2 py-0.5 font-bold text-slate-900 text-xs focus:outline-none focus:border-slate-400"
                  />
                </div>

                <input
                  type="range"
                  min="1"
                  max="36"
                  step="1"
                  value={state.termMonths}
                  onChange={(e) => updateState("termMonths", Number(e.target.value))}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#E87722]"
                  style={{
                    background: `linear-gradient(to right, #E87722 0%, #E87722 ${termSliderPercent}%, #e2e8f0 ${termSliderPercent}%, #e2e8f0 100%)`,
                  }}
                />

                {/* Term Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {PRESET_TERMS.map((t) => (
                    <button
                      key={t}
                      onClick={() => updateState("termMonths", t)}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-md transition-all border ${
                        state.termMonths === t
                          ? "bg-[#0B192C] text-white border-[#0B192C]"
                          : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      {t} Mos
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Monthly Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label className="text-slate-700 flex items-center gap-1.5">
                    <Percent className="w-3.5 h-3.5 text-slate-500" />
                    <span>Monthly Interest Rate (%)</span>
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    max="10.0"
                    step="0.1"
                    value={state.monthlyRate}
                    onChange={(e) => updateState("monthlyRate", Number(e.target.value))}
                    className="w-20 text-right bg-slate-50 border border-slate-200 rounded px-2 py-0.5 font-bold text-slate-900 text-xs focus:outline-none focus:border-slate-400"
                  />
                </div>

                <input
                  type="range"
                  min="0.5"
                  max="10.0"
                  step="0.1"
                  value={state.monthlyRate}
                  onChange={(e) => updateState("monthlyRate", Number(e.target.value))}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#E87722]"
                  style={{
                    background: `linear-gradient(to right, #E87722 0%, #E87722 ${rateSliderPercent}%, #e2e8f0 ${rateSliderPercent}%, #e2e8f0 100%)`,
                  }}
                />
              </div>

              {/* 4. Payment Frequency */}
              <div className="space-y-2">
                <label className="text-slate-700 text-xs font-semibold flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                  <span>Payment Frequency</span>
                </label>

                <div className="grid grid-cols-2 gap-1.5">
                  {FREQUENCY_OPTIONS.map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() => updateState("frequency", freq.id)}
                      className={`p-2 rounded-lg text-left transition-all border ${
                        state.frequency === freq.id
                          ? "bg-[#0B192C] text-white border-[#0B192C]"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="font-bold text-xs">{freq.label}</div>
                      <div className={`text-[10px] ${state.frequency === freq.id ? "text-slate-300" : "text-slate-400"}`}>
                        {freq.subtitle}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Processing Fee */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label className="text-slate-700 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                    <span>Processing Fee</span>
                  </label>
                  <div className="flex items-center space-x-1 text-xs font-bold text-slate-800">
                    <span>{state.processingFeePercent.toFixed(1)}%</span>
                    <span className="text-slate-400 font-normal">({formatPHP(calculations.processingFeeAmount)})</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="0.0"
                  max="10.0"
                  step="0.5"
                  value={state.processingFeePercent}
                  onChange={(e) => updateState("processingFeePercent", Number(e.target.value))}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#E87722]"
                  style={{
                    background: `linear-gradient(to right, #E87722 0%, #E87722 ${feeSliderPercent}%, #e2e8f0 ${feeSliderPercent}%, #e2e8f0 100%)`,
                  }}
                />
              </div>

            </div>

            {/* Comprehensive Calculation Breakdown */}
            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
              <button
                onClick={() => setShowSummaryModal(!showSummaryModal)}
                className="w-full py-2 px-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-between text-slate-700 font-semibold transition-colors"
              >
                <span>Full Calculation Breakdown</span>
                {showSummaryModal ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </button>

              {showSummaryModal && (
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Requested Principal:</span>
                    <span className="font-bold text-slate-900">{formatPHP(calculations.amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Interest ({calculations.monthlyRate}% x {calculations.termMonths} mos):</span>
                    <span className="font-bold text-slate-900">+{formatPHP(calculations.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Deducted Processing Fee ({calculations.feePercent}%):</span>
                    <span className="font-bold text-slate-900">-{formatPHP(calculations.processingFeeAmount)}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between font-bold">
                    <span className="text-slate-700">Net Loan Received:</span>
                    <span className="text-slate-900">{formatPHP(calculations.netDisbursement)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-slate-700">Total Amount Repaid:</span>
                    <span className="text-[#0B192C]">{formatPHP(calculations.totalRepayment)}</span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      )}
    </>
  );
}
