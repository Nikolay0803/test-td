"use client";
import Image from "next/image";
import Container from "../Container/Container";
import Ceo_photo from "../../assets/Ceo.png";
import Ceo_Logo from "../../assets/Ceo-Logo-city.png";
import Calculator from "./Сalculator";

export default function Ceo() {
  return (
    <section
      id="ceo-section"
      className="bg-gradient-to-b from-[#D81E05] to-[#490900] relative px-3 lg:px-[58px]"
    >
      <Container>
        <h1 className="hidden">Ceo</h1>
        <div className="pt-[43px] lg:pt-[72px] flex flex-col lg:flex-row items-start mb-7">
          <div className="relative left-14 lg:left-0 z-40 w-[297px] h-[297px] lg:w-[464px] lg:h-[464px]">
            <Image src={Ceo_photo} alt="Ceo photo" className="w-full" />
          </div>
          <div className="relative left-0 lg:left-[-65px] top-[-25px] lg:top-[80px] max-w-[680px] pt-[20px]">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: `url(${Ceo_Logo.src})` }}
            />
            <div className="relative p-6 text-white">
              <p className="pl-[33px] lg:pl-[62px] text-[20px] font-bold leading-[22.4px]">
                Philippe Donnet, amministratore delegato di Generali, ha appena
                festeggiato dieci anni in Italia e in un’intervista a
                “Repubblica” spiega che bilancio trae dal nostro Paese: “In
                questi dieci anni il mondo ha dovuto fare i conti con prove
                molto dure e questo ci ha resi più capaci di gestire
                l’imprevedibile. L’Italia ha resistito bene. Per quanto mi
                riguarda, tre anni fa sono diventato cittadino italiano: perché
                ci tenevo a rimarcare un’adesione forte ai valori e alla cultura
                di questo Paese”. Un’altra prova per l’economia è stato il
                repentino rialzo dei tassi: “A mio parere è improprio parlare
                oggi di tassi alti: quando ero teenager, i mutui viaggiavano a
                due cifre percentuali. La vera anomalia è stata vivere con tassi
                a zero per quindici anni. Oggi siamo in una situazione normale.
                Per quel che riguarda il nostro gruppo, abbiamo un business mix
                grazie al quale possiamo crescere in qualsiasi ciclo economico”.
                La crescita dell’Italia è stimata attorno allo 0,7 per cento:
                “Noi non avremo problemi ma per la crescita si può fare meglio,
                in Italia e in Europa. Ritengo che in Europa non ci sia
                abbastanza Europa, ma troppe tasse e troppe norme, che si
                sovrappongono a quelle nazionali. Questo non aiuta né le
                famiglie né le imprese: quindi abbassiamo le tasse, riduciamo le
                norme e liberiamo le energie imprenditoriali”.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-white text-[38px] flex justify-center items-center pt-0 lg:pt-[80px] mb-4">
          Potencijal dobiti
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-[42px] lg:gap-[166px] pb-[51px]">
          <Calculator />
          <div className="text-white text-center lg:text-left font-montserrat pt-0 md:pt-[88px]">
            <p className="mb-4">UKUPNA DOBIT KORISNIKA:</p>
            <p className="text-[42px] mb-10">€ 128 567 000</p>
            <p className="mb-4">AKTIVNI KORISNICI:</p>
            <p className="text-[42px]">77 335</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
