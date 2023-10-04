import Image from "next/image";
import Link from "next/link";
import PageLayout from "./PageLayout";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white min-h-[40vh]">
      <PageLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 gap-5">
          <div className="max-w-[350px]">
            <h4 className="flex items-center text-xl mb-4">
              <div className="text-2xl font-bold">
                Design<span className="text-[#F55F1D]">AGENCY</span>
              </div>
            </h4>
            <p className="mb-2">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className="flex gap-5 mt-3 mb-10">
              {/*  */}
              <button className="h-10 w-10 text-white bg-green-600 hover:bg-white hover:text-black rounded-full flex items-center justify-center">
                <BiLogoFacebook size={20} />
              </button>
              <button className="h-10 w-10 text-white bg-green-600 hover:bg-white hover:text-black rounded-full flex items-center justify-center">
                <BiLogoTwitter size={20} />
              </button>
              <button className="h-10 w-10 text-white bg-green-600 hover:bg-white hover:text-black rounded-full flex items-center justify-center">
                <BiLogoLinkedin size={20} />
              </button>
              <button className="h-10 w-10 text-white bg-green-600 hover:bg-white hover:text-black rounded-full flex items-center justify-center">
                <BiLogoInstagram size={20} />
              </button>
            </div>
          </div>
          <div className="list-none ">
            <h2 className="font-semibold text-2xl">Quick Links</h2>
            <li className="mt-5">
              <Link href="/" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="text-gray-400 hover:text-white">
                Portfolio
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
          </div>
          <div className="list-none md-mt-10">
            <h2 className="mb-5 font-semibold text-2xl">Address</h2>
            <div className="text-gray-200">
              <li>Design Agency Head Office.</li>
              <li>Airport Road</li>
              <li>United Arab Emirate</li>
            </div>
          </div>
        </div>
        <footer>
          <p className="text-[14px] mt-5">Copyright Design Agency 2023</p>
        </footer>
      </PageLayout>
    </div>
  );
};

export default Footer;
