import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import MaxWidthWithWrapper from "@/components/MaxWidthWrapper";

import { FooterImages, FooterSocialIcons, LegalLinks } from "@/static";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <MaxWidthWithWrapper className="md:px-10 xl:px-20">
        {/* First Section */}
        <section className="flex-col lg:flex-row justify-between items-center hidden lg:flex">
          <div className="flex items-center gap-x-6 lg:gap-x-12">
            {FooterImages.map((image) => (
              <div
                key={image.id}
                className={`h-16 w-28 xl:w-36 ${image.id === 4 && ('w-40 xl:w-48')} flex flex-col items-center justify-center`}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  width={image.id === 4 ? 200 : image.id === 3 ? 120 : 130}
                  height={image.id === 4 ? 200 : image.id === 3 ? 120 : 130}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-6">
            <p className="text-[#888888]">Follow us on</p>
            <div className="flex items-center gap-x-6">
              {FooterSocialIcons.map((icon) => (
                <div
                  key={icon.id}
                  className="h-8 flex flex-col items-center justify-center"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.title}
                    width={icon.id === 1 ? 10 : 15}
                    height={icon.id === 1 ? 10 : 15}
                    className="object-cover cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
                <Separator className="mb-4 mt-8 bg-[#444444] hidden lg:block"/>
        {/* Second Section */}
        <section className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-x-2 mb-8 md:mb-0">
                {LegalLinks.map((link) => (
                    <Link href={link.link} key={link.id} className={`text-xs text-[#888888] ${link.id === 3 ? '' : 'pr-[8px] border-r-[1px] border-r-[#888888]'}`}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <div>
                <Image src="/images/footer/trading_point.svg" alt="payment" width={200} height={40} />
            </div>
        </section>
      </MaxWidthWithWrapper>
    </footer>
  );
};

export default Footer;
