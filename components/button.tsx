import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function SmartButton() {
    const containerRef = useRef<HTMLDivElement>(null);
    const circleInsideRef = useRef<HTMLSpanElement>(null);
    const circleOutsideRef = useRef<HTMLSpanElement>(null);

    // Устанавливаем круги в правую часть при загрузке (только X)
    useEffect(() => {
        gsap.set([circleInsideRef.current, circleOutsideRef.current], {
            x: 110,
            y: 0, // По вертикали всегда в центре
        });
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // Вычисляем только X относительно центра кнопки
        const x = e.clientX - rect.left - rect.width / 2;

        // Двигаем круги ОДНОВРЕМЕННО только по горизонтали
        gsap.to([circleInsideRef.current, circleOutsideRef.current], {
            x: x,
            // y: 0, <-- не меняем y, он остается 0 (центр)
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
        });
    };

    const handleMouseLeave = () => {
        // Возвращаем круги в исходную правую позицию
        gsap.to([circleInsideRef.current, circleOutsideRef.current], {
            x: 110,
            duration: 1,
            ease: "power2.inOut",
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-full max-xl:mt-[30px] mt-[60px] max-w-max flex items-center justify-center"
        >
            {/* 1. ВНЕШНЕЕ СВЕЧЕНИЕ (Под кнопкой, только X) */}
            <span
                ref={circleOutsideRef}
                className="absolute w-[110px] h-[90px] rounded-full bg-radial from-[#C4F9FC] to-transparent blur-[10px] opacity-70 pointer-events-none"
                style={{
                    zIndex: -1,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-65px",
                    marginTop: "-45px",
                }}
            />

            {/* 2. ТЕЛО КНОПКИ */}
            <div className="relative shadow-[0_0_20px_#C4F9FC]  cursor-pointer font-bold bg-[#F0F4F6] border border-white uppercase rounded-full px-[54px] py-[12px] text-[13px] text-[#00576B] overflow-hidden flex items-center justify-center">
                {/* Текст */}
                <span className="relative z-10 pointer-events-none select-none">
                    Узнать больше<span className="ml-[5px]">{">"}</span>
                </span>

                {/* ВНУТРЕННИЙ БЛИК (Внутри кнопки, только X) */}
                <span
                    ref={circleInsideRef}
                    className="absolute w-[70px] h-[70px] rounded-full bg-radial from-[#C4F9FC] to-transparent opacity-80 pointer-events-none z-1"
                    style={{
                        left: "50%",
                        top: "50%",
                        marginLeft: "-35px",
                        marginTop: "-35px",
                    }}
                />
            </div>
        </div>
    );
}
