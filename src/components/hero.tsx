import { HashLink as Link } from "react-router-hash-link";
import wwdcLogo from "../assets/2025/hero.svg";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center max-w-2xl mx-auto">
      <img
        src={wwdcLogo}
        alt="wwdc 2025 watch party around india"
        className="w-96 md:w-[480px] lg:w-[850px] h-auto"
      />
      <h3 className="font-black text-3xl md:text-5xl lg:text-6xl text-[#4B2828] italic font-sans">
        June 9
      </h3>
      <div className="h-12" />
      <p className="text-center text-base md:text-base lg:text-lg px-1">
        Join us for the Watch Party Around India in Ahmedabad, Bengaluru,
        Chennai, Delhi, Hyderabad, Kozhikode, Mumbai and Surat! Watch the
        unveiling of the latest Apple platforms, technologies, and tools
        together and discuss. Engage and connect with the developer community of
        India.
      </p>
      <p className="font-bold text-sm md:text-base lg:text-lg">
        Registration is free (Both offline and online).
      </p>
      <div className="h-12" />
      <Link
        to="#register"
        className="font-prompt text-2xl text-white bg-[#4884FF] font-medium px-8 py-2 border-2 border-[#0B2131] shadow-[-3px_3px_0_1px_#0B2131] hover:bg-[#366fd1] transition-colors duration-200"
      >
        Register Now
      </Link>
      <div className="h-24" />
    </main>
  );
};

export default Hero;
