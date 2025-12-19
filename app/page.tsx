"use client";
import Header from "@/components/header";
import Main from "@/components/main";
import { useState } from "react";

type Props = {};

export default function Home({}: Props) {
    return (
        <>
            <Header />
            <Main />
        </>
    );
}
