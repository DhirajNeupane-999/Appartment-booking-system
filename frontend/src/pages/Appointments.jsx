import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Appointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p>My Appointments</p>
      <div>
        {doctors.slice(0, 2).map((doc, index) => (
          <div key={index}>
            <div>
              <img src={doc.image} alt="" />
            </div>
            <div>
              <p>{doc.name}</p>
              <p>{doc.speciality}</p>
              <p>Address:</p>
              <p>{doc.address.line1}</p>
              <p>{doc.address.line2}</p>
              <p>
                <span>Date & Time:</span> 25, July, 2025 | 08:30 PM
              </p>
            </div>
            <div></div>
            <div>
              <button>Pay Online</button>
              <button>Cancel appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
