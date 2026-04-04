import API from "../api/axios";

export default function RecordTable({records, refresh}){
    const handleDelete = async(id) => {
        await API.delete(`records/${id}/`);
        refresh();
    };
    return(
        <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
        {records.map((r) => (
            <tr key={r.id} className="text-center border-t"> 
            <td>{r.amount}</td>
            <td>{r.category}</td>
            <td>{r.type}</td>
            <td>{r.description}</td>
            <td>
            <button
                onClick={() => handleDelete(r.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
            </tr>
        ))}
        </tbody>
        </table>
    );
}