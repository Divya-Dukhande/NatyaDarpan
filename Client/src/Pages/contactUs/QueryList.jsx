import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueries } from "../../redux/E-commerce/querySlice";

const QueryList = () => {
    const dispatch = useDispatch();
    const { queries, loading, error } = useSelector(state => state.queries);

    useEffect(() => {
        dispatch(fetchQueries());
    }, [dispatch]);

    if (loading) return <p>Loading queries...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">User Queries</h2>
            {queries.length === 0 ? (
                <p>No queries submitted yet.</p>
            ) : (
                queries.map((query) => (
                    <div key={query._id} className="border p-4 rounded mb-4 bg-gray-100">
                        <p><strong>From:</strong> {query.username}</p>
                        <p><strong>Query:</strong> {query.message}</p>
                        {query.response ? (
                            <p className="text-green-600 mt-2">
                                <strong>Admin's Reply:</strong> {query.response}
                            </p>
                        ) : (
                            <p className="text-gray-500 mt-2">Waiting for admin's response...</p>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default QueryList;
