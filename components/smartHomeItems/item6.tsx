import Image from "next/image";
import React from "react";

type Props = {
    isDark: boolean;
};

export default function Item6({ isDark }: Props) {
    const themeClass = isDark ? "dark-mode" : "light-mode";
    const lightOpacity = isDark ? 0 : 1;
    const darkOpacity = isDark ? 1 : 0;

    return (
        <div
            className={`home-item-6 max-lg:hidden border-0! transition-all duration-1000 ${themeClass}`}
        >
            <div
                className={`relative w-full mt-[-2px] group flex justify-between h-full border-b-[7.5px] drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] group transition-all duration-1000 ${
                    isDark ? "wall-top-dark" : "wall-top-light"
                }`}
                style={{ transform: "translateZ(0)" }}
            >
                <span className="absolute h-[5px] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 top-0"></span>
                <span className="absolute h-[5px] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 bottom-[-10px]"></span>

                {/* Left Border Detail */}
                <div className="h-[20%] pb-[10px] absolute left-0 top-0 flex">
                    <div className="w-[5px] h-full bg-[#f4f4f4] dark:bg-[#333] transition-colors duration-1000" />
                </div>

                {/* Right Stacking Details */}
                <div className="absolute flex flex-col justify-stretch top-0 right-0 h-full">
                    <div className="flex h-[42%]">
                        <div className="w-[8px] z-2 h-full transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050]" />
                        <div
                            className={`w-[7.5px] z-1 h-full transition-colors duration-1000 ${
                                isDark ? "border-top-dark" : "border-top-light"
                            }`}
                        />
                    </div>
                    <div className="h-[16%] z-5 origin-bottom-left rotate-90 flex">
                        <div className="w-[2px] z-5 h-full transition-colors duration-1000 bg-[#FCFDFF] dark:bg-[#666]" />
                        <div className="w-[6px] -z-1 h-full transition-colors duration-1000 bg-[#f7f7f7] dark:bg-[#333]" />
                    </div>
                    <div className="flex max-h-full z-3 h-[42%]">
                        <div className="w-[8px] z-2 h-full transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050]" />
                        <div
                            className={`w-[7.5px] z-1 h-full transition-colors duration-1000 ${
                                isDark ? "border-top-dark" : "border-top-light"
                            }`}
                        />
                    </div>
                </div>

                {/* Fire Sensor */}
                <div className="absolute w-[30px] rotate-90 bottom-[10%] z-20 right-[-2px] h-auto">
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

                {/* Lamp with Glow */}
                <div
                    className={`relative ml-[15px] mt-[15px] rounded-full h-max w-[31px] transition-all duration-1000 after:content-[''] after:absolute after:w-[70%]  after:translate-[-50%] after:h-[70%] after:top-1/2 after:left-1/2 after:rounded-full after:transition-all after:duration-1000 group-hover:blur-[1px] group-hover:after:bg-[#FFF4CC] group-hover:shadow-[0_0_20px_#FFF4CC] ${
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

                {/* Table */}
                <div className="relative w-[210px] h-max mt-[-15px]">
                    <Image
                        src="/assets/table.png"
                        alt="T"
                        width={210}
                        height={150}
                        className="h-full w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/table-dark.png"
                        alt="TD"
                        width={210}
                        height={150}
                        className="absolute top-[-7px] left-0 h-full w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: darkOpacity }}
                    />
                </div>

                {/* Conditioner with Hover Effect */}
                <div className="group w-[70px] flex justify-end relative pt-[13px]">
                    <div className="h-[90px] rotate-178 w-[70px] absolute top-[5px] right-[18px] z-1 [clip-path:polygon(0%_20%,100%_0%,100%_100%,0%_80%)]">
                        <div
                            className={`absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 bg-linear-to-r ${
                                isDark ? "from-[gray]" : "from-[#C9E7EF]"
                            } to-[#a7d8e500]`}
                        />
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
