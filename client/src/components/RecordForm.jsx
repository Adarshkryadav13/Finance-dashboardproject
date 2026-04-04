import { useState } from "react";
import API from "../api/axios";

export default function RecordForm({ refresh }) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "income",
    description: ""
  });

  const handleSubmit = async () => {
    try {
      await API.post("records/", form);
      alert("Record Added ✅");
      refresh(); // reload table
    } catch (err) {
    console.log(err.response.data);
      alert("Error adding record");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h3 className="mb-3 font-bold">Add Record</h3>

      <input
        placeholder="Amount"
        className="border p-2 mr-2"
        onChange={(e) => setForm({ ...form, amount:Number(e.target.value) })}
      />

      <input
        placeholder="Category"
        className="border p-2 mr-2"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <select
        className="border p-2 mr-2"
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        placeholder="Description"
        className="border p-2 mr-2"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}