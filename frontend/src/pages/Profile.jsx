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
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
          type="text"
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email Id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
              type="text"
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {
            isEdit ? <p>
              <input onChange={e => setUserData(prev => ({...prev, address:{...prev.address, line1:e.target.value}}))} value={userData.address.line1} type="text" />
              <br />
              <input onChange={e => setUserData(prev => ({...prev, address:{...prev.address, line2:e.target.value}}))} value={userData.address.line2} type="text" />
            </p>
            : <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
