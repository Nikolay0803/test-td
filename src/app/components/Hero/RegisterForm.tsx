"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-customGray pt-[52px] pb-[45px] px-[27px] max-w-[354px] rounded-[15px] font-opensans"
    >
      <span className="flex flex-col gap-[11px] mb-[52px]">
        <input
          {...register("firstName", {
            required: "Il nome è obbligatorio",
            minLength: {
              value: 2,
              message: "Il nome deve contenere almeno 2 caratteri",
            },
          })}
          placeholder="IL SUO NOME"
          className="py-[11px] px-3 rounded-[4px]"
        />
        {errors.firstName && (
          <span className="text-[#D81E05] text-xs">
            {errors.firstName.message}
          </span>
        )}

        <input
          {...register("lastName", {
            required: "Il cognome è obbligatorio",
            minLength: {
              value: 2,
              message: "Il cognome deve contenere almeno 2 caratteri",
            },
          })}
          placeholder="IL SUO COG"
          className="py-[11px] px-3 rounded-[4px]"
        />
        {errors.lastName && (
          <span className="text-[#D81E05] text-xs">
            {errors.lastName.message}
          </span>
        )}

        <input
          {...register("email", {
            required: "L'email è obbligatoria",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Formato email non valido",
            },
          })}
          placeholder="E-MAIL"
          className="py-[11px] px-3 rounded-[4px]"
        />
        {errors.email && (
          <span className="text-[#D81E05] text-xs">{errors.email.message}</span>
        )}

        <Controller
          name="phone"
          control={control}
          rules={{ required: "Il telefono è obbligatorio" }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"ua"}
              inputProps={{
                style: { marginLeft: "1px", height: "45px", width: "100%", },
              }}
            />
          )}
        />
        {errors.phone && (
          <span className="text-[#D81E05] text-xs">{errors.phone.message}</span>
        )}
      </span>
      <button
        className="bg-[#D81E05] w-full py-[14px] text-white rounded-[4px]"
        type="submit"
      >
        REGISTRATI
      </button>
    </form>
  );
}
