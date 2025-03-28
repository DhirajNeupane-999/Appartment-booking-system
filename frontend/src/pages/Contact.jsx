import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 uppercase">
        <p>
          Contact <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div>
        <img src={assets.contact_image} alt="" />
        <div>
          <p>Our Office</p>
          <p>Mirpur 10, Dhaka<br />Bangladesh</p>
          <p>Email: mahmudalam.official@gmail.com</p>
          <p>Careers at Prescripto</p>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
