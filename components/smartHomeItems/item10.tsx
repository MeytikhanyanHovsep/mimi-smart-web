import React from "react";

type Props = { isDark: Boolean };

export default function Item10({ isDark }: Props) {
    return (
        <div className="home-item-10 relative border-0!">
            {" "}
            <div
                className={`relative drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_0_0] border-0 border-r-[7.8px] w-full h-full wall-top-light ${
                    isDark ? "wall-top-dark" : ""
                }`}
            >
                <span className="absolute w-[5px] bg-[#F2F3F8] dark:bg-[#505050]  h-full right-0 top-0"></span>
            </div>
            <div
                className={`rounded-full w-[50px] right-[-20px] h-[50px] absolute top-[-10px]`}
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
