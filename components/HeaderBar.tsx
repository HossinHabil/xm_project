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
          >
            <Image
              src="/images/xm_logo.svg"
              alt="xm_logo"
              priority={true}
              width={150}
              height={150}
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
