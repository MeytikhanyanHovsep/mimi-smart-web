import React from "react";

type Props = { isDark: boolean };

export default function Item12({ isDark }: Props) {
    return (
        <div className="home-item-12 relative border-0!">
            <div className="relative drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] flex flex-col items-start justify-stretch top-0 right-0 h-full">
                <div className="flex h-[70%] relative">
                    <div
                        className={`w-[5px] z-1 h-full border-top-light transition-colors ${
                            isDark ? "border-top-dark" : ""
                        }`}
                    />
                    <div
                        className={`w-[7px] z-2 h-full bg-[#F2F3F8] dark:bg-[#505050] transition-colors `}
                    />
                </div>
                <div className="h-[15%] z-10 relative">
                    <div className="flex justify-start flex-col rotate-180  origin-top-left h-full aspect-square">
                        <div
                            className={`h-[2px] z-[-1]  w-full transition-colors dark:bg-[#333] bg-[#eeeeee]`}
                        />
                        <div
                            className={`h-1 w-full  transition-colors dark:bg-[#333]  bg-[#f5f8fd] `}
                        />
                    </div>
                </div>
                <div className=" max-h-full h-[15%] relative">
                    <div className="flex h-full absolute left-0 top-[2px]">
                        <div
                            className={`w-[5px] z-1 h-full border-top-light transition-colors ${
                                isDark ? "border-top-dark" : ""
                            }`}
                        />
                        <div
                            className={`w-[7px] z-2 h-full transition-colors bg-[#F2F3F8] dark:bg-[#505050]`}
                        />
                    </div>
                    <span className="absolute w-[2.5px] top-0 shadow-[0_0_2px_#dbdbdb] bg-[#FDFDFC] dark:bg-[#464646] dark:shadow-[0_0_0] h-full left-[2px] z-10 "></span>
                </div>
            </div>
            <div
                className={`rounded-full w-[100px] left-[-50px] h-[300px] absolute top-[-35px] `}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full blur-wall-light 
        transition-opacity duration-1000!
        opacity-100 dark:opacity-0
        bg-[linear-gradient(to_bottom,#f4f4f4,#f4f4f4,#f4f4f4,#f4f4f490,#f4f4f470,#f4f4f460,#f4f4f460,transparent)]"
                ></div>

                <div
                    className="absolute top-0 left-0 w-full h-full blur-wall-dark 
        transition-opacity duration-1000!
        opacity-0 dark:opacity-100
        bg-[linear-gradient(to_bottom,#0B0D10,#0B0D10,#0B0D10,#0B0D1090,#0B0D1090,transparent)]"
                ></div>
            </div>
        </div>
    );
}
