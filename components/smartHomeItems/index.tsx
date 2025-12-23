"use client";
import React, { useState } from "react";
import Item1 from "./item1";
import Item2 from "./item2";
import Item3 from "./item3";
import Item4 from "./item4";
import Item5 from "./item5";
import Item6 from "./item6";
import Item7 from "./item7";
import Item8 from "./item8";
import Item9 from "./item9";
import Item10 from "./item10";
import Item11 from "./item11";
import Item12 from "./item12";
import Image from "next/image";

type Props = { isDark: boolean; toggleTheme: any };

export default function SmartHomeItems({ isDark, toggleTheme }: Props) {
    const items = [
        Item1,
        Item2,
        Item3,
        Item4,
        Item5,
        Item6,
        Item7,
        Item8,
        Item9,
        Item10,
        Item11,
        Item12,
    ];
    return (
        <div className="home-grid top-0 z-[-1] left-0 w-full h-[820px] ">
            {items.map((E, i) => (
                <E key={i} isDark={isDark} />
            ))}
            <div className="text-item flex flex-col top-[175px] left-[265px]  z-100">
                <div className="flex gap-[16px] items-center">
                    <div
                        className="w-[60px] relative shadow-lg h-[30px] grid place-items-center bg-linear-to-b dark:from-[#4D4D4D] dark:to-[#333] cursor-pointer from-[#C6C6C6] to-[white] rounded-full select-none"
                        onClick={toggleTheme}
                    >
                        <div className=" h-[28px] flex justify-start w-[58px] rounded-full duration-300 transition-all relative bg-[#D8D8D8] dark:bg-[#444444]">
                            <div className=" transition-all duration-300 translate-x-[-3px] dark:translate-x-[25px]">
                                <Image
                                    width={35}
                                    alt="circle"
                                    src="/rectangle.png"
                                    height={35}
                                    className="rounded-[100%] h-[28px] aspect-square object-contain "
                                />
                                <div className="w-[4px] h-[4px] bg-[#1EB02F] dark:bg-[#FF383C] absolute top-1/2 left-1/2 -translate-1/2"></div>
                            </div>
                        </div>
                    </div>
                    <span className="text-transparent bg-linear-to-r from-[#DBDBDB] to-[#262626] bg-clip-text text-[14px]">
                        Увидеть в дейтсвии
                    </span>
                </div>
                <h2 className="text-[#0B0D10] transition-colors duration-300 dark:text-[white] font-bold text-[64px]">
                    Умный дом под ключ
                </h2>
                <div className="text-[#0B0D10] transition-colors duration-300 dark:text-[#D9DADC] text-[17px] flex flex-col">
                    <p>Производство и монтаж современной электрики.</p>
                    <p>Автоматическое управление всеми системами дома.</p>
                </div>

                <div className="mt-[60px] group cursor-pointer font-bold bg-[#F0F4F6] border border-[white] uppercase rounded-full max-w-max px-[54px] py-[12px] text-[13px] text-[#00576B] relative">
                    <span className="h-full w-[50px] z-1 transition-all duration-[1.5s]! group-hover:left-0 absolute left-[80%] top-0 rounded-full bg-radial from-[#C4F9FC] to-[#ffffff55]"></span>
                    <span className="z-100">
                        Узнать больше<span className="ml-[5px]">{">"}</span>
                    </span>
                    <span className="h-[80px] w-[90px] -z-1 transition-all duration-[1.5s]! group-hover:left-[-10%] absolute left-[75%] top-1/2 -translate-y-1/2 rounded-full bg-radial from-[#c4f9fc] to-[#ffffff00] blur-[10px]"></span>
                </div>
            </div>
        </div>
    );
}
