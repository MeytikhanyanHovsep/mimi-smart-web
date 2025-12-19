import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

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
        <header className="z-1000 absolute top-0 w-full border-b border-[#45454526]">
            <div className="max-w-[1200px] py-[8px] items-center mx-auto flex justify-between">
                <Link href="/" className="text-[22px] font-bold">
                    <span className="text-[#00D0FF]">MiMi</span>Smart
                </Link>
                <nav>
                    <ul className="flex items-center gap-[32px]">
                        {menu.map((e, i) => (
                            <li key={i}>
                                <Link
                                    href="#"
                                    className="text-[#262626] text-[14px]"
                                >
                                    {e}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className={
                        "py-[12px] px-[16px] bg-white flex font-bold gap-[5px] items-center rounded-[20px] text-[14px]"
                    }
                >
                    <Phone className="w-[15px]" fill="black" />
                    Контакты
                </button>
            </div>
        </header>
    );
}
