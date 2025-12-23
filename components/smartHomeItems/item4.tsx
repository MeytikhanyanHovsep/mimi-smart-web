import React from "react";

type Props = { isDark: boolean };

export default function Item4({ isDark }: Props) {
    const themeClass = isDark ? "dark-mode" : "light-mode";

    return (
        <div className={`home-item-4 relative border-0! ${themeClass}`}>
            <div
                className={`border-r-[7.8px] relative w-full h-full transition-all duration-1000 
                drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] 
                ${isDark ? "wall-top-dark" : "wall-top-light"}`}
                style={{ transform: "translateZ(0)" }}
            >
                <span className="absolute w-[2.5px] -right-[5px] transition-all duration-1000 bg-[#FDFDFC] dark:bg-[#464646] shadow-[0_0_2px_#dbdbdb] dark:shadow-none h-full top-0"></span>
            </div>

            {/* Bottom Blur Area */}
            <div className="rounded-full w-[50px] right-[-20px] rotate-180 h-[100px] absolute bottom-[-35px] overflow-hidden pointer-events-none">
                <div
                    className={`absolute inset-0 blur-wall-light transition-opacity duration-1000 bg-[linear-gradient(to_bottom,#f4f4f4,#f4f4f4,#f4f4f4,#f4f4f490,#f4f4f470,#f4f4f460,#f4f4f460,transparent)] ${
                        isDark ? "opacity-0" : "opacity-100"
                    }`}
                />
                <div
                    className={`absolute inset-0 blur-wall-dark transition-opacity duration-1000 bg-[linear-gradient(to_bottom,#0B0D10,#0B0D10,#0B0D10,#0B0D1090,#0B0D1090,transparent)] ${
                        isDark ? "opacity-100" : "opacity-0"
                    }`}
                />
            </div>

            {/* Top Blur Area */}
            <div className="rounded-full max-md:w-[70px] w-[150px] left-[-20px] h-[40px] absolute top-[-21px] z-20 overflow-hidden pointer-events-none">
                <div
                    className={`absolute inset-0 blur-wall-light transition-opacity duration-1000 bg-[linear-gradient(to_right,#f4f4f4,#f4f4f4,#f4f4f4,#f4f4f490,#f4f4f470,#f4f4f460,#f4f4f460,transparent)] ${
                        isDark ? "opacity-0" : "opacity-100"
                    }`}
                />
                <div
                    className={`absolute inset-0 blur-wall-dark transition-opacity duration-1000 bg-[linear-gradient(to_right,#0B0D10,#0B0D10,#0B0D10,#0B0D1090,#0B0D1090,transparent)] ${
                        isDark ? "opacity-100" : "opacity-0"
                    }`}
                />
            </div>
        </div>
    );
}
