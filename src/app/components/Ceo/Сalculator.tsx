"use client";
import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

export default function Calculator() {
  const [months, setMonths] = useState<number>(1);
  const [amount, setAmount] = useState<number>(300);

  const calculateProfit = (months: number, amount: number): number => {
    const rate = 0.05;
    const profit = amount + amount * rate * months;
    return profit;
  };

  const handleMonthsChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setMonths(value);
    }
  };

  const handleAmountChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setAmount(value);
    }
  };

  return (
    <div className="max-w-[690px] md:w-[690px] bg-white p-10 pt-[90px] rounded-lg shadow-lg">
      <div className="mb-[75px]">
        <Slider
          min={1}
          max={12}
          value={months}
          onChange={handleMonthsChange}
          marks={{
            1: "1",
            3: "3",
            6: "6",
            9: "9",
            12: "12",
          }}
          step={1}
        />
      </div>

      <div className="mb-6">
        <Slider
          min={300}
          max={15000}
          value={amount}
          onChange={handleAmountChange}
          marks={{
            300: "300",
            3975: "3975",
            7650: "7650",
            11325: "11325",
            15000: "15000",
          }}
          step={1}
        />
      </div>

      <button className="mt-6 w-full bg-custom-gradient text-[20px] md:text-[26px] whitespace-nowrap text-white py-2 md:py-5 px-auto rounded-lg">
        MOGUĆA DOBIT: €{calculateProfit(months, amount).toFixed(2)}
      </button>
    </div>
  );
}
