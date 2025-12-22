import React from "react";

type Props = { isDark: boolean };

export default function Item4({ isDark }: Props) {
    return (
        <div className="home-item-4 relative  border-0! ">
            <div
                className={`border-r-[7.8px]  drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] relative wall-top-light w-full h-full ${
                    isDark ? "wall-top-dark" : ""
                }`}
            >
                <span className="absolute w-[2.5px] -right-[5px] shadow-[0_0_2px_#dbdbdb] dark:shadow-[0_0_0] bg-[#FDFDFC] dark:bg-[#464646] h-full top-0 "></span>
            </div>
            <div
                className={`rounded-full w-[50px] right-[-20px] rotate-180 h-[100px] absolute bottom-[-35px] blur-wall-light`}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full blur-wall-light 
        transition-opacity duration-500 ease-in-out
        opacity-100 dark:opacity-0
        bg-[linear-gradient(to_bottom,#f4f4f4,#f4f4f4,#f4f4f4,#f4f4f490,#f4f4f470,#f4f4f460,#f4f4f460,transparent)]"
                ></div>

                <div
                    className="absolute top-0 left-0 w-full h-full blur-wall-dark 
        transition-opacity duration-500 ease-in-out
        opacity-0 dark:opacity-100
        bg-[linear-gradient(to_bottom,#0B0D10,#0B0D10,#0B0D10,#0B0D1090,#0B0D1090,transparent)]"
                ></div>
            </div>
            <div
                className={`rounded-full w-[150px] left-[-20px] h-[40px] absolute top-[-21px] z-20`}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full blur-wall-light 
        transition-opacity duration-500 ease-in-out
        opacity-100 dark:opacity-0
        bg-[linear-gradient(to_right,#f4f4f4,#f4f4f4,#f4f4f4,#f4f4f490,#f4f4f470,#f4f4f460,#f4f4f460,transparent)]"
                ></div>

                <div
                    className="absolute top-0 left-0 w-full h-full blur-wall-dark 
        transition-opacity duration-500 ease-in-out
        opacity-0 dark:opacity-100
        bg-[linear-gradient(to_right,#0B0D10,#0B0D10,#0B0D10,#0B0D1090,#0B0D1090,transparent)]"
                ></div>
            </div>
        </div>
    );
}
