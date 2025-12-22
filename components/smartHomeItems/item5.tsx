import Image from "next/image";
import React from "react";

type Props = { isDark: boolean };

export default function Item5({ isDark }: Props) {
    return (
        <div className="home-item-5 drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] border-0!">
            <div
                className={`flex w-full justify-between items-end gap-[50px] pr-[40px] h-full border-b-[7.8px] relative wall-top-light ${
                    isDark ? "wall-top-dark" : ""
                }`}
            >
                <span className="absolute w-[8.5px] bg-[#F2F3F8] dark:bg-[#505050] origin-center h-full left-0 top-0"></span>

                <div className="absolute -rotate-90 top-[50%] -translate-y-1/2  left-[-39px]">
                    {/* Window (Frame) */}
                    <div className="relative h-max w-[90px] z-10">
                        <Image
                            src="/assets/window.png"
                            alt="Window"
                            width={90}
                            height={250}
                            className={`h-full w-full object-contain transition-opacity duration-1000 ${
                                isDark ? "opacity-0" : "opacity-100"
                            }`}
                        />
                    </div>

                    <div className="min-w-[150px] h-max -z-1 absolute top-0 right-[3px]">
                        <Image
                            src="/assets/window-light.png"
                            alt="light"
                            width={90}
                            height={250}
                            className={`h-full w-full object-contain transition-opacity duration-1000 ${
                                isDark ? "opacity-0" : "opacity-100"
                            }`}
                        />
                    </div>
                    <Image
                        src="/assets/mask-2.png"
                        alt="Mask"
                        width={20}
                        height={30}
                        className={`transition-all duration-500 w-[17px] h-max z-10 absolute top-0 right-0 object-contain ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/mask-1.png"
                        alt="Mask"
                        width={20}
                        height={30}
                        className={`transition-all duration-500 w-[13px] h-max z-10 absolute top-0 left-0 object-contain ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/mask-2-dark.png"
                        alt="Mask"
                        width={20}
                        height={30}
                        className={`transition-all   object-cover  duration-1000 h-[28px] z-10 absolute top-0 right-0!   ${
                            isDark
                                ? "opacity-100 w-[50%]"
                                : "opacity-0 w-[17px]"
                        }`}
                    />
                    <Image
                        src="/assets/mask-1-dark.png"
                        alt="Mask"
                        width={20}
                        height={30}
                        className={`transition-all  object-cover  duration-1000 h-[28px] z-10 absolute top-0 left-0!  ${
                            isDark
                                ? " opacity-100 w-[50%] "
                                : "opacity-0 w-[13px]"
                        }`}
                    />
                </div>

                <div
                    className={`relative after:content-[''] after:absolute after:w-[70%] after:translate-[-50%] after:h-[70%]  after:top-1/2 after:left-1/2 after:rounded-full ml-[15px] rounded-full h-max w-[31px] after:duration-1000  after:transition-all transition-all duration-1000 ${
                        isDark
                            ? " blur-[1px] after:bg-[#FFF4CC]  shadow-[0_0_20px_#FFF4CC]"
                            : ""
                    }`}
                >
                    <Image
                        src="/assets/light.png"
                        alt="Light"
                        width={50}
                        height={50}
                        className={`h-full rounded-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/light-dark.png"
                        alt="Light Dark"
                        width={50}
                        height={50}
                        className={`absolute rounded-full top-0 left-0 h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>

                {/* Bed */}
                <div className="relative h-[150px] w-max">
                    <Image
                        src="/assets/bed.png"
                        alt="Bed"
                        width={210}
                        height={210}
                        className={`h-full w-auto object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/bed-dark.png"
                        alt="Bed Dark"
                        width={210}
                        height={210}
                        className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <span
                        className={` absolute z-1 w-[30px] h-[30px] rounded-full bg-[#FEFEF2] blur-[3px] shadow-[0_0_20px_white] bottom-[5px] right-[5px] transition-all duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    ></span>
                </div>

                {/* Shelf */}
                <div
                    className="relative h-[45px] w-max rounded-tr-[20px] rounded-tl-[10px]"
                    style={{
                        boxShadow: !isDark
                            ? "-10px_-10px_10px_#e1e1e1"
                            : "none",
                    }}
                >
                    <Image
                        src="/assets/shelf.png"
                        alt="Shelf"
                        width={210}
                        height={210}
                        className={`h-full w-auto object-contain rounded-tr-[20px] rounded-tl-[10px] transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/shelf-dark.png"
                        alt="Shelf Dark"
                        width={210}
                        height={210}
                        className={`absolute top-0 left-0 h-full w-auto object-contain rounded-tr-[20px] transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
            </div>
        </div>
    );
}
