import Container from "../Container/Container";
import Mediobanca from "../../assets/mediobanca.svg?react";
import Unicredit from "../../assets/unicredit.svg?react";
import Banca from "../../assets/banca.svg?react";
import BD from "../../assets/b&d.svg?react";
import Barlo from "../../assets/barlo.svg?react";
import Logo from "../../assets/Logo.svg?react";

export default function Partners() {
  return (
    <section className="pt-[72px] border-b-2 border-[#EE1B25] pb-[39px]">
      <Container>
        <h1 className="text-center mb-[59px] text-[30px]">
          Gli azionisti dell&apos;azienda
        </h1>
        <ul className="w-[390px] md:w-[660px] mx-auto flex flex-wrap justify-center items-center gap-[22px] md:gap-[38px] text-[#171717]">
          <li>
            <Mediobanca className="w-[126px] md:w-[214px]" />
          </li>
          <li>
            <Unicredit className="w-[100px] md:w-[170px]" />
          </li>
          <li>
            <Banca className="w-[119px] md:w-[200px]" />
          </li>
          <li>
            <BD className="w-[61px] md:w-[103px]" />
          </li>
          <li>
            <Barlo className="w-[124px] md:w-[209px]" />
          </li>
          <li>
            <Logo className="w-[47px] md:w-[80px]" />
          </li>
        </ul>
      </Container>
    </section>
  );
}
