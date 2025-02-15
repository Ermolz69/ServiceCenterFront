import { useState, useEffect } from 'react';
import './Catalog.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      const defaultProducts = [
        { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 999, image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Smartphone', description: 'Latest model smartphone', price: 699, image: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 199, image: 'https://via.placeholder.com/100' },
        { id: 4, name: 'Tablet', description: 'Lightweight and powerful tablet', price: 499, image: 'https://via.placeholder.com/100' },
        { id: 5, name: 'Smartwatch', description: 'Advanced fitness smartwatch', price: 299, image: 'https://via.placeholder.com/100' },
        { id: 6, name: 'Gaming Mouse', description: 'High precision gaming mouse', price: 79, image: 'https://via.placeholder.com/100' },
        { id: 7, name: 'Mechanical Keyboard', description: 'RGB backlit mechanical keyboard', price: 129, image: 'https://via.placeholder.com/100' },
        { id: 8, name: 'Monitor', description: '4K UHD Monitor', price: 399, image: 'https://via.placeholder.com/100' },
        { id: 9, name: 'External SSD', description: '1TB fast external SSD', price: 159, image: 'https://via.placeholder.com/100' },
        { id: 10, name: 'Wireless Charger', description: 'Fast wireless charging pad', price: 49, image: 'https://via.placeholder.com/100' }
      ];
      setProducts(defaultProducts);
      localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handlePurchase = () => {
    if (selectedProduct) {
      alert(`Вы купили ${selectedProduct.name} за $${selectedProduct.price}!`);
      const updatedProducts = products.filter(product => product.id !== selectedProduct.id);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setSelectedProduct(null);
    }
  };

  return (
      <div className="Catalog">
        <div className="catalog-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          {products.map((product) => (
              <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                {product.image && (
                    <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                )}
                <h2>{product.name.length > 10 ? `${product.name.substring(0, 7)}...` : product.name}</h2>
                <p>{product.description ? (product.description.length > 30 ? `${product.description.substring(0, 7)}...` : product.description) : 'Описание отсутствует'}</p>
                <p>Цена: ${product.price}</p>
              </div>
          ))}
        </div>

        {selectedProduct && (
            <div className="form-modal">
              <div className="modal-container">
                <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>{selectedProduct.name}</h2>
                <p style={{ textAlign: 'center', fontStyle: 'italic' }}>{selectedProduct.description ? selectedProduct.description : 'Описание отсутствует'}</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Цена: ${selectedProduct.price}</p>
                {selectedProduct.image && (
                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                      <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                    </div>
                )}
                <button onClick={handlePurchase}>Купить</button>
                <button onClick={() => setSelectedProduct(null)}>Закрыть</button>
              </div>
            </div>
        )}
      </div>
  );
}

export default App;