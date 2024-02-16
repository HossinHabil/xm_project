import React from "react";
import Image from "next/image";
import Link from "next/link";

import MaxWidthWithWrapper from "./MaxWidthWrapper";

const HeaderBar = () => {
  return (
    <header className="relative bg-black p-6 flex justify-center items-center">
      <MaxWidthWithWrapper>
        <nav className="flex justify-center xl:justify-between items-center relative z-30">
          <Link
            href="/"
            className="w-40 h-12 relative flex items-center"
          >
            <Image
              src="/images/xm_logo.png"
              alt="xm_logo"
              fill
              priority={true}
              sizes="(min-width: 1040px) 224px, (min-width: 400px) 160px, calc(18.75vw + 89px)"
            />
          </Link>
          <div className="xl:flex gap-8 items-center hidden">
            <Link href="/" className="text-white">
              XM Homepage
            </Link>
            <Link href="/" className="text-white">
              Support
            </Link>
          </div>
        </nav>
      </MaxWidthWithWrapper>
    </header>
  );
};

export default HeaderBar;
