import Image from "next/image";
import React from "react";

type Props = {
    isDark: boolean;
};

export default function Item7({ isDark }: Props) {
    return (
        <div className="home-item-7 relative  border-0!">
            <div
                className={`relative drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] min-h-[250px] wall-top-light border-[7.5px] flex transition-colors duration-1000  border-l-0 ${
                    isDark ? "wall-top-dark" : ""
                }`}
            >
                <span className="absolute h-[8.5px] bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 top-0"></span>
                <span className="absolute w-[7px] z-[-1] bg-[#f1f4ff] dark:bg-[#505050] h-full right-0 top-0"></span>
                <span className="absolute h-[2px] dark:bg-[#464646] -top-[5px] shadow-[0_0_2px_#dbdbdb] dark:shadow-[0_0_0] bg-[#FDFDFC] w-full left-0 "></span>
                <span className="absolute h-[2px] dark:bg-[#464646] -bottom-[5px] shadow-[0_0_2px_#dbdbdb] dark:shadow-[0_0_0] bg-[#FDFDFC] w-full left-0 "></span>
                <span className="absolute w-[2px] dark:bg-[#464646] -right-[5px] shadow-[0_0_2px_#dbdbdb] dark:shadow-[0_0_0] bg-[#FDFDFC] h-full top-0 "></span>

                <div className="absolute w-[30px] right-[5%] z-20 top-[-2px] h-auto ">
                    <Image
                        src="/assets/ceiling-mounted.png"
                        alt="fire-ceiling-mounted"
                        width={30}
                        height={30}
                        className={`h-min w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/ceiling-mounted-dark.png"
                        alt="fire-ceiling-mounted Dark"
                        width={30}
                        height={30}
                        className={`absolute left-0 top-0 h-min w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-[-2px] right-[5px] h-[210px] w-max">
                    <Image
                        src="/assets/sofa.png"
                        alt="Sofa"
                        width={100}
                        height={250}
                        className={`h-full w-auto object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/sofa-dark.png"
                        alt="Sofa Dark"
                        width={100}
                        height={250}
                        className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>

                <div className="relative top-0 left-[50px]">
                    {/* Window (Frame) */}
                    <div className="relative h-max w-[90px] z-10">
                        <Image
                            src="/assets/window.png"
                            alt="Window"
                            width={90}
                            height={250}
                            className={`h-full w-full object-contain transition-opacity duration-1000 ${
                                isDark ? "opacity-0" : "opacity-100"
                            }`}
                        />
                    </div>

                    <div className="min-w-[150px] h-max -z-1 absolute top-0 right-[3px]">
                        <Image
                            src="/assets/window-light.png"
                            alt="light"
                            width={90}
                            height={250}
                            className={`h-full w-full object-contain transition-opacity duration-1000 ${
                                isDark ? "opacity-0" : "opacity-100"
                            }`}
                        />
                    </div>
                    <Image
                        src="/assets/mask-2.png"
                        alt="Mask"
                        width={20}
                        height={30}
                        className={`transition-all duration-500 w-[17px] h-max z-10 absolute top-0 right-0 object-contain ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/mask-1.png"
                        alt="Mask"
                        width={20}
                        height={30}
                        className={`transition-all duration-500 w-[13px] h-max z-10 absolute top-0 left-0 object-contain ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/mask-2-dark.png"
                        alt="Mask"
                        width={20}
                        height={30}
                        className={`transition-all  object-cover  duration-1000 h-[28px] z-10 absolute top-0 right-0!   ${
                            isDark
                                ? "opacity-100 w-[55%]"
                                : "opacity-0 w-[17px]"
                        }`}
                    />
                    <Image
                        src="/assets/mask-1-dark.png"
                        alt="Mask"
                        width={20}
                        height={30}
                        className={`transition-all  object-cover  duration-1000 h-[28px] z-10 absolute top-0 left-0!  ${
                            isDark
                                ? " opacity-100 w-[50%] "
                                : "opacity-0 w-[13px]"
                        }`}
                    />
                </div>
            </div>
            <div
                className={`rounded-full w-[70px] left-[-20px] rotate-180 h-[30px] absolute top-[-5px] blur-wall-light`}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full blur-wall-light 
        transition-opacity duration-500 ease-in-out
        opacity-100 dark:opacity-0
        bg-[linear-gradient(to_left,#f4f4f4,#f4f4f4,#f4f4f4,#f4f4f490,#f4f4f470,#f4f4f460,#f4f4f460,transparent)]"
                ></div>

                <div
                    className="absolute top-0 left-0 w-full h-full blur-wall-dark 
        transition-opacity duration-500 ease-in-out
        opacity-0 dark:opacity-100
        bg-[linear-gradient(to_left,#0B0D10,#0B0D10,#0B0D10,#0B0D1090,#0B0D1090,transparent)]"
                ></div>
            </div>
        </div>
    );
}
