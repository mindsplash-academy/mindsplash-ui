import GradientHeading from "@/components/GradientHeading";
import Heading from "@/components/Heading";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="w-full mx-auto flex flex-col justify-center items-center py-10 md:py-20 bg-secondary-foreground shadow-[0_-2px_3px_-1px_rgba(0,0,0,0.1)]">
      <section className="flex flex-wrap md:flex-nowrap justify-start md:flex-row xl:w-[70%] gap-10  lg:gap-25 xl:gap-[140px] mb-8 md:mb-24">
        <div className="w-full md:w-auto flex flex-col items-center justify-center md:items-start md:pl-16 lg:px-0 xl:w-fit xl:shrink-0">
          <h1 className="flex gap-2 mb-9">
            <Heading content={"Get In "} />
            <GradientHeading content="Touch" />
          </h1>
          <Image
            src={"/footer_logo.png"}
            alt="mindsplash-footer"
            width={216}
            height={77}
            className="mb-9"
            loading="lazy"
          />
          <p className="text-left text-[15px] leading-[23px] tracking-[0px] text-secondary mb-1">
            Mobile Number
          </p>
          <p className="text-left font-bold text-[22px] leading-[23px] tracking-[0px] text-secondary mb-7.5">
            +91 7075340810
          </p>
          <p className="text-left text-[15px] leading-[23px] tracking-[0px] text-secondary mb-1">
            Email ID
          </p>
          <p className="text-left font-bold text-[22px] leading-[23px] tracking-[0px] text-secondary mb-12">
            reachus@mindsplash.com
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/MindsplashAcademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="flex justify-center items-center h-13 w-13 cursor-pointer border border-[#ECE8F2] rounded-full hover:bg-secondary-foreground transition">
                <Image
                  src={"/fb.svg"}
                  alt="mindsplash-fb"
                  width={11}
                  height={22}
                  loading="lazy"
                />
              </figure>
            </a>
            <a
              // LinkdIn Public profile is not available
              href="mindsplash-academy-7107a441b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="flex justify-center items-center h-13 w-13 cursor-pointer border border-[#ECE8F2] rounded-full hover:bg-secondary-foreground transition">
                <Image
                  src={"/in.svg"}
                  alt="mindsplash-in"
                  width={18}
                  height={18}
                  loading="lazy"
                />
              </figure>
            </a>
            <a
              href="https://x.com/MindsplashA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="flex justify-center items-center h-13 w-13 cursor-pointer border border-[#ECE8F2] rounded-full hover:bg-secondary-foreground transition">
                <Image
                  src={"/x.svg"}
                  alt="mindsplash-x"
                  width={22}
                  height={22}
                  loading="lazy"
                />
              </figure>
            </a>
          </div>
        </div>
        <div className="flex-1 px-8 lg:px-0 xl:max-w-[calc(100%-140px)]">
          <h1 className="pt-2 mb-14 text-left font-bold text-[22px] leading-[23px] tracking-[0px] text-secondary">
            Ask us more about our Programs
          </h1>
          <ContactForm />
          <h2 className="mt-6 mb-5 text-left font-bold text-[22px] leading-[23px] tracking-[0] text-secondary w-fit">
            Explore
          </h2>
          <div className="flex gap-4 md:gap-10 flex-col md:flex-row">
            <a
              href="/about"
              className="text-secondary mb-2 block text-left font-normal text-[18px] leading-[23px] tracking-[0px]"
            >
              About Us
            </a>
            <a
              href="/programs"
              className="text-secondary mb-2 block text-left font-normal text-[18px] leading-[23px] tracking-[0px]"
            >
              Our Programs
            </a
              <a
              href="/contact"
              className="text-secondary mb-2 block text-left font-normal text-[18px] leading-[23px] tracking-[0px]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <section
        className="py-9 px-10 flex flex-wrap justify-around items-start w-[80%] md:w-[70%] bg-gradient-to-r from-gradient-start to-gradient-end rounded-[28px] 
      gap-8 flex-col xl:gap-8 lg:flex-row"
      >
        <div className="space-y-4 not-italic">
          <h2 className="self-center text-left font-bold text-[26px] leading-[25px] tracking-[0px] w-full md:w-auto lg:text-center 2xl:text-left">
            Our Branches
          </h2>
          <p className="text-left font-normal text-base leading-[22px] tracking-[0px] md:max-w-[300px] lg:max-w-full 2xl:max-w-[600px]">
            IB/IGCSE Experts in Hyderabad Serving Financial District, Kokapet &
            Khajaguda
          </p>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row xl:gap-20">
          <address className="space-y-4  not-italic">
            <h3 className="text-left font-bold text-[22px] leading-[23px] tracking-[0px]">
              Khajaguda
            </h3>
            <p className="text-left font-normal text-base leading-[22px] tracking-[0px]">
              4th Floor, Arka Rochish, Khajaguda -<br />
              Nanakramguda Road, Gachibowli,
              <br />
              Hyderabad 500089
            </p>
          </address>
          <address className="space-y-4  not-italic">
            <h3 className="text-left font-bold text-[22px] leading-[23px] tracking-[0px]">
              Kokapet
            </h3>
            <p className="text-left font-normal text-base leading-[22px] tracking-[0px]">
              4th Floor, Raichandani Business Bay,
              <br />
              App.: Rajapushpa Regalia, Kokapet
              <br />
              500075
            </p>
          </address>
          <address className="space-y-4  not-italic">
            <h3 className="text-left font-bold text-[22px] leading-[23px] tracking-[0px]">
              Financial District
            </h3>
            <p className="text-left font-normal text-base leading-[22px] tracking-[0px]">
              Above ICICI Bank - My Home Vihanga
              <br />
              Road, Gachibowli, Hyderabad 500032
            </p>
          </address>
        </div>
      </section>
    </footer>
  );
}
