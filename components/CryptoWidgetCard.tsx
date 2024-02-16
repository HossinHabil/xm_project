import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import { ChevronUp, ChevronDown } from "lucide-react";

type Props = {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
};

const CryptoWidgetCard = ({
  name,
  nameid,
  symbol,
  percent_change_24h,
  price_usd,
}: Props) => {
  return (
    <Card
      className={`w-full max-w-96 md:max-w-56 h-40 bg-gray-300 bg-opacity-10 border border-gray-400 border-opacity-20 m-auto md:max-xl:col-span-2 md:max-xl:[&:nth-last-child(2)]:col-start-2`}
    >
      <CardHeader className="p-4 mb-3">
        <CardTitle className="flex justify-start gap-4 items-center">
          <Avatar>
            <AvatarImage src={`/images/sectionTwo/${nameid}.svg`} />
          </Avatar>
          <p className="text-white text-[13.35px]">{symbol}</p>
          <p className="text-[8.59px] bg-white py-1 px-2 rounded-lg w-16">
            {name}
          </p>
        </CardTitle>
      </CardHeader>
      <Separator className="w-10/12 m-auto" />
      <CardContent className="text-left text-white mt-3">
        <p className="text-[19.08px]">${price_usd}</p>
        <div
          className={`text-[13.35px] flex items-center gap-x-2 ${
            percent_change_24h.startsWith("-")
              ? "text-[#FFA3A6]"
              : "text-[#B1FFC2]"
          }`}
        >
          <span
            className={`${
              percent_change_24h.startsWith("-")
                ? "bg-[#FFA3A6]"
                : "bg-[#B1FFC2]"
            } rounded-full text-black `}
          >
            {percent_change_24h.startsWith("-") ? (
              <ChevronDown size={10} />
            ) : (
              <ChevronUp size={10} />
            )}
          </span>
          <p>{percent_change_24h}%</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoWidgetCard;
