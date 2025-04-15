import React, { useEffect, useState } from 'react';
import client from '../../lib/axios'; // 👈 your custom axios instance
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/auth/authSlice';

const Notifications = () => {
    const user = useSelector(selectUser); // Get current user
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    console.log(user.username)

    useEffect(() => {
        const fetchUserQueries = async () => {
            try {
                const response = await client.post("/queries/user", {
                    username: user?.username,
                });

                setQueries(response.data);
            } catch (err) {
                console.error("Error fetching user queries:", err);
                setError("Failed to fetch notifications.");
            } finally {
                setLoading(false);
            }
        };

        if (user?.username) {
            fetchUserQueries();
        }
    }, [user?.username]);

    return (
        <div className="p-6 max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-4">Your Notifications</h2>

            {loading && <p>Loading your notifications...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && queries.length === 0 && (
                <p className="text-gray-600 italic">No queries submitted yet.</p>
            )}

            {!loading && queries.map((query) => (
                <div key={query._id} className="bg-white shadow-md border rounded p-4 mb-4">
                    <p className="mb-2"><strong>Your Query:</strong> {query.message}</p>
                    <p className="mb-2">
                        <strong>Admin Response:</strong>{' '}
                        {query.response ? (
                            <span className="text-green-600">{query.response}</span>
                        ) : (
                            <span className="text-yellow-500 italic">Pending response</span>
                        )}
                    </p>
                    <p className="text-sm text-gray-500">
                        Submitted on: {new Date(query.createdAt).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Notifications;
