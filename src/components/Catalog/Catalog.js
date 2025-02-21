import React, { useState, useEffect } from "react";
import "./Catalog.css";
import { getAllProducts } from "../../services/productService";

const ProductCard = ({ product, onSelect }) => {
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
          <button className="shopping-cart" onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}>
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error while fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handlePurchase = () => {
    if (selectedProduct) {
      alert(`You bought ${selectedProduct.name} for ${selectedProduct.price} ₴!`);

      const updatedProducts = products.filter(
          (product) => product.id !== selectedProduct.id
      );
      setProducts(updatedProducts);
      setSelectedProduct(null);
    }
  };

  return (
      <div className="Catalog">
        <div className="catalog-container">
          {products.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={handleProductClick} />
          ))}
        </div>
        {selectedProduct && (
            <div className="form-modal">
              <div className="modal-container">
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <p className="modal-description">
                  {selectedProduct.description || "Description is missing"}
                </p>
                <p className="modal-price">Цена: {selectedProduct.price} ₴</p>
                <img
                    src={selectedProduct.photoBase64 || selectedProduct.image}
                    alt={selectedProduct.name}
                    className="modal-image"
                />
                <button className="modal-buy-button" onClick={handlePurchase}>
                  Купить
                </button>
                <button className="modal-close-button" onClick={() => setSelectedProduct(null)}>
                  Закрыть
                </button>
              </div>
            </div>
        )}
      </div>
  );
};

export default ProductList;
