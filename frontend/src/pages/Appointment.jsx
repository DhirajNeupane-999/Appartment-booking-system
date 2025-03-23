import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null);

  const fetchDoc = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo);
  }

  useEffect(()=>{
    fetchDoc();
  },[doctors,docId])

  return (
    <div>Appointment</div>
  )
}

export default Appointment