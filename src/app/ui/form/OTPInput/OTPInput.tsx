"use client";
import React, { useRef, useState } from "react";

export default function OTPInput() {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").slice(0, 4);
    const newOtp = data.split("");
    setOtp([...newOtp, ...Array(4 - newOtp.length).fill("")]);
    newOtp.forEach((digit, index) => {
      if (inputs.current[index]) {
        inputs.current[index]!.value = digit;
      }
    });
    inputs.current[data.length]?.focus();
  };

  return (
    <div className="flex gap-2" onPaste={handlePaste}>
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          required
          name={"opt-" + index}
          className="w-12 h-12 text-center text-lg border border-[#1A1B2380] dark:border-gray-400 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-primary"
          value={otp[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          ref={(el) => {
            if (el) inputs.current[index] = el; // ربط المرجع بالعنصر
          }}
        />
      ))}
    </div>
  );
}