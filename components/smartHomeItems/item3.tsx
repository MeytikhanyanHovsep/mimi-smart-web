import Image from "next/image";

import React from "react";

type Props = { isDark: boolean };

export default function Item3({ isDark }: Props) {
    const themeClass = isDark ? "dark-mode" : "light-mode";

    const lightOpacity = isDark ? 0 : 1;

    const darkOpacity = isDark ? 1 : 0;

    return (
        <div className={`home-item-3 border-0! z-20 ${themeClass}`}>
            <div
                className={`relative h-full w-full wall-top-light border-b-[7.5px] border-t-[7.5px] flex flex-col justify-between items-end transition-all duration-1000 ${
                    isDark ? "wall-top-dark" : ""
                }`}
                style={{ transform: "translateZ(0)" }}
            >
                <span className="absolute h-[5px] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 top-0"></span>

                <span className="absolute h-[5px] z-[-1] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 bottom-[-10px]"></span>

                <span className="absolute h-[2.5px] -top-[5px] transition-all duration-1000 bg-[#FDFDFC] dark:bg-[#464646] shadow-[0_0_2px_#dbdbdb] dark:shadow-none w-full left-0"></span>

                <span className="absolute h-[2.5px] -bottom-[5px] transition-all duration-1000 bg-[#FDFDFC] dark:bg-[#464646] shadow-[0_0_2px_#dbdbdb] dark:shadow-none w-full left-0"></span>

                <div className="relative w-[15px] mt-[5px] h-[15px]">
                    <div className="h-[60px] rotate-145 w-[40px] absolute top-[-6px] right-[9px] z-1 [clip-path:polygon(0%_40%,100%_0%,100%_100%,0%_60%)]">
                        <div
                            className={`absolute inset-0 transition-all duration-1000 bg-linear-to-r ${
                                isDark ? "from-[#808080b0]" : "from-[#C9E7EF]"
                            } to-[#ffffff00]`}
                        ></div>
                    </div>

                    <Image
                        src="/assets/security.png"
                        alt="security"
                        width={210}
                        height={150}
                        className="h-full w-full z-2 object-contain transition-opacity duration-1000"
                        style={{ opacity: lightOpacity }}
                    />

                    <Image
                        src="/assets/security-dark.png"
                        alt="security Dark"
                        width={210}
                        height={150}
                        className="absolute z-2 left-0 rotate-90 top-0 h-full w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: darkOpacity }}
                    />
                </div>

                <div className="flex h-[60px] justify-end pr-[30px] max-w-full overflow-hidden">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Image
                            key={i}
                            src="/assets/foot.png"
                            width={50}
                            height={30}
                            alt="foot"
                            className={`w-[40px] ml-[-5px] object-contain transition-all duration-1000 ${
                                isDark ? "brightness-50" : "brightness-100"
                            } ${i % 2 ? "" : "self-end"}`}
                            style={{ opacity: i / 14 }}
                        />
                    ))}
                </div>

                <div className="relative w-[25px] h-[25px] mr-[10px] flex items-center justify-center isolate">
                    <div className="ripple-container">
                        <div className="ripple-circle border border-[#aaaaaa] z-20" />

                        <div className="ripple-circle border border-[#aaaaaa] z-20" />

                        <div className="ripple-circle border border-[#aaaaaa] z-20" />
                    </div>

                    <Image
                        src="/assets/fire-ceiling.png"
                        alt="fire-ceiling"
                        width={30}
                        height={30}
                        className="relative z-10 h-full w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: lightOpacity }}
                    />

                    <Image
                        src="/assets/fire-ceiling-dark.png"
                        alt="fire-ceiling Dark"
                        width={30}
                        height={30}
                        className="absolute left-0 top-0 z-20 h-full w-full object-contain transition-opacity duration-1000"
                        style={{ opacity: darkOpacity }}
                    />
                </div>
            </div>
        </div>
    );
}
