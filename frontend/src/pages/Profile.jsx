import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Md Mahmud Alam",
    image: assets.profile_pic,
    email: "mahmudalam.official@gmail.com",
    phone: "+880 1234-567890",
    address: {
      line1: "Mirpur 10",
      line2: "Dhaka, Bangladesh",
    },
    gender: "Male",
    dob: "2001-10-02",
    bloodGroup: "O+",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          onChange={(e) =>
            setUserData(prev => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
          type="text"
        />
      ) : (
        <p>{userData.name}</p>
      )}
    </div>
  );
};

export default Profile;
