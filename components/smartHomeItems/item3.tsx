import Image from "next/image";
import React from "react";

type Props = { isDark: boolean };

export default function Item3({ isDark }: Props) {
    return (
        <div className="home-item-3 drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] border-0!">
            <div
                className={`relative h-full w-full wall-top-light border-b-[7.5px] border-t-[7.5px] flex flex-col justify-between items-end transition-colors duration-1000  ${
                    isDark ? "wall-top-dark" : ""
                }`}
            >
                <span className="absolute h-[5px] bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 top-0"></span>
                <span className="absolute h-[5px] z-[-1] bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 bottom-[-10px]"></span>
                <span className="absolute h-[2.5px] -top-[5px] dark:shadow-[0_0_0] shadow-[0_0_2px_#dbdbdb] bg-[#FDFDFC] dark:bg-[#464646] w-full left-0 "></span>
                <span className="absolute h-[2.5px] -bottom-[5px] dark:shadow-[0_0_0] shadow-[0_0_2px_#dbdbdb] bg-[#FDFDFC] dark:bg-[#464646] w-full left-0 "></span>

                <div className="relative w-[15px] mt-[5px] h-[15px] ">
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
                        className={`absolute left-0 rotate-90 top-0 h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>

                <div className="flex h-[60px] justify-end pr-[30px] max-w-full overflow-hidden">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Image
                            key={i}
                            src="/assets/foot.png"
                            width={50}
                            className={`w-[40px] dark:brightness-50 ml-[-5px] object-contain ${
                                i % 2 ? "" : "self-end"
                            }`}
                            style={{ opacity: i / 14 }}
                            height={30}
                            alt="foot"
                        />
                    ))}
                </div>
                <div className="relative w-[25px]  mr-[5px] h-[25px] ">
                    <Image
                        src="/assets/fire-ceiling.png"
                        alt="fire-ceiling"
                        width={30}
                        height={30}
                        className={`h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/fire-ceiling-dark.png"
                        alt="fire-ceiling Dark"
                        width={30}
                        height={30}
                        className={`absolute left-0 h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
            </div>
        </div>
    );
}
