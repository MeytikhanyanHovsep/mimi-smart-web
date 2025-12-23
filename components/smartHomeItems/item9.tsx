import Image from "next/image";
import React from "react";

type Props = { isDark: boolean };

export default function Item9({ isDark }: Props) {
    return (
        <div className="home-item-9 drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] border-0!">
            <div
                className={`relative h-full group flex justify-center min-w-[213px]! border-t-[7.5px] wall-top-light transition-colors  ${
                    isDark ? "wall-top-dark" : ""
                } target-card`}
            >
                <span className="absolute h-[8.5px] bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 top-0"></span>
                <span className="absolute h-[2px] -top-[5px] shadow-[0_0_2px_#dbdbdb] bg-[#FDFDFC] w-full left-0 dark:bg-[#464646] dark:shadow-[0_0_0]"></span>

                <div className="absolute w-[30px] top-[-2px] right-[10%] h-auto ">
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

                <div className="absolute w-[15px] top-[5px] left-0 -rotate-90 h-[15px] ">
                    <div className=" h-[60px] rotate-145 w-[40px] absolute top-[-6px] right-[9px] z-1 [clip-path:polygon(0%_40%,100%_0%,100%_100%,0%_60%)]">
                        <div className="absolute inset-0 bg-linear-to-r dark:from-[#808080b0] from-[#C9E7EF] to-[#ffffff00]  duration-500 ease-in-out"></div>
                    </div>
                    <Image
                        src="/assets/security.png"
                        alt="security"
                        width={210}
                        height={150}
                        className={`h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/security-dark.png"
                        alt="security Dark"
                        width={210}
                        height={150}
                        className={`absolute rotate-90 left-0 top-0 h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
                <div className="relative w-max max-h-[330px]! p-[40px] h-[330px]">
                    <Image
                        src="/assets/car.png"
                        alt="Car"
                        width={200}
                        height={320}
                        className={`h-full mx-auto w-auto z-1 object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/car-dark.png"
                        alt="Car Dark"
                        width={200}
                        height={320}
                        className={`absolute top-0 z-1 left-1/2 -translate-x-1/2 h-full p-[40px] w-auto object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <span
                        className={`absolute z-1 w-[10px] h-[10px] rounded-full bg-[#F56C6C95] hidden dark:block shadow-[0_0_20px_red] animate-pulse top-[252px] left-[55px] ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    ></span>
                    <span
                        className={`absolute z-1 w-[10px] h-[10px] rounded-full bg-[#F56C6C95] hidden dark:block shadow-[0_0_20px_red] animate-pulse top-[252px] right-[55px] ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    ></span>
                </div>
            </div>
        </div>
    );
}
