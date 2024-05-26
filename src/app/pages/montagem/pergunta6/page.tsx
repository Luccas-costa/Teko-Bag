"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../perguntas.module.css";

import BotaoProximaPage from "@/components/montagem/perguntas/BotaoProximaPage";
import { salvarResposta } from "@/utils/perguntas"; // Importe a função para salvar a resposta

export default function Pagina5() {
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleRadioChange = (value: number) => {
    setIsRadioSelected(true);
    setSelectedOption(value);
  };

  const handleProximaPage = () => {
    if (selectedOption !== null) {
      salvarResposta(5, selectedOption); // Salvar a resposta para a pergunta 5
    }
  };

  return (
    <div
      className={`w-screen h-full flex flex-col items-center justyfy-center p-2 lg:p-6 xl:p-14 relative ${styles.background}`}
    >
      <div className='p-3 2xl:w-1/4 md:w-1/2 w-4/5 bg-banner5/85 rounded-lg flex flex-col items-center justyfy-center shadow-lg my-auto'>
        <div className='pt-6 pb-4'>
          <Image
            src='/logo-transparente.png'
            width={100}
            height={100}
            alt={""}
          />
        </div>
        <div className='text-center text-xl font-medium'>
          E por ultimo, qual o tamanho da sua necessidade?
        </div>
        <form className='flex flex-col items-center w-full space-y-2 mt-6'>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(1)}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Bag{"'"}s | Grandes
          </label>

          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(1)}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Bag{"'"}s | Grandes com bolsos
          </label>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(1)}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Bag{"'"}s | Medias
          </label>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(1)}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Bag{"'"}s | Medias com bolsos
          </label>

          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(1)}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Bag{"'"}s | Pequenas
          </label>
        </form>
        <div className='mt-6 text-center font-semibold lg:text-lg sm:text-base text-xs text-zinc-800'>
          Prosseguir para vizualizar as bag{"'"}s
        </div>
        <BotaoProximaPage
          pergunta={7}
          disabled={!isRadioSelected}
          onClick={handleProximaPage}
        />
        <div className='mt-6 mb-2'>
          <Link
            href='/'
            className='font-semibold text-black active:text-zinc-500'
          >
            voltar a home
          </Link>
        </div>
      </div>
    </div>
  );
}
