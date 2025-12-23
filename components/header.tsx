import { Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Header({}: Props) {
    const menu = [
        "Главная",
        "Услуги",
        "Фкнционал",
        "Оборудование",
        "Фурнитура",
        "Готовые решения",
        "Проекты",
    ];

    return (
        <header className="z-1000 dark:bg-[#0B0D10] bg-[#F4F4F4] absolute top-0 w-full border-b border-[#45454526] px-[30px] max-sm:px-[16px] transition-colors duration-300 max-md:py-[10px]">
            <div className="max-w-[1200px] py-[8px] items-center mx-auto flex justify-between">
                <Link
                    href="/"
                    className="text-[22px]  dark:text-[white] font-bold"
                >
                    <span className="text-[#00D0FF]">MiMi</span>
                    Smart
                </Link>
                <nav>
                    <ul className="flex max-lg:hidden items-center gap-[32px]">
                        {menu.map((e, i) => (
                            <li key={i}>
                                <Link
                                    href="#"
                                    className="text-[#262626] dark:text-[#939393] text-[14px]"
                                >
                                    {e}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className={
                        "py-[8px] px-[16px] bg-white flex font-bold gap-[5px] items-center max-md:aspect-square max-md:rounded-[100%] dark:bg-[#00D0FF] dark:text-[white] rounded-[20px] text-[14px] "
                    }
                >
                    <Phone className="w-[15px] dark:fill-white fill-black dark:text-white" />
                    <span className="max-md:hidden"> Контакты</span>
                </button>
            </div>
        </header>
    );
}
