"use client";
import React, { useEffect, useRef, useState } from "react";
import "ion-rangeslider/css/ion.rangeSlider.min.css";
import jQuery from "jquery";
import "ion-rangeslider/js/ion.rangeSlider.min.js";

interface IonRangeSliderData {
  from: number;
}

export default function Calculator() {
  const [months, setMonths] = useState<number>(1);
  const [amount, setAmount] = useState<number>(300);

  const monthsSlider = useRef<HTMLInputElement>(null);
  const amountSlider = useRef<HTMLInputElement>(null);

  const calculateProfit = (months: number, amount: number): number => {
    const rate = 0.05; // Місячна відсоткова ставка
    const profit = amount + amount * rate * months;
    return profit;
  };

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (monthsSlider.current) {
      (jQuery(monthsSlider.current) as any).ionRangeSlider({
        skin: "round",
        min: 1,
        max: 12,
        from: months,
        grid: true,
        step: 1,
        onFinish: (data: IonRangeSliderData) => setMonths(data.from),
      });
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (amountSlider.current) {
      (jQuery(amountSlider.current) as any).ionRangeSlider({
        skin: "round",
        min: 300,
        max: 15000,
        from: amount,
        grid: true,
        step: 1,
        onFinish: (data: IonRangeSliderData) => setAmount(data.from),
      });
    }
  }, [months, amount]);

  return (
    <div className="w-[410px] md:w-[690px] bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold mb-4">Potencijal Dobiti</h2>

      <div className="mb-6">
        <input ref={monthsSlider} type="text" />
      </div>

      <div className="mb-6">
        <input ref={amountSlider} type="text" />
      </div>

      <button className="mt-6 w-full bg-custom-gradient text-[20px] md:text-[26px] whitespace-nowrap text-white py-2 md:py-5 px-auto rounded-lg">
        MOGUĆA DOBIT: €{calculateProfit(months, amount).toFixed(2)}
      </button>
    </div>
  );
}
