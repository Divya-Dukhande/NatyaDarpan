import axios from "axios";

const UserCancelButton = ({ orderId }) => {
    const handleCancel = async () => {
        try {
            const res = await axios.put(`/api/orders/cancel/${orderId}`);
            alert(res.data.message);
            window.location.reload(); // You can also dispatch fetchUserOrders again
        } catch (err) {
            alert(err.response?.data?.message || "Error cancelling");
        }
    };

    return (
        <button onClick={handleCancel} className="btn btn-danger mt-2">
            Cancel Order
        </button>
    );
};

export default UserCancelButton;
