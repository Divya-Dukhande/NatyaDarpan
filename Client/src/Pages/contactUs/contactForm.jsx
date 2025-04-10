

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuery } from "../../redux/E-commerce/querySlice";
import { toast } from "react-hot-toast";
import { selectUser, selectUsername } from "../../redux/features/auth/authSlice";

const ContactForm = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const username = useSelector(selectUsername) // ✅ Added

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query) {
            toast.error("Please enter your query!");
            return;
        }
        console.log("Submitting query:", { message: query, username });


        try {
            await dispatch(submitQuery({ message: query, username })); // ✅ Included username
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


// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { submitQuery } from "../../redux/E-commerce/querySlice";
// import { toast } from "react-hot-toast";
// import { selectUsername } from "../../redux/features/auth/authSlice";

// const ContactForm = () => {
//     const dispatch = useDispatch();
//     const [query, setQuery] = useState("");
//     const [responseReceived, setResponseReceived] = useState(false); // Track if response is available
//     const [responseMessage, setResponseMessage] = useState(""); // Store the admin's response
//     const [notificationClicked, setNotificationClicked] = useState(false); // Track if notification is clicked
//     const username = useSelector(selectUsername); // Get the username from Redux

//     // Fetch query response when the username is available
//     useEffect(() => {
//         const fetchQueryResponse = async () => {
//             if (username) {
//                 try {
//                     const res = await fetch(`/queries/query/${username}`);
//                     if (!res.ok) {
//                         throw new Error(`HTTP error! Status: ${res.status}`);
//                     }
//                     const data = await res.json();
//                     console.log("API Response:", data); // Log the response from backend

//                     // If admin has responded, set the states
//                     if (data && data.query && data.query.response) {
//                         setResponseReceived(true);
//                         setResponseMessage(data.query.response);
//                     }
//                 } catch (error) {
//                     console.error("Error fetching query response", error);
//                 }
//             }
//         };

//         fetchQueryResponse(); // Call API on username change
//     }, [username]); // Re-run if username changes

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!query) {
//             toast.error("Please enter your query!");
//             return;
//         }

//         try {
//             await dispatch(submitQuery({ message: query, username }));
//             toast.success("Query submitted successfully!");
//             setQuery(""); // Clear input field
//             setResponseReceived(false); // Reset the response tracking
//         } catch (error) {
//             toast.error("Failed to submit query!");
//             console.error("Submit Query Error:", error);
//         }
//     };

//     // Handle notification click
//     const handleNotificationClick = () => {
//         if (responseReceived) {
//             toast.success("You can now view the admin's response!");
//             setNotificationClicked(true); // Mark notification as clicked
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 mt-28 border rounded shadow-lg bg-white">
//             {/* Notification if admin has responded */}
//             {responseReceived && !notificationClicked && (
//                 <div className="bg-yellow-100 text-yellow-800 p-4 mb-4 rounded">
//                     <span>
//                         Admin has responded to your query!{" "}
//                         <button
//                             className="text-blue-500 underline"
//                             onClick={handleNotificationClick}
//                         >
//                             Click here to view the response.
//                         </button>
//                     </span>
//                 </div>
//             )}

//             <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     className="w-full p-3 border rounded"
//                     rows="4"
//                     placeholder="Enter your query..."
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                 ></textarea>
//                 <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 mt-3 w-full rounded hover:bg-blue-600"
//                 >
//                     Submit Query
//                 </button>
//             </form>

//             {/* Show admin's response after notification click */}
//             {notificationClicked && responseMessage && (
//                 <div className="mt-4 p-4 border rounded bg-gray-100">
//                     <h3 className="text-lg font-semibold">Admin's Response:</h3>
//                     <p>{responseMessage}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ContactForm;

