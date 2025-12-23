import Image from "next/image";
import React from "react";

type Props = { isDark: boolean };

export default function Item5({ isDark }: Props) {
    const themeClass = isDark ? "dark-mode" : "light-mode";
    const lightOpacity = isDark ? 0 : 1;
    const darkOpacity = isDark ? 1 : 0;

    return (
        <div className={`home-item-5 border-0! ${themeClass}`}>
            <div
                className={`group flex w-full justify-between items-end gap-[50px] pr-[40px] h-full border-b-[7.8px] relative transition-all duration-1000 drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] ${
                    isDark ? "wall-top-dark" : "wall-top-light"
                }`}
                style={{ transform: "translateZ(0)" }}
            >
                <span className="absolute w-[8.5px] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] origin-center h-full left-0 top-0"></span>

                {/* Window & Masks Area */}
                <div className="absolute max-sm:scale-[0.7] -rotate-90 top-[50%] -translate-y-1/2 left-[-39px]">
                    <div className="relative h-max w-[90px] z-10">
                        <Image
                            src="/assets/window.png"
                            alt="W"
                            width={90}
                            height={250}
                            className="h-full w-full object-contain transition-opacity duration-1000"
                            style={{ opacity: lightOpacity }}
                        />
                    </div>

                    <div className="min-w-[150px] h-max -z-1 absolute top-0 right-[3px]">
                        <Image
                            src="/assets/window-light.png"
                            alt="L"
                            width={90}
                            height={250}
                            className="h-full w-full object-contain transition-opacity duration-1000"
                            style={{ opacity: lightOpacity }}
                        />
                    </div>

                    {/* Light Masks */}
                    <Image
                        src="/assets/mask-2.png"
                        alt="M"
                        width={20}
                        height={30}
                        className="transition-all duration-500 w-[17px] h-max z-10 absolute top-0 right-0 object-contain"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/mask-1.png"
                        alt="M"
                        width={20}
                        height={30}
                        className="transition-all duration-500 w-[13px] h-max z-10 absolute top-0 left-0 object-contain"
                        style={{ opacity: lightOpacity }}
                    />

                    {/* Dark Masks */}
                    <Image
                        src="/assets/mask-2-dark.png"
                        alt="MD"
                        width={20}
                        height={30}
                        className="transition-all object-cover duration-1000 h-[28px] z-10 absolute top-0 right-0!"
                        style={{
                            opacity: darkOpacity,
                            width: isDark ? "55%" : "17px",
                        }}
                    />
                    <Image
                        src="/assets/mask-1-dark.png"
                        alt="MD"
                        width={20}
                        height={30}
                        className="transition-all object-cover duration-1000 h-[28px] z-10 absolute top-0 left-0!"
                        style={{
                            opacity: darkOpacity,
                            width: isDark ? "50%" : "13px",
                        }}
                    />
                </div>

                {/* Lamp with Glow Effect */}
                <div
                    className={`relative ml-[15px] rounded-full h-max w-[31px] transition-all duration-1000 after:content-[''] after:absolute after:w-[70%] after:translate-[-50%] after:h-[70%] after:top-1/2 after:left-1/2 after:rounded-full after:transition-all after:duration-1000 group-hover:blur-[1px] group-hover:after:bg-[#FFF4CC] group-hover:shadow-[0_0_20px_#FFF4CC] ${
                        isDark
                            ? "blur-[1px] after:bg-[#FFF4CC] shadow-[0_0_20px_#FFF4CC]"
                            : ""
                    }`}
                >
                    <Image
                        src="/assets/light.png"
                        alt="L"
                        width={50}
                        height={50}
                        className="h-full rounded-full w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/light-dark.png"
                        alt="LD"
                        width={50}
                        height={50}
                        className="absolute rounded-full top-0 left-0 h-full w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: darkOpacity }}
                    />
                </div>

                {/* Bed */}
                <div className="relative w-[210px] h-max">
                    <Image
                        src="/assets/bed.png"
                        alt="B"
                        width={210}
                        height={210}
                        className="w-full h-auto object-contain transition-opacity duration-1000"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/bed-dark.png"
                        alt="BD"
                        width={210}
                        height={210}
                        className="absolute top-0 left-0 w-full h-auto object-contain transition-opacity duration-1000"
                        style={{ opacity: darkOpacity }}
                    />
                    <span
                        className={`absolute z-1 w-[30px] h-[30px] rounded-full bg-[#FEFEF2] blur-[3px] max-sm:w-[20px] max-sm:h-[20px] max-sm:shadow-[0_0_5px_white] shadow-[0_0_20px_white] bottom-[5px] right-[5px] transition-all duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>

                {/* Shelf */}
                <div
                    className="relative h-[45px] w-max rounded-tr-[20px] rounded-tl-[10px] transition-all max-sm:hidden duration-1000"
                    style={{
                        boxShadow: !isDark
                            ? "-10px -10px 10px #e1e1e1"
                            : "none",
                    }}
                >
                    <Image
                        src="/assets/shelf.png"
                        alt="S"
                        width={210}
                        height={210}
                        className="h-full w-auto object-contain rounded-tr-[20px] rounded-tl-[10px] transition-opacity duration-1000"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/shelf-dark.png"
                        alt="SD"
                        width={210}
                        height={210}
                        className="absolute top-0 left-0 h-full w-auto object-contain rounded-tr-[20px] transition-opacity duration-1000"
                        style={{ opacity: darkOpacity }}
                    />
                </div>
            </div>
        </div>
    );
}
