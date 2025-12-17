"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {};
gsap.registerPlugin(useGSAP);

export default function Main({}: Props) {
    const containerRef = useRef(null);
    const worldRef = useRef(null);

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleMouseMove = contextSafe((e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xRatio = clientX / innerWidth - 0.5;
        const yRatio = clientY / innerHeight - 0.5;

        gsap.to(worldRef.current, {
            x: xRatio * -100,
            y: yRatio * -100,
            rotationY: xRatio * 8,
            rotationX: yRatio * -8,
            duration: 1,
            ease: "power2.out",
        });

        gsap.to(".target-card", {
            duration: 0.6,
            ease: "power2.out",
        });
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(worldRef.current, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.8)",
        });

        gsap.to(".target-card", {
            duration: 0.6,
        });
    });

    return (
        <main
            ref={containerRef}
            className=" pb-[70px] items-end h-[820px] mx-auto absolute top-0 bg flex w-full"
            style={{ perspective: "1200px" }}
        >
            <div ref={worldRef} className="flex w-full h-full items-end">
                <div className="grid w-full grid-cols-2">
                    <div className="flex items-end justify-stretch">
                        <div className="relative h-full group flex justify-center min-w-0 border-t-[7.5px] mt-[10px] border-[#F9FBFC]">
                            <div className="h-[8.5px] shadow-[-5px_-5px_30px_#b2b2b2] absolute w-full top-0 left-0 bg-[#e1e1e1]" />
                        </div>
                        <div className="flex w-full justify-between items-end max-h-[246px]  border border-[red] gap-[50px] pr-[40px]">
                            <Image
                                src="/details/sweets-top.svg"
                                alt="Sweets"
                                width={50}
                                height={50}
                                className="h-max w-[51px] object-contain"
                            />
                            <Image
                                src="/details/bed.png"
                                alt="Bed"
                                width={210}
                                height={210}
                                className="h-[200px] w-max object-contain "
                            />
                            <Image
                                src="/details/shelf.png"
                                alt="Bed"
                                width={210}
                                height={210}
                                className="h-[45px] shadow-[-10px_-10px_10px_#e1e1e1] w-max object-contain rounded-tr-[20px] "
                            />
                        </div>
                    </div>

                    <div className="flex w-full h-full justify-stretch items-end">
                        <div className="relative max-w-[200px] max-h-[246px] w-full group flex justify-start h-[345px] border-[7.5] border-[#F9FBFC] border-t-0 border-r-0 ">
                            <div className="w-1 shadow-[5px_5px_5px_#dcdcdc] absolute h-full top-0 left-0 bg-[#D5E0F780]" />
                            <div className="w-[70px] h-max rotate-180 flex justify-end relative pt-[13px]">
                                <div className="h-[90px] w-[50px] z-2 -rotate-2 absolute top-[10px] right-[18px] bg-linear-to-l to-[#F4F4F4] from-[#fff0]"></div>
                                <div className="h-[90px] border-l-[#ffffff00] border-l-50 border-y-20 border-y-transparent z-1 -rotate-2 absolute top-[10px] right-[18px] transition-colors duration-500 group-hover:border-l-[#C9E7EF]"></div>
                                <Image
                                    src="/details/conditioner.png"
                                    alt="Conditioner"
                                    width={200}
                                    height={150}
                                    className="w-max h-[94px] z-10 object-contain "
                                />
                            </div>
                        </div>

                        <div className="w-full h-full pb-[60px] relative">
                            <div className="border-[#F9FBFC] border-l-0 relative min-h-[250px] border-[7.5] flex ">
                                <div className="h-[8.5px] shadow-[-5px_-5px_30px_#b2b2b2] absolute w-full top-0 left-0 bg-[#e4e4e4]" />
                                <div className="w-[8.5px] shadow-[10px_10px_30px_#b2b2b2] absolute h-full top-0 right-0 bg-[#e1e1e1]" />
                                <Image
                                    src="/details/sofa.png"
                                    alt="Sofa"
                                    width={100}
                                    height={250}
                                    className="h-[210px] absolute bottom-[-2px] right-[5px] w-max object-contain"
                                />
                                <div className="relative top-0 left-[50px]">
                                    <Image
                                        src="/details/window.png"
                                        alt="Window"
                                        width={90}
                                        height={250}
                                        className="h-max z-10  w-[90px] object-contain"
                                    />
                                    <Image
                                        src="/details/window-light.png"
                                        alt="light"
                                        width={90}
                                        height={250}
                                        className=" min-w-[150px] h-max  -z-1 absolute  top-0 right-0 object-contain"
                                    />
                                    <Image
                                        src="/details/mask-2.png"
                                        alt="Mask"
                                        width={20}
                                        height={30}
                                        className=" w-[17px] h-max  z-10 absolute  top-0 right-0 object-contain"
                                    />
                                    <Image
                                        src="/details/mask-1.png"
                                        alt="Mask"
                                        width={20}
                                        height={30}
                                        className=" w-[13px] h-max  z-10 absolute  top-0 left-0 object-contain"
                                    />
                                </div>
                            </div>

                            <div className="relative w-full group flex justify-end h-[300px] border-b-[7.5px] border-[#F9FBFC] ">
                                <div className="h-[5.5px] shadow-[5px_5px_15px_#d0d0d0] absolute w-full top-0 left-0 bg-[#D5E0F780]" />
                                <div className="h-[5.5px] shadow-[5px_5px_15px_#d0d0d0] absolute w-full bottom-[-10px] left-0 bg-[#D5E0F780]" />
                                <div className="absolute flex flex-col justify-stretch  top-0 right-0 h-full">
                                    <div className="flex h-[42%]">
                                        <div className="w-[5px] shadow-[10px_10px_30px_#d7d7d7] z-2  h-full bg-[#d5e0f757]" />
                                        <div className="w-[7.5px]  z-1 h-full bg-[#F9FBFC]" />
                                    </div>
                                    <div className="h-[16%] ml-[-5px] pb-[10px] z-10 origin-bottom-left rotate-90 flex">
                                        <div className="w-[5px] shadow-[10px_10px_30px_#d7d7d7] z-2  h-full bg-[#d5e0f756]" />
                                        <div className="w-[7.5px]  z-1 h-full bg-[#F9FBFC]" />
                                    </div>
                                    <div className="flex max-h-full h-[42%]">
                                        <div className="w-[5px] shadow-[10px_10px_30px_#d7d7d7] z-2  h-full bg-[#d5e0f757]" />
                                        <div className="w-[7.5px]  z-1 h-full bg-[#F9FBFC]" />
                                    </div>
                                </div>
                                <Image
                                    src="/details/sweets-top.svg"
                                    alt="Sweets"
                                    width={50}
                                    height={50}
                                    className="h-max w-[51px] object-contain"
                                />
                                <Image
                                    src="/details/table.svg"
                                    alt="Table"
                                    width={210}
                                    height={150}
                                    className="w-[210px] h-max mt-[-15px] mx-[-40px] object-contain "
                                />
                                <div className="w-[70px] flex justify-end relative pt-[13px]">
                                    <div className="h-[90px] w-[50px] z-2 -rotate-2 absolute top-[10px] right-[18px] bg-linear-to-l transition-colors duration-500 group-hover:to-[#e0dede] from-[#fff0]"></div>
                                    <div className="h-[90px] border-l-[#ffffff00] border-l-50 border-y-20 border-y-transparent z-1 -rotate-2 absolute top-[10px] right-[18px] transition-colors duration-500 group-hover:border-l-[#C9E7EF]"></div>
                                    <Image
                                        src="/details/conditioner.png"
                                        alt="Conditioner"
                                        width={200}
                                        height={150}
                                        className="w-max h-[94px] z-10 object-contain "
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative h-full group flex justify-center min-w-[213px] border-t-[7.5px] mt-[10px] border-[#F9FBFC] target-card"
                        >
                            <div className="h-[8.5px] shadow-[-5px_-5px_30px_#b2b2b2] absolute w-full top-0 left-0 bg-[#e1e1e1]" />
                            <Image
                                src="/details/car.png"
                                alt="Car"
                                width={200}
                                height={320}
                                className="w-full p-[40px] h-max object-contain "
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute -z-10 top-[20px] -right-[250px] w-[600px] h-[600px] floor-shadow"></div>
                <Image
                    src="/details/floor.png"
                    alt="floor"
                    width={700}
                    height={850}
                    className="absolute -z-10 h-[813px] w-auto top-[-150px] -right-[100px]"
                />
            </div>
        </main>
    );
}
