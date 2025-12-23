import React from "react";

type Props = { isDark: boolean };

export default function Item10({ isDark }: Props) {
    const themeClass = isDark ? "dark-mode" : "light-mode";

    return (
        <div
            className={`home-item-10 max-lg:hidden relative border-0! ${themeClass}`}
        >
            <div
                className={`relative w-full h-full border-0 border-r-[7.8px] transition-all duration-1000 
                drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-none
                ${isDark ? "wall-top-dark" : "wall-top-light"}`}
                style={{ transform: "translateZ(0)" }}
            >
                <span className="absolute w-[5px] transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050] h-full right-0 top-0"></span>
            </div>

            <div className="rounded-full w-[50px] right-[-20px] h-[50px] absolute top-[-10px] overflow-hidden pointer-events-none">
                <div
                    className={`absolute inset-0 blur-wall-light transition-opacity duration-1000 
                    bg-[linear-gradient(to_bottom,#f4f4f4,#f4f4f4,#f4f4f4,#f4f4f490,#f4f4f470,#f4f4f460,#f4f4f460,transparent)] ${
                        isDark ? "opacity-0" : "opacity-100"
                    }`}
                />
                <div
                    className={`absolute inset-0 blur-wall-dark transition-opacity duration-1000 
                    bg-[linear-gradient(to_bottom,#0B0D10,#0B0D10,#0B0D10,#0B0D1090,#0B0D1090,transparent)] ${
                        isDark ? "opacity-100" : "opacity-0"
                    }`}
                />
            </div>
        </div>
    );
}
