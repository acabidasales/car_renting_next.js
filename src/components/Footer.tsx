import Image from "next/image";
import Link from "next/link";

import { footer_contents } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.png" alt="logo" width={100} height={18} className="object-contain"/>
          <p className="text-base text-gray-700">
            <b>Car Rental</b>
          </p>
        </div>

        <div className="footer__contents">
          {footer_contents.map((content) => (
            <div key={content.titulo} className="footer__content">
              <h3><b>{content.titulo}</b></h3>
              {content.content.map((item) => (
                <Link
                  key={item.titulo}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.titulo}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer