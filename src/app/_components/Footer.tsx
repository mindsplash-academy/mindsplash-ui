import GradientHeading from "@/components/GradientHeading";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full mx-auto flex flex-col justify-center items-center py-10 md:py-20 bg-secondary-foreground shadow-[0_-2px_3px_-1px_rgba(0,0,0,0.1)]">
      <section className="flex flex-col lg:flex-row justify-between w-full px-6 lg:px-0 lg:w-[90%] xl:w-[85%] 2xl:w-[75%] gap-12 lg:gap-16 mb-12 md:mb-16 mt-8 mx-auto">
        
        {/* Left Side: Info & Links */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 lg:w-[55%] xl:w-[60%] justify-between">
          
          {/* Company Info */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <h1 className="flex gap-2 mb-6">
              <Heading content={"Get In "} />
              <GradientHeading content="Touch" />
            </h1>

            <Image
              src="/footer_logo.png"
              alt="mindsplash-footer"
              width={216}
              height={77}
              className="mb-6"
              loading="lazy"
            />

            <p className="text-left text-[15px] leading-[23px] tracking-[0px] text-secondary mb-1">
              Mobile Number
            </p>

            <a href="tel:+917075340810" className="text-left font-bold text-[22px] leading-[23px] tracking-[0px] text-secondary mb-5 hover:text-gradient-start transition-colors block">
              +91 7075340810
            </a>

            <p className="text-left text-[15px] leading-[23px] tracking-[0px] text-secondary mb-1">
              Email ID
            </p>

            <a href="mailto:reachus@mindsplash.com" className="text-left font-bold text-[22px] leading-[23px] tracking-[0px] text-secondary mb-8 hover:text-gradient-start transition-colors block">
              reachus@mindsplash.com
            </a>

            <div className="flex gap-3">
              <a href="https://www.facebook.com/MindsplashAcademy" target="_blank" rel="noopener noreferrer">
                <figure className="flex justify-center items-center h-13 w-13 cursor-pointer border border-[#ECE8F2] rounded-full hover:bg-secondary-foreground transition text-secondary">
                  <Image src="/fb.svg" alt="Facebook" width={11} height={22} style={{ width: "auto", height: "auto" }} loading="lazy" />
                </figure>
              </a>

              <a href="https://x.com/MindsplashA" target="_blank" rel="noopener noreferrer">
                <figure className="flex justify-center items-center h-13 w-13 cursor-pointer border border-[#ECE8F2] rounded-full hover:bg-secondary-foreground transition text-secondary">
                  <Image src="/x.svg" alt="X" width={22} height={22} style={{ width: "auto", height: "auto" }} loading="lazy" />
                </figure>
              </a>

              <a href="https://www.instagram.com/mind_splash_academy?stkn=MWxhaXVybGFhamRobQ==" target="_blank" rel="noopener noreferrer">
                <figure className="flex justify-center items-center h-13 w-13 cursor-pointer border border-[#ECE8F2] rounded-full hover:bg-secondary-foreground hover:text-gradient-start transition text-secondary">
                  <Instagram className="w-5 h-5" />
                </figure>
              </a>

              <a href="https://youtube.com/@mindsplashacademy?si=qjWcejzks2hxO8yv" target="_blank" rel="noopener noreferrer">
                <figure className="flex justify-center items-center h-13 w-13 cursor-pointer border border-[#ECE8F2] rounded-full hover:bg-secondary-foreground hover:text-gradient-start transition text-secondary">
                  <Youtube className="w-5 h-5" />
                </figure>
              </a>
            </div>
          </div>

          {/* Links: Explore & Centres */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 w-full md:w-auto mt-2">
            <div className="flex flex-col items-start shrink-0">
              <h2 className="mb-6 text-left font-bold text-[22px] leading-[23px] tracking-[0] text-secondary">
                Explore
              </h2>
              <div className="flex flex-col gap-4">
                <Link href="/about" className="text-secondary hover:text-gradient-start text-left font-normal text-[18px] transition-colors">About Us</Link>
                <Link href="/programs" className="text-secondary hover:text-gradient-start text-left font-normal text-[18px] transition-colors">Our Programs</Link>
                <Link href="/blog" className="text-secondary hover:text-gradient-start text-left font-normal text-[18px] transition-colors">Blog</Link>
                <Link href="/contact" className="text-secondary hover:text-gradient-start text-left font-normal text-[18px] transition-colors">Contact Us</Link>
              </div>
            </div>
            
            <div className="flex flex-col items-start shrink-0">
              <h2 className="mb-6 text-left font-bold text-[22px] leading-[23px] tracking-[0] text-secondary">
                Our Centres
              </h2>
              <div className="flex flex-col gap-4">
                <Link href="/branches/khajaguda" className="text-secondary hover:text-gradient-start text-left font-normal text-[18px] transition-colors">Khajaguda</Link>
                <Link href="/branches/kokapet" className="text-secondary hover:text-gradient-start text-left font-normal text-[18px] transition-colors">Kokapet</Link>
                <Link href="/branches/financialdistrict" className="text-secondary hover:text-gradient-start text-left font-normal text-[18px] transition-colors">Financial District</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-[45%] xl:w-[40%] bg-white/40 p-6 sm:p-8 rounded-[24px] shadow-sm border border-card-border/50 shrink-0 mt-2 lg:mt-0">
          <h1 className="mb-8 text-left font-bold text-[22px] leading-[23px] tracking-[0px] text-secondary border-b border-card-border/60 pb-4">
            Ask us more about our Programs
          </h1>
          <ContactForm />
        </div>

      </section>

      {/* Branches */}
      <section
        className="py-9 px-10 flex flex-wrap justify-around items-start w-[80%] md:w-[70%] bg-gradient-to-r from-gradient-start to-gradient-end rounded-[28px] gap-8 flex-col xl:gap-8 lg:flex-row"
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
          <address className="space-y-4 not-italic">
            <h3 className="text-left font-bold text-[22px] leading-[23px] tracking-[0px]">
              Khajaguda
            </h3>

            <p className="text-left font-normal text-base leading-[22px] tracking-[0px]">
              4th Floor, Arka Rochish, Khajaguda -
              <br />
              Nanakramguda Road, Gachibowli,
              <br />
              Hyderabad 500089
            </p>
          </address>

          <address className="space-y-4 not-italic">
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

          <address className="space-y-4 not-italic">
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
