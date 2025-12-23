"use client";
// import Image from "next/image";
// import React, { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// type Props = {};
// gsap.registerPlugin(useGSAP);

import React, { useEffect, useState } from "react";
import SmartHomeItems from "./smartHomeItems";
import Image from "next/image";

type Props = {};

export default function Main({}: Props) {
    const [theme, setTheme] = useState("light"); // Начальное значение по умолчанию

    useEffect(() => {
        // Этот код выполнится ТОЛЬКО в браузере
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.classList.toggle("dark-mode");
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <main className="dark:bg-[#0B0D10] overflow-hidden transition-colors duration-300">
            <SmartHomeItems
                isDark={theme == "dark"}
                toggleTheme={() => toggleTheme()}
            />
        </main>
    );
}

// export default function Main({}: Props) {
//     const [isDark, setIsDark] = useState<boolean>(false);

//     return (
//         <main
//             // ИСПРАВЛЕНИЕ 3: Перенесли события сюда, на главный контейнер
//             className={`pb-[70px] items-end h-[820px] mx-auto absolute top-0 flex w-full transition-colors duration-1000 overflow-hidden ${
//                 isDark ? "bg-[#0a0a0a]" : "bg-[#F4F4F4]"
//             }`}
//         >
//             *
//             <div
//                 className={`.home-grid w-full h-full transition-all duration-1000 ${
//                     isDark ? "contrast-[1.1]" : ""
//                 }`}
//             >
//                 <div className="grid w-full grid-cols-2 pointer-events-none">
//                     {/* pointer-events-none добавил, чтобы картинки не мешали событию mouseMove на main */}

//                     {/* ЛЕВАЯ ЧАСТЬ */}
//                     <div className="flex items-end  justify-stretch">
//                         div
//                         <div
//                             className={`relative h-full group flex justify-center min-w-[150px] border-t-[7.5px] mt-[10px] transition-colors duration-1000 ${
//                                 isDark ? "border-[#333333]" : "border-[#F9FBFC]"
//                             }`}
//                         >
//                             <div
//                                 className={`h-[8.5px] absolute w-full top-0 left-0 transition-all duration-1000 ${
//                                     isDark
//                                         ? "bg-[#505050] shadow-[-5px_-5px_20px_gray]"
//                                         : "bg-[#e1e1e1] shadow-[-5px_-5px_30px_#b2b2b2]"
//                                 }`}
//                             />
//                         </div>
//                         <div
//                             className={`flex w-full justify-between items-end max-h-[246px] gap-[50px] pr-[40px]`}
//                         >
//                             <div
//                                 className={`relative after:content-[''] after:absolute after:w-[70%] after:translate-[-50%] after:h-[70%]  after:top-1/2 after:left-1/2 after:rounded-full  mt-[15px] ml-[15px] rounded-full h-max w-[31px] after:duration-1000  after:transition-all transition-all duration-1000 ${
//                                     isDark
//                                         ? " blur-[1px] after:bg-[#FFF4CC]  shadow-[0_0_20px_#FFF4CC]"
//                                         : ""
//                                 }`}
//                             >
//                                 <Image
//                                     src="/assets/light.png"
//                                     alt="Light"
//                                     width={50}
//                                     height={50}
//                                     className={`h-full rounded-full w-full object-contain transition-opacity duration-1000 ${
//                                         isDark ? "opacity-0" : "opacity-100"
//                                     }`}
//                                 />
//                                 <Image
//                                     src="/assets/light-dark.png"
//                                     alt="Light Dark"
//                                     width={50}
//                                     height={50}
//                                     className={`absolute rounded-full top-0 left-0 h-full w-full object-contain transition-opacity duration-1000 ${
//                                         isDark ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 />
//                             </div>

//                             {/* Bed */}
//                             <div className="relative h-[200px] w-max">
//                                 <Image
//                                     src="/assets/bed.png"
//                                     alt="Bed"
//                                     width={210}
//                                     height={210}
//                                     className={`h-full w-auto object-contain transition-opacity duration-1000 ${
//                                         isDark ? "opacity-0" : "opacity-100"
//                                     }`}
//                                 />
//                                 <Image
//                                     src="/assets/bed-dark.png"
//                                     alt="Bed Dark"
//                                     width={210}
//                                     height={210}
//                                     className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000 ${
//                                         isDark ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 />
//                                 <span
//                                     className={` absolute z-1 w-[30px] h-[30px] rounded-full bg-[#FEFEF2] blur-[3px] shadow-[0_0_20px_white] bottom-[5px] right-[5px] transition-all duration-1000 ${
//                                         isDark ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 ></span>
//                             </div>

//                             {/* Shelf */}
//                             <div
//                                 className="relative h-[45px] w-max rounded-tr-[20px] rounded-tl-[10px]"
//                                 style={{
//                                     boxShadow: !isDark
//                                         ? "-10px_-10px_10px_#e1e1e1"
//                                         : "none",
//                                 }}
//                             >
//                                 <Image
//                                     src="/assets/shelf.png"
//                                     alt="Shelf"
//                                     width={210}
//                                     height={210}
//                                     className={`h-full w-auto object-contain rounded-tr-[20px] rounded-tl-[10px] transition-opacity duration-1000 ${
//                                         isDark ? "opacity-0" : "opacity-100"
//                                     }`}
//                                 />
//                                 <Image
//                                     src="/assets/shelf-dark.png"
//                                     alt="Shelf Dark"
//                                     width={210}
//                                     height={210}
//                                     className={`absolute top-0 left-0 h-full w-auto object-contain rounded-tr-[20px] transition-opacity duration-1000 ${
//                                         isDark ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* ПРАВАЯ ЧАСТЬ */}
//                     <div className="flex w-full h-full justify-stretch items-end">
//                         <div
//                             className={`relative w-full max-h-[246px] w-full group flex justify-start h-[345px] border-[7.5] transition-colors duration-1000 ${
//                                 isDark ? "border-[#333333]" : "border-[#F9FBFC]"
//                             } border-t-0 border-r-0`}
//                         >
//                             <div
//                                 className={`w-1 absolute h-full top-0 left-0 transition-colors duration-1000 ${
//                                     isDark
//                                         ? "bg-[#333333]"
//                                         : "bg-[#D5E0F780] shadow-[5px_5px_5px_#dcdcdc]"
//                                 }`}
//                             />
//                             <div className="w-[70px] h-max rotate-180 flex justify-end relative pt-[13px]">
//                                 <div
//                                     className={`h-[90px] w-[50px] z-2 -rotate-2 absolute top-[10px] right-[18px] bg-linear-to-l transition-all ${
//                                         isDark
//                                             ? "to-[#222] from-[#fff0]"
//                                             : "to-[#F4F4F4] from-[#fff0]"
//                                     }`}
//                                 ></div>
//                                 <div className="h-[90px] border-l-[#ffffff00] border-l-50 border-y-20 border-y-transparent z-1 -rotate-2 absolute top-[10px] right-[18px] transition-colors duration-500 group-hover:border-l-[#C9E7EF]"></div>

//                                 {/* Conditioner 1 */}
//                                 <div className="relative w-max h-[68px] z-10">
//                                     <Image
//                                         src="/assets/condition.png"
//                                         alt="Conditioner"
//                                         width={200}
//                                         height={150}
//                                         className={`h-full w-auto object-contain transition-opacity duration-1000 ${
//                                             isDark ? "opacity-0" : "opacity-100"
//                                         }`}
//                                     />
//                                     <Image
//                                         src="/assets/condition-dark.png"
//                                         alt="Conditioner Dark"
//                                         width={200}
//                                         height={150}
//                                         className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000 ${
//                                             isDark ? "opacity-100" : "opacity-0"
//                                         }`}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="max-w-[320px] h-full pb-[60px] relative">
//                             <div
//                                 className={`relative min-h-[250px] border-[7.5] flex transition-colors duration-1000 ${
//                                     isDark
//                                         ? "border-[#333333]"
//                                         : "border-[#F9FBFC]"
//                                 } border-l-0`}
//                             >
//                                 <div
//                                     className={`h-[8.5px] absolute w-full top-0 left-0 transition-colors duration-1000 ${
//                                         isDark
//                                             ? "bg-[#505050] shadow-[-5px_-5px_20px_gray]"
//                                             : "bg-[#e4e4e4] shadow-[-5px_-5px_30px_#b2b2b2]"
//                                     }`}
//                                 />
//                                 <div
//                                     className={`w-[8.5px] absolute h-full top-0 right-0 transition-colors duration-1000 ${
//                                         isDark
//                                             ? "bg-[#505050] shadow-[-5px_-5px_20px_gray]"
//                                             : "bg-[#e1e1e1] shadow-[10px_10px_30px_#b2b2b2]"
//                                     }`}
//                                 />

//                                 {/* Sofa */}
//                                 <div className="absolute bottom-[-2px] right-[5px] h-[210px] w-max">
//                                     <Image
//                                         src="/assets/sofa.png"
//                                         alt="Sofa"
//                                         width={100}
//                                         height={250}
//                                         className={`h-full w-auto object-contain transition-opacity duration-1000 ${
//                                             isDark ? "opacity-0" : "opacity-100"
//                                         }`}
//                                     />
//                                     <Image
//                                         src="/assets/sofa-dark.png"
//                                         alt="Sofa Dark"
//                                         width={100}
//                                         height={250}
//                                         className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000 ${
//                                             isDark ? "opacity-100" : "opacity-0"
//                                         }`}
//                                     />
//                                 </div>

//                                 <div className="relative top-0 left-[50px]">
//                                     {/* Window (Frame) */}
//                                     <div className="relative h-max w-[90px] z-10">
//                                         <Image
//                                             src="/assets/window.png"
//                                             alt="Window"
//                                             width={90}
//                                             height={250}
//                                             className={`h-full w-full object-contain transition-opacity duration-1000 ${
//                                                 isDark
//                                                     ? "opacity-0"
//                                                     : "opacity-100"
//                                             }`}
//                                         />
//                                     </div>

//                                     <div className="min-w-[150px] h-max -z-1 absolute top-0 right-0">
//                                         <Image
//                                             src="/assets/window-light.png"
//                                             alt="light"
//                                             width={90}
//                                             height={250}
//                                             className={`h-full w-full object-contain transition-opacity duration-1000 ${
//                                                 isDark
//                                                     ? "opacity-0"
//                                                     : "opacity-100"
//                                             }`}
//                                         />
//                                     </div>
//                                     <Image
//                                         src="/assets/mask-2.png"
//                                         alt="Mask"
//                                         width={20}
//                                         height={30}
//                                         className={`transition-all duration-500 w-[17px] h-max z-10 absolute top-0 right-0 object-contain ${
//                                             isDark ? "opacity-0" : "opacity-100"
//                                         }`}
//                                     />
//                                     <Image
//                                         src="/assets/mask-1.png"
//                                         alt="Mask"
//                                         width={20}
//                                         height={30}
//                                         className={`transition-all duration-500 w-[13px] h-max z-10 absolute top-0 left-0 object-contain ${
//                                             isDark ? "opacity-0" : "opacity-100"
//                                         }`}
//                                     />
//                                     <Image
//                                         src="/assets/mask-2-dark.png"
//                                         alt="Mask"
//                                         width={20}
//                                         height={30}
//                                         className={`transition-all   object-cover  duration-1000 h-[28px] z-10 absolute top-0 right-0!   ${
//                                             isDark
//                                                 ? "opacity-100 w-[50%]"
//                                                 : "opacity-0 w-[17px]"
//                                         }`}
//                                     />
//                                     <Image
//                                         src="/assets/mask-1-dark.png"
//                                         alt="Mask"
//                                         width={20}
//                                         height={30}
//                                         className={`transition-all  object-cover  duration-1000 h-[28px] z-10 absolute top-0 left-0!  ${
//                                             isDark
//                                                 ? " opacity-100 w-[50%] "
//                                                 : "opacity-0 w-[13px]"
//                                         }`}
//                                     />
//                                 </div>
//                             </div>

//                             <div
//                                 className={`relative w-full group flex justify-end h-[300px] border-b-[7.5px] transition-colors duration-1000 ${
//                                     isDark
//                                         ? "border-[#333333]"
//                                         : "border-[#F9FBFC]"
//                                 }`}
//                             >
//                                 <div
//                                     className={`h-[5.5px] absolute w-full top-0 left-0 transition-colors duration-1000 ${
//                                         isDark
//                                             ? "bg-[#505050] shadow-[-5px_-5px_20px_gray]"
//                                             : "bg-[#D5E0F780] shadow-[5px_5px_15px_#d0d0d0]"
//                                     }`}
//                                 />
//                                 <div
//                                     className={`h-[5.5px] absolute w-full bottom-[-10px] left-0 transition-colors duration-1000 ${
//                                         isDark
//                                             ? "bg-[#505050] shadow-[-5px_-5px_20px_gray]"
//                                             : "bg-[#D5E0F780] shadow-[5px_5px_15px_#d0d0d0]"
//                                     }`}
//                                 />

//                                 <div className="absolute flex flex-col justify-stretch top-0 right-0 h-full">
//                                     <div className="flex h-[42%]">
//                                         <div
//                                             className={`w-[5px] z-2 h-full transition-colors ${
//                                                 isDark
//                                                     ? "bg-[#222]"
//                                                     : "bg-[#d5e0f757] shadow-[10px_10px_30px_#d7d7d7]"
//                                             }`}
//                                         />
//                                         <div
//                                             className={`w-[7.5px] z-1 h-full transition-colors ${
//                                                 isDark
//                                                     ? "bg-[#333333]"
//                                                     : "bg-[#F9FBFC]"
//                                             }`}
//                                         />
//                                     </div>
//                                     <div className="h-[16%] ml-[-5px] pb-[10px] z-10 origin-bottom-left rotate-90 flex">
//                                         <div
//                                             className={`w-[5px] z-2 h-full transition-colors ${
//                                                 isDark
//                                                     ? "bg-[#222]"
//                                                     : "bg-[#d5e0f756] shadow-[10px_10px_30px_#d7d7d7]"
//                                             }`}
//                                         />
//                                         <div
//                                             className={`w-[7.5px] z-1 h-full transition-colors ${
//                                                 isDark
//                                                     ? "bg-[#333333]"
//                                                     : "bg-[#F9FBFC]"
//                                             }`}
//                                         />
//                                     </div>
//                                     <div className="flex max-h-full h-[42%]">
//                                         <div
//                                             className={`w-[5px] z-2 h-full transition-colors ${
//                                                 isDark
//                                                     ? "bg-[#222]"
//                                                     : "bg-[#d5e0f757] shadow-[10px_10px_30px_#d7d7d7]"
//                                             }`}
//                                         />
//                                         <div
//                                             className={`w-[7.5px] z-1 h-full transition-colors ${
//                                                 isDark
//                                                     ? "bg-[#333333]"
//                                                     : "bg-[#F9FBFC]"
//                                             }`}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div
//                                     className={`relative after:content-[''] after:absolute after:w-[70%] after:translate-[-50%] after:h-[70%]  after:top-1/2 after:left-1/2 after:rounded-full  mt-[15px] ml-[15px] rounded-full h-max w-[31px] after:duration-1000  after:transition-all transition-all duration-1000 ${
//                                         isDark
//                                             ? " blur-[1px] after:bg-[#FFF4CC]  shadow-[0_0_20px_#FFF4CC]"
//                                             : ""
//                                     }`}
//                                 >
//                                     <Image
//                                         src="/assets/light.png"
//                                         alt="Light"
//                                         width={50}
//                                         height={50}
//                                         className={`h-full rounded-full w-full object-contain transition-opacity duration-1000 ${
//                                             isDark ? "opacity-0" : "opacity-100"
//                                         }`}
//                                     />
//                                     <Image
//                                         src="/assets/light-dark.png"
//                                         alt="Light Dark"
//                                         width={50}
//                                         height={50}
//                                         className={`absolute rounded-full top-0 left-0 h-full w-full object-contain transition-opacity duration-1000 ${
//                                             isDark ? "opacity-100" : "opacity-0"
//                                         }`}
//                                     />
//                                 </div>
//                                 {/* Table */}
//                                 <div className="relative w-[210px] h-max mt-[-15px]">
//                                     <Image
//                                         src="/assets/table.png"
//                                         alt="Table"
//                                         width={210}
//                                         height={150}
//                                         className={`h-full w-full object-contain transition-opacity duration-1000 ${
//                                             isDark ? "opacity-0" : "opacity-100"
//                                         }`}
//                                     />
//                                     <Image
//                                         src="/assets/table-dark.png"
//                                         alt="Table Dark"
//                                         width={210}
//                                         height={150}
//                                         className={`absolute top-[-7px] left-0 h-full w-full object-contain transition-opacity duration-1000 ${
//                                             isDark ? "opacity-100" : "opacity-0"
//                                         }`}
//                                     />
//                                 </div>

//                                 <div className="group w-[70px] flex justify-end relative pt-[13px]">
//                                     <div
//                                         className={`h-[90px] w-[50px] z-2 -rotate-2 absolute top-[10px] right-[18px] bg-linear-to-l transition-all group-hover:to-[#e0dede] from-[#fff0]`}
//                                     ></div>
//                                     <div className="h-[90px] border-l-[#ffffff00] border-l-50 border-y-20 border-y-transparent z-1 -rotate-2 absolute top-[10px] right-[18px] transition-colors duration-500 group-hover:border-l-[#C9E7EF]"></div>

//                                     {/* Conditioner 2 */}
//                                     <div className="relative mr-[7px] w-max h-[68px] z-10">
//                                         <Image
//                                             src="/assets/condition.png"
//                                             alt="Conditioner"
//                                             width={200}
//                                             height={150}
//                                             className={`h-full w-auto object-contain transition-opacity duration-1000 ${
//                                                 isDark
//                                                     ? "opacity-0"
//                                                     : "opacity-100"
//                                             }`}
//                                         />
//                                         <Image
//                                             src="/assets/condition-dark.png"
//                                             alt="Conditioner Dark"
//                                             width={200}
//                                             height={150}
//                                             className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000 ${
//                                                 isDark
//                                                     ? "opacity-100"
//                                                     : "opacity-0"
//                                             }`}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div
//                             className={`relative h-full group flex justify-center min-w-[213px]! border-t-[7.5px] mt-[10px] transition-colors  ${
//                                 isDark ? "border-[#333333]" : "border-[#F9FBFC]"
//                             } target-card`}
//                         >
//                             <div
//                                 className={`h-[8.5px] absolute w-full top-0 left-0 transition-colors duration-1000 ${
//                                     isDark
//                                         ? "bg-[#505050] shadow-[-5px_-5px_20px_gray]"
//                                         : "bg-[#e1e1e1] shadow-[-5px_-5px_30px_#b2b2b2]"
//                                 }`}
//                             />

//                             <div className="relative w-full p-[40px] h-max">
//                                 <Image
//                                     src="/assets/car.png"
//                                     alt="Car"
//                                     width={200}
//                                     height={320}
//                                     className={`w-full h-auto z-1 object-contain transition-opacity duration-1000 ${
//                                         isDark ? "opacity-0" : "opacity-100"
//                                     }`}
//                                 />
//                                 <Image
//                                     src="/assets/car-dark.png"
//                                     alt="Car Dark"
//                                     width={200}
//                                     height={320}
//                                     className={`absolute top-0 z-1 left-0 w-full p-[40px] h-auto object-contain transition-opacity duration-1000 ${
//                                         isDark ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 />
//                                 <span
//                                     className={` absolute z-1 w-[10px] h-[10px] rounded-full bg-[#F56C6C90] shadow-[0_0_10px_red] animate-pulse top-[288px] left-[60px] ${
//                                         isDark ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 ></span>
//                                 <span
//                                     className={` absolute z-1 w-[10px] h-[10px] rounded-full bg-[#F56C6C90] shadow-[0_0_10px_red] animate-pulse top-[288px] right-[60px] ${
//                                         isDark ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 ></span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* FLOOR SHADOW */}
//                 <div
//                     className={`absolute -z-10 top-[20px] -right-[250px] w-[600px] h-[600px] duration-1000 transition-all floor-shadow ${
//                         isDark ? "floor-shadow-dark" : ""
//                     }`}
//                 ></div>

//                 {/* FLOOR IMAGE */}
//                 {/* <Image
//                     src="/assets/floor.png"
//                     alt="floor"
//                     width={700}
//                     height={850}
//                     className={` absolute -z-10 h-[813px] w-auto top-[-150px] -right-[100px] object-contain `}
//                 /> */}
//             </div>
//         </main>
//     );
// }
