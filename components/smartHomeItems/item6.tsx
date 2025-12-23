import Image from "next/image";

type Props = {
    isDark: boolean;
};

export default function Item6({ isDark }: Props) {
    return (
        <div className="home-item-6 drop-shadow-[0_5px_6px_#e2e2e2] dark:drop-shadow-[0_3px_3px_#222] border-0!">
            <div
                className={`relative w-full mt-[-2px] group flex justify-between h-full border-b-[7.5px] wall-top-light transition-colors duration-1000 ${
                    isDark ? "wall-top-dark" : ""
                }`}
            >
                <span className="absolute h-[5px] bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 top-0"></span>
                <span className="absolute h-[5px] bg-[#F2F3F8] dark:bg-[#505050] w-full left-0 bottom-[-10px]"></span>

                <div className="h-[20%] pb-[10px] absolute left-0 top-0  flex">
                    <div
                        className={`w-[5px]  h-full bg-[#f4f4f4] dark:bg-[#333] transition-colors`}
                    />
                </div>

                <div className="absolute flex flex-col justify-stretch top-0 right-0 h-full">
                    <div className="flex h-[42%]">
                        <div
                            className={`w-[8px] z-2 h-full transition-colors bg-[#F2F3F8] dark:bg-[#505050] `}
                        />
                        <div
                            className={`w-[7.5px] z-1 h-full border-top-light transition-colors ${
                                isDark ? "border-top-dark" : ""
                            }`}
                        />
                    </div>
                    <div className="h-[16%]  z-5 origin-bottom-left rotate-90 flex">
                        <div
                            className={`w-[2px]  z-5 h-full bg-[#FCFDFF] dark:bg-[#666] transition-colors `}
                        />
                        <div
                            className={`w-[6px]  -z-1  h-full bg-[#f7f7f7] dark:bg-[#333] transition-colors `}
                        />
                    </div>
                    <div className="flex max-h-full z-3 h-[42%]">
                        <div
                            className={`w-[8px] z-2 h-full transition-colors bg-[#F2F3F8] dark:bg-[#505050]`}
                        />
                        <div
                            className={`w-[7.5px] z-1 h-full border-top-light transition-colors ${
                                isDark ? "border-top-dark" : ""
                            }`}
                        />
                    </div>
                </div>

                <div className="absolute w-[30px] rotate-90 bottom-[10%] z-20 right-[-2px] h-auto ">
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
                        className={`absolute top-0 left-0 h-min w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>

                <div
                    className={`relative after:content-[''] after:absolute after:w-[70%] after:translate-[-50%] after:h-[70%]  after:top-1/2 after:left-1/2 after:rounded-full  mt-[15px] ml-[15px] rounded-full h-max w-[31px] after:duration-1000  after:transition-all transition-all duration-1000 ${
                        isDark
                            ? " blur-[1px] after:bg-[#FFF4CC]  shadow-[0_0_20px_#FFF4CC]"
                            : ""
                    }`}
                >
                    <Image
                        src="/assets/light.png"
                        alt="Light"
                        width={50}
                        height={50}
                        className={`h-full rounded-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/light-dark.png"
                        alt="Light Dark"
                        width={50}
                        height={50}
                        className={`absolute rounded-full top-0 left-0 h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
                {/* Table */}
                <div className="relative w-[210px] h-max mt-[-15px]">
                    <Image
                        src="/assets/table.png"
                        alt="Table"
                        width={210}
                        height={150}
                        className={`h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <Image
                        src="/assets/table-dark.png"
                        alt="Table Dark"
                        width={210}
                        height={150}
                        className={`absolute top-[-7px] left-0 h-full w-full object-contain transition-opacity duration-1000 ${
                            isDark ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>

                <div className="group w-[70px] flex justify-end relative pt-[13px]">
                    <div className=" h-[90px] rotate-178 w-[70px] absolute top-[5px] right-[18px] z-1 [clip-path:polygon(0%_20%,100%_0%,100%_100%,0%_80%)]">
                        <div
                            className="absolute inset-0 dark:from-[gray] bg-linear-to-r from-[#C9E7EF] to-[#a7d8e500] 
            opacity-0 group-hover:opacity-100 "
                        ></div>
                    </div>

                    <div className="relative mr-[7px] w-max h-[68px] z-10">
                        <Image
                            src="/assets/condition.png"
                            alt="Conditioner"
                            width={200}
                            height={150}
                            className={`h-full w-auto object-contain transition-opacity duration-1000 ${
                                isDark ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <Image
                            src="/assets/condition-dark.png"
                            alt="Conditioner Dark"
                            width={200}
                            height={150}
                            className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-1000 ${
                                isDark ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
