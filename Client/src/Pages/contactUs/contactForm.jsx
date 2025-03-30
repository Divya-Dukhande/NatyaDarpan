import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery } from "../../redux/E-commerce/querySlice";
import { toast } from "react-hot-toast";

const ContactForm = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query) {
            toast.error("Please enter your query!");
            return;
        }

        try {
            await dispatch(submitQuery({ message: query })); // ✅ Corrected Field
            toast.success("Query submitted successfully!");
            setQuery(""); // ✅ Clear Input
        } catch (error) {
            toast.error("Failed to submit query!");
            console.error("Submit Query Error:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 mt-28 border rounded shadow-lg bg-white">
            <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full p-3 border rounded"
                    rows="4"
                    placeholder="Enter your query..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 mt-3 w-full rounded hover:bg-blue-600"
                >
                    Submit Query
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
