"use client";
import React, { useState } from "react";
import Item1 from "./item1";
import Item2 from "./item2";
import Item3 from "./item3";
import Item4 from "./item4";
import Item5 from "./item5";
import Item6 from "./item6";
import Item7 from "./item7";
import Item8 from "./item8";
import Item9 from "./item9";
import Item10 from "./item10";
import Item11 from "./item11";
import Item12 from "./item12";

type Props = { isDark: boolean };

export default function SmartHomeItems({ isDark }: Props) {
    const items = [
        Item1,
        Item2,
        Item3,
        Item4,
        Item5,
        Item6,
        Item7,
        Item8,
        Item9,
        Item10,
        Item11,
        Item12,
    ];
    return (
        <div className="home-grid top-0 z-[-1] left-0 w-full h-[820px] ">
            {items.map((E, i) => (
                <E key={i} isDark={isDark} />
            ))}
        </div>
    );
}
