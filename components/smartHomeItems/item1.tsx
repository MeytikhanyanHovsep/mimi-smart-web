import React from "react";

type Props = { isDark: boolean };

export default function Item1({ isDark }: Props) {
    // Используем переменную один раз для обертки
    const themeClass = isDark ? "dark-mode" : "light-mode";

    return (
        <div
            className={`home-item-11 border-0! transition-all duration-1000 ${themeClass}`}
        >
            <div
                className="relative flex flex-col items-start justify-stretch top-0 right-0 h-full drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222]"
                style={{ transform: "translateZ(0)" }} // Включаем GPU
            >
                {/* Верхняя секция */}
                <div className="flex h-[38%] relative">
                    <div
                        className={`w-[5px] z-1 h-full transition-colors duration-1000 ${
                            isDark ? "wall-top-dark" : "wall-top-light"
                        }`}
                    />
                    <div className="w-[7px] z-2 h-full transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050]" />
                    <span className="absolute w-[2.5px] top-0 shadow-[0_0_2px_#dbdbdb] dark:shadow-none bg-[#FDFDFC] dark:bg-[#464646] h-full left-0 z-10 transition-all duration-1000"></span>
                </div>

                {/* Средняя секция (Угол/Поворот) */}
                <div className="h-[24%] z-10 relative">
                    <div className="flex justify-end flex-col rotate-180 origin-bottom-left h-full aspect-square">
                        <div className="h-[3px] z-[-1] w-full transition-colors duration-1000 bg-[#eeeeee] dark:bg-[#555]" />
                        <div className="h-1 w-full transition-colors duration-1000 bg-[#FCFDFF] dark:bg-[#333]" />
                    </div>
                </div>

                {/* Нижняя секция */}
                <div className="max-h-full h-[38%] relative">
                    <div className="flex h-full absolute left-0 top-[2px]">
                        <div
                            className={`w-[5px] z-1 h-full transition-colors duration-1000 ${
                                isDark ? "wall-top-dark" : "wall-top-light"
                            }`}
                        />
                        <div className="w-[7px] z-2 h-full transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050]" />
                    </div>
                    <span className="absolute w-[2.5px] top-0 shadow-[0_0_2px_#dbdbdb] dark:shadow-none bg-[#FDFDFC] dark:bg-[#464646] h-full left-0 z-10 transition-all duration-1000"></span>
                </div>
            </div>
        </div>
    );
}
