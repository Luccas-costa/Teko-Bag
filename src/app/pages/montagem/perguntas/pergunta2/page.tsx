"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../perguntas.module.css"

import BotaoProximaPage from "@/components/montagem/Aplicativo/perguntas/BotaoProximaPage";

export default function Pagina1() {
  const [isRadioSelected, setIsRadioSelected] = useState(false);

  const handleRadioChange = () => {
    setIsRadioSelected(true);
  };
  return (
    <div className='w-screen h-full bg-banner5 flex flex-col items-center justyfy-center p-2 lg:p-6 xl:p-14 relative'>
      <div className='p-3 2xl:w-1/4 md:w-1/2 w-4/5 border border-zinc-950 rounded-lg flex flex-col items-center justyfy-center shadow-lg my-auto'>
        <div className='pt-6 pb-4'>
          <Image
            src='/logo-transparente.png'  
            width={100}
            height={100}
            alt={""}
          />
        </div>
        <div className='text-center text-xl font-medium'>       
            Oque o levou, a nos escolher em vez da concorrência?
        </div>
        <form className='flex flex-col items-center w-full space-y-2 mt-6'>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={handleRadioChange}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Qualidade
          </label>

          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={handleRadioChange}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Sustentabilidade
          </label>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={handleRadioChange}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Versatilidade 
          </label>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={handleRadioChange}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Estética
          </label>

          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={handleRadioChange}
              // value={value}
              // checked={checked}
              // onChange=''
            />
            Outros 
          </label>
        </form>
        <div className='mt-6 text-center font-semibold lg:text-lg sm:text-base text-xs text-zinc-800'>
          Prosseguir para terceira pergunta
        </div>
        <BotaoProximaPage pergunta={3} disabled={!isRadioSelected} />
        <div className="mt-6 mb-2">
            <Link href='/' className="font-semibold text-black active:text-zinc-500">voltar a home</Link>
        </div>
      </div>
    </div>
  );
}
