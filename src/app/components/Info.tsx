import Container from "./Container";
import Sheet from "../assets/Info-sheet.svg?react";
import Hat from "../assets/Info-hat.svg?react";
import Tree from "../assets/Info-tree.svg?react";

export default function Info() {
  return (
    <section id="info-section" className="mb-[77px]">
      <Container>
        <h1 className="flex justify-center items-center mb-[50px] text-[37px]">
          Inizia a servire con noi
        </h1>
        <ul className="flex flex-col lg:flex-row">
          <li className="border-none md:border-r-2 md:border-[#EE1B25] px-8 py-2 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-[67px] h-[85px] mb-[48px]">
              <Sheet />
            </div>

            <h2 className="text-[31px] mb-[34px]">Registrazione</h2>
            <p className="max-w-[348px] mb-9 text-[#242424] text-xl md:text-base">
              Compilare tutti i campi del modulo di registrazione sul sito web.
            </p>
            <button className="bg-[#D21D05] w-full py-[15px] rounded-[15px]">
              INIZIARE
            </button>
          </li>
          <li className="border-none md:border-r-2 md:border-[#EE1B25] px-8 py-2 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-[95px] h-[65px] mb-[30px]">
              <Hat />
            </div>
            <h2 className="text-[31px] mb-[34px] whitespace-nowrap">
              Consultazione di esperti
            </h2>

            <p className="mb-9 max-w-[294px] text-[#242424] text-xl md:text-[15px]">
              Dopo la registrazione, rispondere all&apos;invito del Consulente
              di supporto di Petrol Energia e seguire tutte le sue istruzioni.
            </p>
            <button className="bg-[#D21D05] w-full py-[15px] rounded-[15px]">
              INIZIARE
            </button>
          </li>
          <li className="px-8 py-2 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-[82px] h-[82px] mb-[32px]">
              <Tree className="mb-[52px]" />
            </div>

            <h2 className="text-[31px] mb-[48px]">Deposito</h2>
            <p className="max-w-[332px] mb-9 text-[#242424] text-xl md:text-base">
              Dopo la verifica, è necessario depositare un minimo di 250 euro
              sul conto dell&apos;azionista.
            </p>
            <button className="bg-[#D21D05] w-full py-[15px] rounded-[15px]">
              INIZIARE
            </button>
          </li>
        </ul>
      </Container>
    </section>
  );
}
