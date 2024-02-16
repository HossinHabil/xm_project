import Image from "next/image";
import Link from "next/link";

import MaxWidthWithWrapper from "@/components/MaxWidthWrapper";
import CryptoWidgetCard from "@/components/CryptoWidgetCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  CryptoWidgets,
  TradeWithXm,
  RegisterHere,
  sectionSevenData,
} from "@/static";
import TradeWithXmCard from "@/components/TradeWithXmCard";
import Icon from "@/components/Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import RegistationForm from "@/components/RegistationForm";
import { EventGalleryCarousel } from "@/components/EventGalleryCarousel";
import SeventhSectionCard from "@/components/SeventhSectionCard";

export default async function Home() {
  return (
    <>
      {/* Multi Sections */}
      <section className="relative flex flex-col justify-center items-center w-full bg-gradient-to-r from-gray-950 to-gray-800 pb-20">
        {/* Hero Section */}
        <div className="relative h-[85vh] flex flex-col justify-center items-center w-full">
          <span className="w-full h-full absolute top-0 left-0 right-0 bgOverlay z-10"></span>
          <Image
            src="/images/hero_img_desktop.png"
            fill
            sizes="100vw"
            className="absolute object-cover w-full h-full hidden xl:block"
            alt="image"
          />
          <Image
            src="/images/hero_img_tablet.svg"
            fill
            sizes="100vw"
            className="absolute object-cover w-full h-full hidden md:block xl:hidden"
            alt="image"
          />
          <div className="absolute top-0 w-full h-40">
            <Image
              src="/images/hero_img_mobile.png"
              fill
              sizes="100vw"
              className="absolute w-full h-full block md:hidden"
              alt="image"
            />
          </div>
          <MaxWidthWithWrapper className="relative text-center z-20">
            <div className="max-w-[50rem] w-full text-white m-auto p-4 md:px-28">
              <h2 className="text-xl">TRADE WITH</h2>
              <h2 className="text-3xl p-4">
                <span className="font-semibold">Zero Swaps</span> on All XM
                Ultra Low Accounts for more than 25 instruments!
              </h2>
              <p className="p-4 md:px-8">
                Enjoy spreads{" "}
                <span className="font-semibold">as low as 0.6 pips</span>{" "}
                <span className="font-semibold">and leverage up to 1000:1</span>{" "}
                on instruments like{" "}
                <span className="font-semibold">
                  EURUSD, USDJPY, EURJPY, GBPUSD
                </span>
                , and Gold.
              </p>
              <Button className="w-full text-white bg-[#29A643] hover:bg-[#29A643] font-semibold rounded-none my-4">
                OPEN ACCOUNT
              </Button>
              <p className="mb-2">
                New to trading? Try a{" "}
                <Link href="/" className="underline">
                  Demo account.
                </Link>
              </p>
              <p>
                Terms and Conditions apply
                <span className="text-[#D51820]">*</span>. To Read the full
                T&Cs,{" "}
                <Link href="/" className="text-[#D51820]">
                  click here
                </Link>
              </p>
            </div>
          </MaxWidthWithWrapper>
        </div>

        {/* Crypto Widgets Section */}
        <Image
          src="/images/tradewithxm/gold_line.svg"
          fill
          sizes="100vw"
          className="absolute object-fill w-full h-full"
          alt="gold_line"
          />
        <MaxWidthWithWrapper className="relative text-center space-y-10">
          <Image
            src="/images/tradewithxm/gold_number.svg"
            width={700}
            height={700}
            className="absolute !top-[15rem] !left-[-20rem] hidden xl:block"
            alt="gold_number"
          />
          <Image
            src="/images/tradewithxm/gold_number.svg"
            width={400}
            height={400}
            className="absolute !top-[28rem] !left-[-8rem] hidden md:block xl:hidden"
            alt="gold_number"
          />
          <Image
            src="/images/tradewithxm/gold_number.svg"
            width={400}
            height={400}
            className="absolute !top-[70rem] !left-[-10rem] md:hidden"
            alt="gold_number"
          />
          <Image
            src="/images/tradewithxm/zero_mobile_bigger.svg"
            width={200}
            height={200}
            className="absolute !right-[-6rem] !top-[-8rem] md:hidden"
            alt="zero_mobile_bigger"
          />

          <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-5 gap-x-4 gap-y-8 mb-40 relative">
            {CryptoWidgets.map((widget) => (
              <CryptoWidgetCard key={widget.id} {...widget} />
            ))}
          </div>

          {/* Trade with XM Section */}
          <div className="max-w-[50rem] w-full text-white !mt-32 mx-auto px-4 space-y-10 relative">
            <h2 className="text-5xl">
              Why <span className="font-semibold">Trade</span> with XM?
            </h2>
            <Separator className="w-24 m-auto bg-[#29A643]" />
            <p className="">
              We have been providing traders around the world with the same
              <span className="font-semibold">premium experience</span> for over
              a decade. As an{" "}
              <span className="font-semibold">industry-leader</span>, we know
              what the modern trader needs to be{" "}
              <span className="font-semibold">successful</span> in the markets.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-8 p-4 xl:px-20 relative">
            {TradeWithXm.map((card) => (
              <TradeWithXmCard key={card.id} {...card} />
            ))}
          </div>
        </MaxWidthWithWrapper>

        {/* Register Here Section */}
        <MaxWidthWithWrapper className="relative text-center space-y-10 text-white py-20 xl:px-60">
          <h2 className="text-[34px] font-semibold">- Register Here -</h2>
          <p className="text-base">
            Join us to celebrate our biggest night of the year.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 px-8 md:px-0">
            {RegisterHere.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col items-center gap-y-3 py-4 px-28 sm:px-44 md:px-6 xl:px-12 border ${
                  (item.id === 1 || item.id === 3) && "border-r-0 border-l-0"
                } ${item.id === 2 && "border-r-0 border-l-0 md:border"}`}
              >
                <Icon
                  name={item.name as keyof typeof dynamicIconImports}
                  className="h-[20px] md:h-[25px]"
                />
                <p className="text-base">{item.title}</p>
              </div>
            ))}
          </div>
        </MaxWidthWithWrapper>

        {/* Form Section */}
        <MaxWidthWithWrapper className="relative text-center space-y-10 px-4 text-white">
          <RegistationForm />
        </MaxWidthWithWrapper>
      </section>

      {/* Event Gallery Section */}
      <section className="relative flex flex-col justify-center items-center w-full bg-[#F4F4F4] py-20">
        <MaxWidthWithWrapper className="relative text-center space-y-10">
          <h2 className="text-3xl font-semibold text-[#252525]">
            Event Gallery
          </h2>
          <EventGalleryCarousel />
        </MaxWidthWithWrapper>
      </section>

      {/* Big. Fair. Human. Section */}
      <section className="relative flex flex-col justify-center items-center w-full bg-white py-20">
        <MaxWidthWithWrapper className="lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="row-span-2 py-8 xl:pl-12 flex flex-col items-center lg:items-start text-[#444444] mb-12 lg:mb-0">
              <Separator className="bg-[#D51820] w-12 h-1 ml-2" />
              <div className="flex flex-row lg:flex-col gap-2 flex-1 my-4">
                <h2 className="text-[35px] md:text-5xl lg:text-7xl font-semibold">
                  Big<span className="font-semibold text-[#D51820]">.</span>
                </h2>
                <h2 className="text-[35px] md:text-5xl lg:text-7xl font-semibold">
                  Fair<span className="font-semibold text-[#D51820]">.</span>
                </h2>
                <h2 className="text-[35px] md:text-5xl lg:text-7xl font-semibold">
                  Human<span className="font-semibold text-[#D51820]">.</span>
                </h2>
              </div>
              <p className="text-center md:text-left pr-6 pl-6 md:pl-0 xl:pr-20 text-lg">
                Learn why{" "}
                <span className="font-semibold">
                  over 5 million clients choose XM
                </span>{" "}
                as their trusted online broker.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-y-8 lg:gap-y-0">
              {sectionSevenData.map((item) => (
                <SeventhSectionCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </MaxWidthWithWrapper>
      </section>
    </>
  );
}
