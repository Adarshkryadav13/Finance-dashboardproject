export default function Card({ title, value }) {
    return (
      <div className="bg-white shadow-md rounded-2xl p-4 w-60">
        <h4 className="text-gray-500">{title}</h4>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
    );
  }