import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const SeventhSectionCard = ({ id, title, description, image }: Props) => {
  return (
    <Card className={`max-w-[365px] m-auto w-full p-4 md:p-8 border-none rounded-none shadow-none relative ${(id === 1 || id === 2) && 'xl:pb-6'} ${(id === 3 || id === 4) && 'xl:pt-6'} ${(id === 1 || id === 3) && 'xl:pr-36'} ${(id === 2 || id === 4 )&& 'xl:pl-16 xl:pr-24'}`}>
        {id === 1 && <span className="cross hidden md:block absolute bg-[#D51820] right-0 bottom-0 w-[3px] h-[3px] rounded-full">.</span>}
      <CardHeader className="p-0 items-center md:items-start">
        <Image src={image} alt={title} width={50} height={50} className="mb-4"/>
        <CardTitle className="text-[19px] font-bold text-center lg:text-left">
          {title}
        </CardTitle>
      </CardHeader>
      <CardDescription
        className={`text-center md:text-left text-sm mt-4`}
      >
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </CardDescription>
    </Card>
  );
};

export default SeventhSectionCard;
