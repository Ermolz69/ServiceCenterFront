import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Catalog.css";
import { getAllProducts } from "../../services/productService";

const ProductCard = ({ product, onSelect, onAddToCart }) => {
    return (
        <div className="product-card" onClick={() => onSelect(product)}>
            <div className="product-image-container">
                <img
                    src={product.photoBase64 || product.image}
                    alt={product.name}
                    className="product-image"
                />
            </div>
            <h2 className="product-title">{product.name}</h2>
            <div className="buy-block">
                <p className="product-price">{product.price} ₴</p>
                <button
                    className="shopping-cart"
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product, 1);
                    }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/Assets/buy-cart.svg`}
                        alt="Shopping Cart"
                    />
                </button>
            </div>
            <div className="product-description">
                <p>{product.shortDescription || "Description is missing"}</p>
            </div>
        </div>
    );
};

const ProductList = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (id && products.length > 0) {
            const found = products.find((p) => p.id.toString() === id.toString());
            if (found) {
                setSelectedProduct(found);
                setQuantity(1);
            }
        }
    }, [id, products]);

    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => setMessage(""), 3000);
    };

    const addToCart = (product, qty) => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        const existingIndex = cartData.findIndex((item) => item.id === product.id);
        const base64String = product.photoBase64 || product.image;

        if (existingIndex !== -1) {
            cartData[existingIndex].quantity += qty;
        } else {
            cartData.push({
                ...product,
                quantity: qty,
                imageBase64: base64String,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cartData));
        showMessage(`Product "${product.name}" was added to the cart!`);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setQuantity(1);
        navigate(`/catalog/${product.id}`);
    };

    const handlePurchase = () => {
        if (selectedProduct) {
            addToCart(selectedProduct, quantity);
            showMessage(`Added to cart: ${selectedProduct.name} (x${quantity})`);
            setSelectedProduct(null);
            navigate("/catalog");
        }
    };

    const handleModalOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setSelectedProduct(null);
            navigate("/catalog");
        }
    };

    return (
        <div className="Catalog">
            {message && (
                <div className="catalog-message">
                    {message}
                    <button className="message-close" onClick={() => setMessage("")}>
                        &times;
                    </button>
                </div>
            )}

            <div className="catalog-container">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={handleProductClick}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>

            {selectedProduct && (
                <div className="form-modal" onClick={handleModalOverlayClick}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <h2 className="modal-title">{selectedProduct.name}</h2>
                        <p className="modal-description">
                            {selectedProduct.description || "Description is missing"}
                        </p>
                        <p className="modal-price">Price: {selectedProduct.price} ₴</p>
                        <img
                            src={selectedProduct.photoBase64 || selectedProduct.image}
                            alt={selectedProduct.name}
                            className="modal-image"
                        />
                        <div className="quantity-block">
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                id="quantity"
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            />
                        </div>
                        <button className="modal-buy-button" onClick={handlePurchase}>
                            Buy
                        </button>
                        <button
                            className="modal-close-button"
                            onClick={() => {
                                setSelectedProduct(null);
                                navigate("/catalog");
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
