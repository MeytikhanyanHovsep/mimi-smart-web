import Image from "next/image";
import React from "react";

type Props = { isDark: boolean };

export default function Item8({ isDark }: Props) {
    const themeClass = isDark ? "dark-mode" : "light-mode";
    const lightOpacity = isDark ? 0 : 1;
    const darkOpacity = isDark ? 1 : 0;

    return (
        <div className={`home-item-8 border-0! max-lg:hidden ${themeClass}`}>
            <div
                className={`w-full group h-full relative border-[7.5px] pt-[50px] border-t-0 border-r-0 transition-all duration-1000 drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] ${
                    isDark ? "wall-top-dark" : "wall-top-light"
                }`}
                style={{ transform: "translateZ(0)" }}
            >
                {/* Vertical Accents */}
                <span className="absolute w-[3px] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] h-full left-0 top-0"></span>

                {/* Right Bottom Corner Detail */}
                <div className="absolute right-[-5px] bottom-[-7.5px] flex h-[30%]">
                    <div
                        className={`w-[7.5px] z-1 h-full transition-colors duration-1000 ${
                            isDark ? "border-top-dark" : "border-top-light"
                        }`}
                    />
                    <div className="w-[3px] z-[-1] h-full transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050]" />
                </div>

                {/* Ceiling Mounted Sensor */}
                <div className="absolute w-[30px] -rotate-90 bottom-[10%] z-20 left-[-12px] h-auto">
                    <Image
                        src="/assets/ceiling-mounted.png"
                        alt="S"
                        width={30}
                        height={30}
                        className="h-min w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/ceiling-mounted-dark.png"
                        alt="SD"
                        width={30}
                        height={30}
                        className="absolute top-0 left-0 h-min w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: darkOpacity }}
                    />
                </div>

                {/* Conditioner with Air Flow Effect */}
                <div className="group w-[70px] ml-[-7px] rotate-180 flex justify-end relative pt-[13px]">
                    <div className="h-[90px] rotate-178 w-[70px] absolute top-[5px] right-[18px] z-1 [clip-path:polygon(0%_20%,100%_0%,100%_100%,0%_80%)]">
                        <div
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-linear-to-r ${
                                isDark ? "from-[gray]" : "from-[#C9E7EF]"
                            } to-[#ffffff00]`}
                        ></div>
                    </div>

                    <div className="relative mr-[7px] w-max h-[68px] z-10">
                        <Image
                            src="/assets/condition.png"
                            alt="C"
                            width={200}
                            height={150}
                            className="h-full w-auto object-contain transition-opacity duration-1000"
                            style={{ opacity: lightOpacity }}
                        />
                        <Image
                            src="/assets/condition-dark.png"
                            alt="CD"
                            width={200}
                            height={150}
                            className="absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000"
                            style={{ opacity: darkOpacity }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
