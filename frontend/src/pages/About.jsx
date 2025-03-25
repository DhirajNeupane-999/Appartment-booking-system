import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div>
        <p>
          ABOUT <span>US</span>
        </p>
      </div>

      <div>
        <img src={assets.about_image} alt="" />
        <div>
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            sheduling doctor appointments and managing their health records.
          </p>
          <p></p>
          <b>Our Vision</b>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
