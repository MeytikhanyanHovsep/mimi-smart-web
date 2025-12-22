import React from "react";

type Props = { isDark: boolean };

export default function Item11({ isDark }: Props) {
    return (
        <div className="home-item-11 drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] border-0!">
            <div className="relative flex flex-col items-start justify-stretch top-0 right-0 h-full">
                <div className="flex h-[38%] relative">
                    <div
                        className={`w-[5px] z-1 h-full border-top-light transition-colors ${
                            isDark ? "border-top-dark" : ""
                        }`}
                    />
                    <div className="w-[7px] z-2 h-full transition-colors bg-[#F2F3F8] dark:bg-[#505050]" />
                    <span className="absolute w-[2.5px] top-0 shadow-[0_0_2px_#dbdbdb] bg-[#FDFDFC] dark:bg-[#464646] dark:shadow-[0_0_0] h-full left-0 z-10 "></span>
                </div>
                <div className="h-[24%] z-10 relative">
                    <div className="flex justify-end flex-col rotate-180  origin-bottom-left h-full aspect-square">
                        <div
                            className={`h-[3px] z-[-1]  w-full bg-[#eeeeee] transition-colors  dark:bg-[#555]`}
                        />
                        <div
                            className={`h-1 w-full  transition-colors bg-[#FCFDFF] dark:bg-[#333]`}
                        />
                    </div>
                </div>
                <div className=" max-h-full h-[38%] relative">
                    <div className="flex h-full absolute left-0 top-[2px]">
                        <div
                            className={`w-[5px] z-1 h-full border-top-light transition-colors ${
                                isDark ? "border-top-dark" : ""
                            }`}
                        />
                        <div className="w-[7px] z-2 h-full transition-colorsbg-[#F2F3F8] dark:bg-[#505050]" />
                    </div>
                    <span className="absolute w-[2.5px] top-0 shadow-[0_0_2px_#dbdbdb] bg-[#FDFDFC] dark:bg-[#464646] dark:shadow-[0_0_0] h-full left-0 z-10 "></span>
                </div>
            </div>
        </div>
    );
}
