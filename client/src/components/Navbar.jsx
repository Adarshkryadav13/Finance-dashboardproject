import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");// check login
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const goToRecords = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("⚠️ Please login first!");
      navigate("/");
    } else {
      navigate("/records");
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-950 text-white">
      <h2 className="text-xl font-bold">Zorvyn Finance Portal</h2>
      <div className="flex gap-4">
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={goToRecords}>Records</button>
      </div>

      {/* Only show if logged in */}
      {token ? (
        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      ) : null}
    </div>
  );
}