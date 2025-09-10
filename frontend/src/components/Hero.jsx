import { assets } from "../assets/assets_frontend/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20">
      {/* ---------- left side ---------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center absolute left-120 top-70 gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] z-100">
        <p className="text-3xl md:text-3xl lg:text-2xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-black text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="Group profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="group flex items-center gap-2 bg-primary px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img
            className="w-3 transition-transform duration-300 group-hover:translate-x-2"
            src={assets.arrow_icon}
            alt="Arrow icon"
          />
        </a>
      </div>

      {/* ---------- right side ---------- */}
      <div className="md:w-1/2 absolute top-180 left-110">
        <video
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
