import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto Is Committed To Excellence In Healthcare Technology. We
            Continuously Strive To Enhance Our Platform, Integrating The Latest
            Advancements To Improve User Experience And Deliver Superior
            Service. Whether You're booking Your First Appointment Or Managing
            ongoing care, Prescripto is Here To Support You Every Step Of The
            Way
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our Vision At Prescripto Is to A seamless Healthcare Experience for
            Every User. We Aim To Bridge The Gap between Patients And Healthcare
            providers, making it easier for fou to access The Care You Need,
            When you need it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
