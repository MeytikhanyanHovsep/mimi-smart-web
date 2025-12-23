import Image from "next/image";
import React from "react";

type Props = { isDark: boolean };

export default function Item9({ isDark }: Props) {
    const themeClass = isDark ? "dark-mode" : "light-mode";
    const lightOpacity = isDark ? 0 : 1;
    const darkOpacity = isDark ? 1 : 0;

    return (
        <div className={`home-item-9 border-0! ${themeClass} max-lg:hidden`}>
            <div
                className={`relative h-full group flex justify-center min-w-[213px]! border-t-[7.5px] drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] transition-all duration-1000 pointer-events-none ${
                    isDark ? "wall-top-dark" : "wall-top-light"
                } target-card`}
                style={{ transform: "translateZ(0)" }}
            >
                {/* Wall Accents */}
                <span className="absolute h-[8.5px] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 top-0"></span>
                <span className="absolute h-[2px] -top-[5px] transition-colors duration-1000 shadow-[0_0_2px_#dbdbdb] bg-[#FDFDFC] w-full left-0 dark:bg-[#464646] dark:shadow-none"></span>

                {/* Ceiling Sensor */}
                <div className="absolute w-[30px] top-[-2px] right-[10%] h-auto">
                    <Image
                        src="/assets/ceiling-mounted.png"
                        alt="S"
                        width={30}
                        height={30}
                        className="h-min w-full object-contain transition-opacity duration-1000 pointer-events-none"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/ceiling-mounted-dark.png"
                        alt="SD"
                        width={30}
                        height={30}
                        className="absolute top-0 left-0 h-min w-full object-contain transition-opacity duration-1000 pointer-events-none"
                        style={{ opacity: darkOpacity }}
                    />
                </div>

                {/* Security Camera & Beam */}
                <div className="absolute w-[15px] top-[5px] left-0 -rotate-90 h-[15px]">
                    <div className="h-[60px] rotate-145 w-[40px] absolute top-[-6px] right-[9px] z-1 [clip-path:polygon(0%_40%,100%_0%,100%_100%,0%_60%)]">
                        <div
                            className={`absolute inset-0 transition-colors duration-1000 bg-linear-to-r ${
                                isDark ? "from-[#808080b0]" : "from-[#C9E7EF]"
                            } to-[#ffffff00]`}
                        />
                    </div>
                    <Image
                        src="/assets/security.png"
                        alt="Sec"
                        width={210}
                        height={150}
                        className="h-full w-full object-contain transition-opacity duration-1000 pointer-events-none"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/security-dark.png"
                        alt="SecD"
                        width={210}
                        height={150}
                        className="absolute rotate-90 left-0 top-0 h-full w-full object-contain transition-opacity duration-1000 pointer-events-none"
                        style={{ opacity: darkOpacity }}
                    />
                </div>

                {/* Car Display */}
                <div className="relative w-max max-h-[330px]! p-[40px] h-[330px] pointer-events-none">
                    <Image
                        src="/assets/car.png"
                        alt="Car"
                        width={200}
                        height={320}
                        className="h-full mx-auto w-auto z-1 object-contain transition-opacity duration-1000 pointer-events-none"
                        style={{ opacity: lightOpacity }}
                    />
                    <Image
                        src="/assets/car-dark.png"
                        alt="CarD"
                        width={200}
                        height={320}
                        className="absolute top-0 z-1 left-1/2 -translate-x-1/2 h-full p-[40px] w-auto object-contain transition-opacity duration-1000 pointer-events-none"
                        style={{ opacity: darkOpacity }}
                    />

                    {/* Alarm/Parking Sensors */}
                    <span
                        className={`absolute z-1 w-[10px] h-[10px] rounded-full bg-[#F56C6C95] shadow-[0_0_20px_red] animate-pulse top-[252px] left-[55px] transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    ></span>
                    <span
                        className={`absolute z-1 w-[10px] h-[10px] rounded-full bg-[#F56C6C95] shadow-[0_0_20px_red] animate-pulse top-[252px] right-[55px] transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    ></span>
                </div>
            </div>
        </div>
    );
}
