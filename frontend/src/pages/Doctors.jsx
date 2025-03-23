import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  const { slug } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (slug) {
      setFilterDoc(
        doctors.filter(
          (doc) =>
            doc.speciality.toLowerCase().replace(/\s+/g, "-") ===
            slug.toLowerCase()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, slug]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              slug === "general-physician"
                ? navigate("/doctors")
                : navigate("/doctors/general-physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              slug === "general-physician" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              slug === "gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              slug === "gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              slug === "dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              slug === "dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              slug === "pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              slug === "pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              slug === "neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              slug === "neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              slug === "gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/gastroenterologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              slug === "gastroenterologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {filterDoc.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
