"use client";

import React, { useRef, useState } from "react";

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

import Image from "next/image";

import gsap from "gsap";

import { useCallback } from "react";

import SmartButton from "../button";

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
    ];

    const gridRef = useRef<HTMLDivElement>(null);

    function throttle(func: Function, limit: number) {
        let inThrottle: boolean;

        return function (this: any, ...args: any[]) {
            if (!inThrottle) {
                func.apply(this, args);

                inThrottle = true;

                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    const handleMouseMove = useCallback(
        throttle((e: React.MouseEvent) => {
            if (!gridRef.current) return;

            const { clientX, clientY } = e;

            const xPercent = clientX / window.innerWidth - 0.5;

            const yPercent = clientY / window.innerHeight - 0.5;

            gsap.to(gridRef.current, {
                x: xPercent * -120,

                y: yPercent * -120,

                rotationY: xPercent * 12,

                rotationX: yPercent * -12,

                duration: 0.2, // Минимальная длительность для резкости

                ease: "none", // Линейно, чтобы не тратить ресурсы на вычисления

                force3D: true,

                overwrite: "auto",
            });
        }, 16), // 16ms ≈ 60fps. Это уберет "очередь" из команд.

        []
    );

    const handleMouseLeave = () => {
        if (!gridRef.current) return;

        // Возврат в исходную точку

        gsap.to(gridRef.current, {
            x: 0,

            y: 0,

            rotationX: 0,

            rotationY: 0,

            duration: 0.8,

            ease: "back.out(1.2)", // Небольшой "отскок" при возврате для эффекта массы
        });
    };

    return (
        <div
            className="home-grid top-0 z-[-1] left-0 w-full h-[820px] "
            ref={gridRef}
        >
            {items.map((E: any, i) =>
                i == 8 ? (
                    <E
                        key={i}
                        handleMouseMove={handleMouseMove}
                        handleMouseLeave={handleMouseLeave}
                        isDark={isDark}
                    />
                ) : (
                    <E key={i} isDark={isDark} />
                )
            )}

            <div
                className="home-item-13 z-20 max-lg:hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            ></div>

            <div className="text-item max-lg:[grid-area:none] max-lg:absolute left-0 top-0  flex flex-col max-xl:gap-[20px] max-lg:pt-[120px] max-lg:px-[30px] max-sm:px-[16px]   z-100">
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

                <h2 className="text-[#0B0D10] transition-colors duration-300 dark:text-[white] font-bold text-[64px] max-xl:text-[40px] text-">
                    Умный дом <br className="lg:hidden" /> под ключ.
                </h2>

                <div className="text-[#0B0D10] transition-colors duration-300 dark:text-[#D9DADC] max-w-[450px] text-[17px] flex flex-col">
                    <p>
                        Производство и монтаж современной электрики.{" "}
                        <br className="max-lg:hidden" /> Автоматическое
                        управление всеми системами дома.
                    </p>
                </div>

                <SmartButton />
            </div>

            <div
                className={`absolute -z-10 top-[20px] -right-[250px] w-[600px] h-[600px] duration-1000 transition-all max-lg:hidden floor-shadow ${
                    isDark ? "floor-shadow-dark" : ""
                }`}
            ></div>

            {/* FLOOR IMAGE */}

            <Image
                src="/assets/floor.png"
                alt="floor"
                width={700}
                height={850}
                className={` absolute -z-10 h-[813px] w-auto top-[-150px] -right-[100px] object-contain  max-lg:hidden`}
            />
        </div>
    );
}
