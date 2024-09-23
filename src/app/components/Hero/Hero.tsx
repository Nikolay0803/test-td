"use client";
import Container from "../Container/Container";
import Hero_logo from "../../assets/Hero-logo.png";
import Hero_cuboid from "../../assets/Hero-cuboid.png";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

export default function Hero() {
  return (
    <section className="mb-[92px]">
      <Container>
        <h1 className="hidden">Hero Section</h1>
        <div className="flex mb-[53px] md:mb-[75px] pl-[27px] lg:pl-[159px] ">
          <p className="max-w-[467px] text-[#D81E05] text-2xl md:text-[28px] flex justify-center items-center">
            Investire 250 euro per raggiungere 5000 euro in una settimana vi
            sembra impossibile? Con il Gruppo Generali potete fare ancora di
            più!
          </p>
          <div
            className="hidden md:block w-[599px] h-[536px] pl-[157px] pt-[79px]"
            style={{
              backgroundImage: `url(${Hero_logo.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <RegisterForm />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[42px] px-[37px] md:px-[90px]">
          <div className="block md:hidden bg-[#D9D9D9] w-[356px] h-[187px]"></div>
          <Image
            className="hidden md:block"
            src={Hero_cuboid}
            alt="Grey cuboid"
          ></Image>
          <div className="block md:hidden">
            <RegisterForm />
          </div>
          <div className="max-w-[497px] flex flex-col justify-center items-center">
            <h2 className="text-[#C22821] mb-2">IL NOSTRO SCOPO</h2>
            <p className="text-[#0E69AF] text-[25px]">
              Siamo qui per promuovere lo sviluppo e la circolazione delle
              persone, delle imprese e del Paese.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
