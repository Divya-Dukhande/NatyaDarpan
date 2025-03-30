import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueries } from "../../redux/features/queries/querySlice";
import { toast } from "react-hot-toast";

const UserQueries = () => {
    const dispatch = useDispatch();
    const { queries } = useSelector((state) => state.queries);

    useEffect(() => {
        dispatch(fetchQueries());
    }, [dispatch]);

    useEffect(() => {
        queries.forEach((query) => {
            if (query.response) {
                toast.success("Admin has responded to your query!");
            }
        });
    }, [queries]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Your Queries</h2>
            {queries.map((query) => (
                <div key={query._id} className="border p-3 mb-3 rounded">
                    <p><strong>Your Query:</strong> {query.message}</p>
                    <p><strong>Admin Response:</strong> {query.response || "Waiting for response..."}</p>
                </div>
            ))}
        </div>
    );
};

export default UserQueries;
