import React from "react";
import UserCancelButton from "./UserCancelButton.jsx";

const OrderCard = ({ order }) => {
    return (
        <div className="border p-4 rounded mb-4">
            <h3>Order #{order._id}</h3>
            <p>Status: {order.status}</p>
            <p>Total: ₹{order.totalPrice}</p>
            <p>Payment: {order.paymentMethod}</p>
            <div>
                {order.products.map((item, i) => (
                    <div key={i}>
                        <p>{item.product.name} - Qty: {item.quantity}</p>
                    </div>
                ))}
            </div>
            <div>
                <p><strong>Address:</strong> {order.address.street}, {order.address.city}, {order.address.state} - {order.address.pincode}</p>
            </div>

            {order.status === "Pending" && <UserCancelButton orderId={order._id} />}
        </div>
    );
};

export default OrderCard;
