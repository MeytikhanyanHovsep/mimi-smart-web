import React from "react";

type Props = { isDark: boolean };

export default function Item2({ isDark }: Props) {
    const themeClass = isDark ? "dark-mode" : "light-mode";

    return (
        <div className={`home-item-12 relative border-0! ${themeClass}`}>
            <div
                className="relative flex flex-col items-start justify-stretch top-0 right-0 h-full drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222]"
                style={{ transform: "translateZ(0)" }}
            >
                <div className="flex h-[70%] relative">
                    <div
                        className={`w-[5px] z-1 h-full transition-colors duration-1000 ${
                            isDark ? "border-top-dark" : "border-top-light"
                        }`}
                    />
                    <div className="w-[7px] z-2 h-full bg-[#F2F3F8] dark:bg-[#505050] transition-colors duration-1000" />
                </div>

                <div className="h-[15%] z-10 relative">
                    <div className="flex justify-start flex-col rotate-180 origin-top-left h-full aspect-square">
                        <div className="h-[2px] z-[-1] w-full transition-colors duration-1000 dark:bg-[#333] bg-[#eeeeee]" />
                        <div className="h-1 w-full transition-colors duration-1000 dark:bg-[#333] bg-[#f5f8fd]" />
                    </div>
                </div>

                <div className="max-h-full h-[15%] relative">
                    <div className="flex h-full absolute left-0 top-[2px]">
                        <div
                            className={`w-[5px] z-1 h-full transition-colors duration-1000 ${
                                isDark ? "border-top-dark" : "border-top-light"
                            }`}
                        />
                        <div className="w-[7px] z-2 h-full transition-colors duration-1000 bg-[#F2F3F8] dark:bg-[#505050]" />
                    </div>
                    <span className="absolute w-[2.5px] top-0 shadow-[0_0_2px_#dbdbdb] dark:shadow-none bg-[#FDFDFC] dark:bg-[#464646] h-full left-[2px] z-10 transition-all duration-1000"></span>
                </div>
            </div>

            <div className="rounded-full w-[100px] left-[-50px] h-[300px] absolute top-[-35px] overflow-hidden pointer-events-none">
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
        </div>
    );
}
