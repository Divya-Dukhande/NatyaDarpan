import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUser, FaBars, FaSignOutAlt, FaEnvelope } from "react-icons/fa";
import UserManagement from "../../Components/Admin/UserManagement";
import ProductManagement from "../../Components/Admin/ProductManagement";
import AdminQueries from "./AdminQueries";
import { selectUser, logout } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("user");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const menuItems = [
        { key: "user", label: "User", icon: <FaUser /> },
        { key: "product", label: "Product", icon: <FaUser /> },
        {key: "queries", label: "Queries", icon: <FaEnvelope />}
        // Add more menu items as needed
    ];

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("authToken");
        localStorage.removeItem("adminId");
        navigate("/login");
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`bg-gray-100 border-r w-64 p-4 space-y-4 transition-all ${isSidebarOpen ? "block" : "hidden"} md:block`}>
                <h2 className="text-2xl font-semibold text-center">Admin Dashboard</h2>
                <nav className="space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setActiveTab(item.key)}
                            className={`flex items-center space-x-2 p-2 rounded w-full transition ${activeTab === item.key ? "bg-blue-600 text-white" : "hover:bg-blue-100"
                                }`}
                        >
                            {item.icon} <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 p-2 rounded w-full transition bg-red-600 text-white mt-6 hover:bg-red-700"
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Toggle Button for Mobile View */}
                <button className="md:hidden p-2 bg-gray-200 rounded-full" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <FaBars size={24} />
                </button>

                {/* Dynamic Content */}
                <div className="mt-4">
                    {activeTab === "user" && <UserManagement />}
                    {activeTab === "product" && <ProductManagement />} 
                    {activeTab === "queries" && <AdminQueries />} 
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
