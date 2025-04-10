
import { useDispatch, useSelector } from "react-redux";
import { fetchQueries, respondToQuery } from "../../redux/E-commerce/querySlice";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

const AdminQueries = () => {
    const dispatch = useDispatch();
    const { queries, loading } = useSelector((state) => state.queries);
    const [responseText, setResponseText] = useState({});

    useEffect(() => {
        dispatch(fetchQueries());
    }, [dispatch]);

    const handleResponse = (id) => {
        if (!responseText[id]) {
            toast.error("Response cannot be empty!");
            return;
        }
        dispatch(respondToQuery({ id, response: responseText[id] })).then(() => {
            toast.success("Response sent successfully!");
            setResponseText({ ...responseText, [id]: "" });
        });
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">User Queries</h2>

            {loading && <p>Loading queries...</p>}

            {!loading && (!Array.isArray(queries) || queries.length === 0) && (
                <p className="text-gray-600 italic">No queries available yet.</p>
            )}

            {!loading && Array.isArray(queries) && queries.map((query) => (
                <div key={query._id} className="border p-3 mb-3 rounded">
                    <p><strong>Username:</strong> {query.username}</p>
                    <p><strong>User Query:</strong> {query.message}</p>
                    <p><strong>Response:</strong> {query.response || "No response yet"}</p>
                    <textarea
                        className="w-full p-2 border rounded mt-2"
                        rows="2"
                        placeholder="Enter response..."
                        value={responseText[query._id] || ""}
                        onChange={(e) =>
                            setResponseText({ ...responseText, [query._id]: e.target.value })
                        }
                    ></textarea>
                    <button
                        onClick={() => handleResponse(query._id)}
                        className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600"
                    >
                        Send Response
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AdminQueries;
