import { assets } from "../assets/assets_frontend/assets"

const Banner = () => {
  return (
    <div>
        {/* ---------- Left Side ---------- */}
        <div>
            <div>
                <p>Book Appointment</p>
                <p>With 100+ Trusted Doctors</p>
            </div>
            <button>Create Account</button>
        </div>

        {/* ---------- Right Side ---------- */}
        <div>
            <img src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner