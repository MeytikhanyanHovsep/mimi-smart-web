import Image from "next/image";
import React from "react";

type Props = { isDark: boolean };

export default function Item8({ isDark }: Props) {
    return (
        <div className="home-item-8 drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] border-0!">
            <div
                className={`w-full group h-full relative  wall-top-light border-[7.5px] pt-[50px] border-t-0 border-r-0 ${
                    isDark ? "wall-top-dark" : ""
                }`}
            >
                <span className="absolute w-[3px] bg-[#F2F3F8] dark:bg-[#505050] h-full left-0 top-0"></span>
                <span className="absolute w-[3px] bg-[#F2F3F8] dark:bg-[#505050] h-full left-0 top-0"></span>
                <div className="absolute right-[-5px] bottom-[-7.5px] flex h-[30%]">
                    <div
                        className={`w-[7.5px] z-1 h-full border-top-light transition-colors ${
                            isDark ? "border-top-dark" : ""
                        }`}
                    />
                    <div
                        className={`w-[3px] z-[-1] h-full transition-colors bg-[#F2F3F8] dark:bg-[#505050]`}
                    />
                </div>
                <div className="absolute w-[30px] -rotate-90 bottom-[10%] z-20 left-[-12px] h-auto ">
                    <Image
                        src="/assets/ceiling-mounted.png"
                        alt="fire-ceiling-mounted"
                        width={30}
                        height={30}
                        className={`h-min w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/ceiling-mounted-dark.png"
                        alt="fire-ceiling-mounted Dark"
                        width={30}
                        height={30}
                        className={`absolute top-0 left-0 h-min w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
                <div className="group w-[70px] rotate-180 flex justify-end relative pt-[13px]">
                    {/* Контейнер для трапеции */}
                    <div className="dark:opacity-0 h-[90px] rotate-178 w-[50px] absolute top-[5px] right-[18px] z-1 [clip-path:polygon(0%_20%,100%_0%,100%_100%,0%_80%)]">
                        {/* Градиент для LIGHT темы (плавный opacity) */}
                        <div
                            className="absolute inset-0 bg-linear-to-b from-[#C9E7EF] to-[#A7D8E5] 
                            opacity-0 group-hover:opacity-100 dark:group-hover:opacity-0
                            transition-opacity duration-500 ease-in-out"
                        ></div>

                        {/* Градиент для DARK темы (плавный opacity) */}
                        <div
                            className="absolute inset-0 bg-linear-to-b from-[#1e293b] to-[#334155] 
                            opacity-0 dark:group-hover:opacity-100
                            transition-opacity duration-500 ease-in-out"
                        ></div>
                    </div>

                    {/* Контент с картинками (Conditioner) */}
                    <div className="relative mr-[7px] w-max h-[68px] z-10">
                        <Image
                            src="/assets/condition.png"
                            alt="Conditioner"
                            width={200}
                            height={150}
                            className={`h-full w-auto object-contain transition-opacity duration-1000 ${
                                isDark ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <Image
                            src="/assets/condition-dark.png"
                            alt="Conditioner Dark"
                            width={200}
                            height={150}
                            className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000 ${
                                isDark ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
