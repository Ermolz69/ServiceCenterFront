import React, { useState, useEffect } from "react";
import "./Catalog.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
      <div className="product-card">
        <div className="product-image-container">
          <img
              src={product.image}
              alt={product.name}
              className="product-image"
          />
        </div>

        <h2 className="product-title">{product.name}</h2>

        <div className="buy-block">
          <p className="product-price">{product.price} ₴</p>
          <button className="shopping-cart" onClick={() => onAddToCart(product)}>
          </button>
        </div>

        <div className="product-description">
          <p>
            Пример длинного описания: характеристики, особенности,
            и т.д. Можно расширять при желании.
          </p>
        </div>
      </div>
  );
};


const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      const defaultProducts = [
        { id: 1, name: "Expert PC Ultimate Mega Super Duper Ultra max pentium", price: 35999, image: process.env.PUBLIC_URL + '/Assets/ProductImages/laptop.png' },
        { id: 2, name: "Gaming Laptop", price: 45999, image: process.env.PUBLIC_URL + '/Assets/ProductImages/pc.png' },
        { id: 3, name: "Mechanical Keyboard", price: 4999, image: process.env.PUBLIC_URL + '/Assets/image1.webp' },
        { id: 4, name: "Mechanical Keyboard", price: 4999, image: process.env.PUBLIC_URL + '/Assets/ProductImages/laptop.png' },
        { id: 5, name: "Mechanical Keyboard", price: 4999, image: process.env.PUBLIC_URL + '/Assets/image2.webp' },
        { id: 6, name: "Mechanical Keyboard", price: 4999, image: process.env.PUBLIC_URL + '/Assets/ProductImages/pc.png' },
        { id: 7, name: "Mechanical Keyboard", price: 4999, image: process.env.PUBLIC_URL + '/Assets/image2.webp' },
        { id: 8, name: "Mechanical Keyboard", price: 4999, image: process.env.PUBLIC_URL + '/Assets/ProductImages/laptop.png' },
        { id: 9, name: "Mechanical Keyboard", price: 4999, image: process.env.PUBLIC_URL + '/Assets/ProductImages/pc.png' },
        { id: 10, name: "Wireless Mouse", price: 2999, image: process.env.PUBLIC_URL + '/Assets/ProductImages/pc.png' }
      ];
      setProducts(defaultProducts);
      localStorage.setItem("products", JSON.stringify(defaultProducts));
    }
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handlePurchase = () => {
    if (selectedProduct) {
      alert(`Вы купили ${selectedProduct.name} за ${selectedProduct.price} ₴!`);
      const updatedProducts = products.filter(product => product.id !== selectedProduct.id);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setSelectedProduct(null);
    }
  };

  return (
      <div className="Catalog">
        <div className="catalog-container">
          {products.map((product) => (
              <ProductCard key={product.id} product={product} onClick={handleProductClick} />
          ))}
        </div>
        {selectedProduct && (
            <div className="form-modal">
              <div className="modal-container">
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <p className="modal-description">{selectedProduct.description || "Описание отсутствует"}</p>
                <p className="modal-price">Цена: {selectedProduct.price} ₴</p>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
                <button className="modal-buy-button" onClick={handlePurchase}>Купить</button>
                <button className="modal-close-button" onClick={() => setSelectedProduct(null)}>Закрыть</button>
              </div>
            </div>
        )}
      </div>
  );
};

export default ProductList;
