import Container from "./Container";
import Logo from "../assets/Logo.svg?react";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="info-section" className="mt-[77px] pb-[75px] ">
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center text-center pl-5 md:pl-[90px] pr-[42px]">
          <Link href="/">
            <Logo className="w-[131px] md:w-[79px]" />
          </Link>
          <ul className="flex flex-col md:flex-row flex-wrap justify-end gap-[13px] text-xs">
            <li>Mappa del sito</li>
            <li>Termini di utilizzo</li>
            <li>Avviso di accessibilità</li>
            <li>Gestione dei Cookie</li>
            <li>
              Politica sulla protezione dei dati e informativa sulla privacy
            </li>
            <li>Avviso di frode Web e phishing</li>
            <li>Politica sui reclami – Australia</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
