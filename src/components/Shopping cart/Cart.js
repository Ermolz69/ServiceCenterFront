import React, { useState, useEffect } from "react";
import "./Cart.css";
import { createOrder } from "../../services/orderService";
import FloatingLabelInput from "../Repair/FloatingLabelInput";
import {useNavigate} from "react-router-dom";

const PaymentMethodEnum = {
    Cash: 1,
    Card: 2,
    PayPal: 3,
};

function Cart() {
    const navigate = useNavigate();

    const [items, setItems] = useState(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        return storedCart ? storedCart : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");

    const [customerName, setCustomerName] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [email, setEmail] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Cash");
    const [comments, setComments] = useState("");

    const handleIncrement = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = 10000;
    const total = subtotal + tax;

    const handleCheckout = () => {
        setShowCheckoutModal(true);
    };

    const closeModal = () => {
        setShowCheckoutModal(false);
    };

    const handleSubmitOrder = async (e) => {
        e.preventDefault();

        const paymentMethodValue = PaymentMethodEnum[paymentMethod] || 1;

        const orderData = {
            customerName,
            contactPhone,
            email,
            deliveryAddress,
            paymentMethod: paymentMethodValue,
            comments,
            status: 0,
            orderItems: items.map((item) => ({
                productId: item.id,
                quantity: item.quantity,
                price: item.price,
            })),
        };

        try {
            const response = await createOrder(orderData);
            setSuccessMessage("Order successfully created!");
            console.log("Created order:", response);

            setItems([]);
            localStorage.removeItem("cart");

            setCustomerName("");
            setContactPhone("");
            setEmail("");
            setDeliveryAddress("");
            setPaymentMethod("Cash");
            setComments("");

            setShowCheckoutModal(false);

            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            alert("Error creating order");
            console.error(error);
        }
    };

    const handleOpenCatalog = (e, item) => {
        e.preventDefault();
        navigate(`/catalog/${item.id}`);
    };

    return (
        <div className="cart-container">
            {successMessage && (
                <div className="toast-success">
                    <span>{successMessage}</span>
                    <button className="toast-close" onClick={() => setSuccessMessage("")}>
                        &times;
                    </button>
                </div>
            )}

            <div className="cart-items">
                {items.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img
                            src={item.imageBase64 || item.image}
                            alt={item.name}
                            className="cart-item-image"
                        />
                        <div className="cart-item-info">
                            <p className="item-name">{item.name}</p>
                            <a
                                href="#"
                                className="open-catalog"
                                onClick={(e) => handleOpenCatalog(e, item)}
                            >
                                open in catalog
                            </a>
                        </div>
                        <div className="cart-quantity">
                            <button className="qty-btn" onClick={() => handleDecrement(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button className="qty-btn" onClick={() => handleIncrement(item.id)}>+</button>
                        </div>
                        <p className="cart-item-price">{item.price}₴</p>
                        <button className="remove-btn" onClick={() => handleRemove(item.id)}>×</button>
                    </div>
                ))}
            </div>

            <div className="order-summary">
                <h3>Order summary</h3>
                <p>
                    Subtotal: <span>{subtotal}₴</span>
                </p>
                <p>
                    Tax: <span>{tax}₴</span>
                </p>
                <p>
                    Total: <span>{total}₴</span>
                </p>
                <button className="checkout-btn" onClick={handleCheckout}>
                    CHECKOUT
                </button>
            </div>

            {showCheckoutModal && (
                <div className="checkout-modal" onClick={closeModal}>
                    <div className="checkout-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Create an order</h2>
                        <form className="checkout-form" onSubmit={handleSubmitOrder}>
                            <FloatingLabelInput
                                label="Full name"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                            />

                            <FloatingLabelInput
                                label="Phone"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />

                            <FloatingLabelInput
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <FloatingLabelInput
                                label="Address"
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
                            />

                            <label className="checkout-label">
                                Payment method:
                                <select
                                    className="checkout-input"
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                                    <option value="Cash">Cash</option>
                                    <option value="Card">Card</option>
                                    <option value="PayPal">PayPal</option>
                                </select>
                            </label>

                            <label className="checkout-label">
                                Comments:
                                <textarea
                                    className="checkout-input"
                                    rows="3"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                />
                            </label>

                            <div className="checkout-buttons">
                                <button type="submit" className="checkout-submit">
                                    Create
                                </button>
                                <button
                                    type="button"
                                    className="checkout-cancel"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
