import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import RecordForm from "../components/RecordForm";
import RecordTable from "../components/RecordTable";

export default function Records() {
  const [records, setRecords] = useState([]);

  const fetchRecords = () => {
    API.get("records/")
      .then(res => setRecords(res.data));
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-6">
        <RecordForm refresh={fetchRecords} />
        <RecordTable records={records} refresh={fetchRecords} />
      </div>
    </div>
  );
}