import { useEffect, useState } from "react";
import API from "../api/axios";
import Card from "../components/Card";
import Charts from "../components/Charts";


export default function Dashboard() {
  const [summary, setSummary] = useState({});
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    API.get("dashboard/summary/").then(res => setSummary(res.data));
    API.get("dashboard/category/").then(res => setCategoryData(res.data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      

      <div className="p-6">

        {/* Cards */}
        <div className="flex gap-6">
          <Card title="Total Income" value={summary.total_income} />
          <Card title="Total Expense" value={summary.total_expense} />
          <Card title="Net Balance" value={summary.net_balance} />
        </div>

        {/* Charts */}
        <Charts categoryData={categoryData} />

      </div>
    
    </div>
  );
}