import Image from "next/image";
import React from "react";

type Props = {
    isDark: boolean;
};

export default function Item7({ isDark }: Props) {
    // 1. Создаем переменную для прозрачности, чтобы использовать в стиле
    const darkOpacity = isDark ? 1 : 0;
    const lightOpacity = isDark ? 0 : 1;

    return (
        <div className="home-item-7 relative border-0! max-lg:hidden">
            {/* Основной контейнер стены */}
            <div
                className={`relative drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] min-h-[250px] wall-top-light border-[7.5px] flex transition-all duration-1000 border-l-0 ${
                    isDark ? "wall-top-dark" : ""
                }`}
                style={{ transform: "translateZ(0)" }} // Принудительно включаем GPU
            >
                {/* Линии и границы (используем встроенные Tailwind dark: для надежности) */}
                <span className="absolute h-[8.5px] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 top-0"></span>
                <span className="absolute w-[7px] z-[-1] transition-colors duration-1000 bg-[#f1f4ff] dark:bg-[#505050] h-full right-0 top-0"></span>

                {/* Светлые/Темные полоски (Border lines) */}
                <span
                    className={`absolute h-[2px] -top-[5px] w-full left-0 transition-all duration-1000 ${
                        isDark
                            ? "bg-[#464646] shadow-none"
                            : "bg-[#FDFDFC] shadow-[0_0_2px_#dbdbdb]"
                    }`}
                ></span>
                <span
                    className={`absolute h-[2px] -bottom-[5px] w-full left-0 transition-all duration-1000 ${
                        isDark
                            ? "bg-[#464646] shadow-none"
                            : "bg-[#FDFDFC] shadow-[0_0_2px_#dbdbdb]"
                    }`}
                ></span>
                <span
                    className={`absolute w-[2px] -right-[5px] h-full top-0 transition-all duration-1000 ${
                        isDark
                            ? "bg-[#464646] shadow-none"
                            : "bg-[#FDFDFC] shadow-[0_0_2px_#dbdbdb]"
                    }`}
                ></span>

                {/* Светильник */}
                <div className="absolute w-[30px] right-[5%] z-20 top-[-2px] h-auto">
                    <Image
                        src="/assets/ceiling-mounted.png"
                        alt="fire"
                        width={30}
                        height={30}
                        className="transition-opacity duration-1000 object-contain"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/ceiling-mounted-dark.png"
                        alt="fire dark"
                        width={30}
                        height={30}
                        className="absolute left-0 top-0 transition-opacity duration-1000 object-contain"
                        style={{ opacity: darkOpacity }}
                    />
                </div>

                {/* Диван */}
                <div className="absolute bottom-[-2px] right-[5px] h-[210px] w-max">
                    <Image
                        src="/assets/sofa.png"
                        alt="Sofa"
                        width={100}
                        height={250}
                        className="h-full w-auto object-contain transition-opacity duration-1000"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/sofa-dark.png"
                        alt="Sofa Dark"
                        width={100}
                        height={250}
                        className="absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000"
                        style={{ opacity: darkOpacity }}
                    />
                </div>

                {/* Окно и Маски */}
                <div className="relative top-0 left-[50px]">
                    <div className="relative h-max w-[90px] z-10">
                        <Image
                            src="/assets/window.png"
                            alt="Window"
                            width={90}
                            height={250}
                            className="h-full w-full object-contain transition-opacity duration-1000"
                            style={{ opacity: lightOpacity }}
                        />
                    </div>

                    {/* Фоновый свет окна */}
                    <div className="min-w-[150px] h-max -z-1 absolute top-0 right-[3px]">
                        <Image
                            src="/assets/window-light.png"
                            alt="light"
                            width={90}
                            height={250}
                            className="h-full w-full object-contain transition-opacity duration-1000"
                            style={{ opacity: lightOpacity }}
                        />
                    </div>

                    {/* Маски Light */}
                    <Image
                        src="/assets/mask-2.png"
                        alt="M2"
                        width={20}
                        height={30}
                        className="transition-all duration-500 w-[17px] h-max z-10 absolute top-0 right-0 object-contain"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/mask-1.png"
                        alt="M1"
                        width={20}
                        height={30}
                        className="transition-all duration-500 w-[13px] h-max z-10 absolute top-0 left-0 object-contain"
                        style={{ opacity: lightOpacity }}
                    />

                    {/* Маски Dark (теперь они всегда в DOM, просто прозрачные) */}
                    <Image
                        src="/assets/mask-2-dark.png"
                        alt="M2D"
                        width={20}
                        height={30}
                        className="transition-all duration-1000 h-[28px] z-10 absolute top-0 right-0! object-cover"
                        style={{
                            opacity: darkOpacity,
                            width: isDark ? "55%" : "17px",
                        }}
                    />
                    <Image
                        src="/assets/mask-1-dark.png"
                        alt="M1D"
                        width={20}
                        height={30}
                        className="transition-all duration-1000 h-[28px] z-10 absolute top-0 left-0! object-cover"
                        style={{
                            opacity: darkOpacity,
                            width: isDark ? "50%" : "13px",
                        }}
                    />
                </div>
            </div>

            {/* Боковой блюр (упрощенный для скорости) */}
            <div className="rounded-full w-[70px] left-[-20px] rotate-180 h-[30px] absolute top-[-5px] overflow-hidden pointer-events-none">
                <div
                    className={`absolute inset-0 transition-opacity duration-500 bg-[linear-gradient(to_left,#f4f4f4,#f4f4f4,#f4f4f490,transparent)] ${
                        isDark ? "opacity-0" : "opacity-100"
                    }`}
                />
                <div
                    className={`absolute inset-0 transition-opacity duration-500 bg-[linear-gradient(to_left,#0B0D10,#0B0D10,#0B0D1090,transparent)] ${
                        isDark ? "opacity-100" : "opacity-0"
                    }`}
                />
            </div>
        </div>
    );
}
