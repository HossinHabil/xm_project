"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Props = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const MOBILE_SCREEN_WIDTH = 1280;

const TradeWithXmCard = ({ id, title, description, image }: Props) => {
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth < MOBILE_SCREEN_WIDTH);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <Card
      className={`${
        (id === 1 && "xl:row-span-2") || (id === 2 && "xl:col-span-2")
      } xl:p-12 bg-[#0B0819] text-white px-8 py-12 border-0 relative h-64 xl:h-full`}
    >
      <CardHeader className="p-0">
        <CardTitle className="text-[25px] font-bold text-left w-[12rem]">
        <span dangerouslySetInnerHTML={{__html: title}}/>
        </CardTitle>
      </CardHeader>
      <Separator className="w-24 bg-[#29A643] my-4 h-[2px]" />
      <CardDescription
        className={`text-left text-base text-white ${
          id === 2 ? "w-7/12" : "w-10/12"
        }`}
      >
        <span dangerouslySetInnerHTML={{__html: description}}/>
      </CardDescription>
      <Image
        src={image}
        alt={title}
        width={id === 1 ? (mobileScreen ? 80 : 200) : 80}
        height={id === 1 ? (mobileScreen ? 80 : 200) : 80}
        className={`absolute ${
          id === 1 ? (mobileScreen ? "top-4 right-4" : "bottom-8 left-4") : "top-4 right-4"
        }`}
      />
    </Card>
  );
};

export default TradeWithXmCard;
