import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
    isDark: boolean;
    mouseX?: number;
    mouseY?: number;
};

export default function Item3({ isDark, mouseX = 0, mouseY = 0 }: Props) {
    const sensorRef = useRef<HTMLDivElement>(null);
    const circlesRef = useRef<HTMLDivElement>(null);
    const footRefs = useRef<(HTMLImageElement | null)[]>([]);
    const tlSensor = useRef<gsap.core.Timeline | null>(null);

    // 1. Датчик (волны)
    useEffect(() => {
        const circles = circlesRef.current?.querySelectorAll(".ripple-circle");
        if (circles) {
            tlSensor.current = gsap.timeline({ repeat: -1 });
            tlSensor.current.fromTo(
                circles,
                { scale: 0.8, opacity: 0.6 },
                {
                    scale: 4,
                    opacity: 0,
                    duration: 2,
                    stagger: 0.6,
                    ease: "none",
                }
            );
        }
        return () => {
            tlSensor.current?.kill();
        };
    }, []);

    // 2. Логика проявления и скорости
    useEffect(() => {
        if (!sensorRef.current || !tlSensor.current) return;

        const rect = sensorRef.current.getBoundingClientRect();
        const sensorX = rect.left + rect.width / 2;
        const sensorY = rect.top + rect.height / 2;

        const dist = Math.sqrt(
            Math.pow(mouseX - sensorX, 2) + Math.pow(mouseY - sensorY, 2)
        );

        // Скорость датчика
        const proximity = Math.max(0, 1 - dist / 500);
        gsap.to(tlSensor.current, {
            timeScale: 0.4 + proximity * 5.6,
            duration: 0.2,
            ease: "none",
        });

        // Проявление следов (БЕЗ изменения размера)
        footRefs.current.forEach((foot, i) => {
            if (foot && foot.getAttribute("data-revealed") !== "true") {
                const footRect = foot.getBoundingClientRect();

                const isNear =
                    mouseX > footRect.left - 80 &&
                    mouseX < footRect.right + 80 &&
                    mouseY > footRect.top - 80 &&
                    mouseY < footRect.bottom + 80;

                if (isNear) {
                    foot.setAttribute("data-revealed", "true");
                    gsap.to(foot, {
                        opacity: (i + 1) / 14,
                        duration: 0.8,
                        ease: "power2.out",
                    });
                }
            }
        });
    }, [mouseX, mouseY]);

    return (
        <div
            className={`home-item-3 relative z-20 ${
                isDark ? "dark-mode" : "light-mode"
            }`}
        >
            <div
                ref={sensorRef}
                className={`relative h-full w-full wall-top-light border-b-[7.5px] border-t-[7.5px] flex flex-col justify-between items-end transition-colors duration-500 ${
                    isDark ? "wall-top-dark" : ""
                }`}
            >
                {/* Камера */}
                <div className="relative w-[15px] mt-[5px] h-[15px]">
                    <Image
                        src="/assets/security.png"
                        alt="s"
                        width={30}
                        height={30}
                        className="h-full w-full object-contain"
                        style={{ opacity: isDark ? 0 : 1 }}
                    />
                    <Image
                        src="/assets/security-dark.png"
                        alt="sd"
                        width={30}
                        height={30}
                        className="absolute inset-0 rotate-90 object-contain"
                        style={{ opacity: isDark ? 1 : 0 }}
                    />
                </div>

                {/* Следы (Вернул оригинальный масштаб) */}
                <div
                    className="flex h-[55px] justify-end pr-[20px] overflow-visible"
                    onMouseEnter={() => {
                        // Запасной триггер: если мышка в зоне, проявляем по очереди
                        footRefs.current.forEach((f, i) => {
                            if (
                                f &&
                                f.getAttribute("data-revealed") !== "true"
                            ) {
                                gsap.to(f, {
                                    opacity: (i + 1) / 14,
                                    duration: 1.5,
                                    delay: i * 0.1,
                                });
                            }
                        });
                    }}
                >
                    {[...Array(6)].map((_, i) => (
                        <Image
                            key={i}
                            ref={(el) => {
                                footRefs.current[i] = el;
                            }}
                            src="/assets/foot.png"
                            width={40} // Оригинальный размер
                            height={25}
                            alt="f"
                            className={`w-[30px] ml-[-5px] object-contain ${
                                i % 2 ? " rotate-x-180 " : "self-end"
                            }`}
                            style={{
                                opacity: 0, // Невидим до наведения
                                filter: isDark ? "brightness(0.5)" : "none",
                                pointerEvents: "none",
                            }}
                        />
                    ))}
                </div>

                {/* Датчик */}
                <div className="relative w-[35px] h-[35px] mr-[10px] mb-[5px] flex items-center justify-center">
                    <div
                        ref={circlesRef}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="ripple-circle absolute border border-[#aaaaaa] rounded-full w-full h-full" />
                        <div className="ripple-circle absolute border border-[#aaaaaa] rounded-full w-full h-full" />
                        <div className="ripple-circle absolute border border-[#aaaaaa] rounded-full w-full h-full" />
                    </div>
                    <Image
                        src="/assets/fire-ceiling.png"
                        alt="d"
                        width={30}
                        height={30}
                        className="relative z-10 h-full w-full object-contain"
                        style={{ opacity: isDark ? 0 : 1 }}
                    />
                    <Image
                        src="/assets/fire-ceiling-dark.png"
                        alt="dd"
                        width={30}
                        height={30}
                        className="absolute inset-0 z-20 h-full w-full object-contain"
                        style={{ opacity: isDark ? 1 : 0 }}
                    />
                </div>
            </div>
        </div>
    );
}
