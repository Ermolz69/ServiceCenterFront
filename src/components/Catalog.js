import { useState, useEffect } from 'react';
import '../Catalog.css';

function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orders, setOrders] = useState([]);
  const [newProductForm, setNewProductForm] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    tags: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  // Save products to localStorage whenever the products array changes
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  // Handle clicking on a product to view details (view-only mode)
  const openModal = (product) => {
    setSelectedProduct(product);  // Set the selected product for viewing
    setIsModalOpen(true);  // Open the modal for product details
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedProduct(null);  // Close the modal
    setIsModalOpen(false);
  };

  // Handle purchasing the selected product
  const handlePurchase = () => {
    if (selectedProduct) {
      setIsPaymentModalOpen(true); // Open payment modal
    }
  };

  // Handle order completion and remove product after payment
  const completeOrder = (paymentDetails) => {
    if (selectedProduct) {
      setOrders([...orders, { ...selectedProduct, payment: paymentDetails }]);
      alert(`You bought ${selectedProduct.name} for $${selectedProduct.price}!`);
      setProducts(products.filter(product => product.id !== selectedProduct.id));
      setSelectedProduct(null);  // Close the modal after purchase
      setIsPaymentModalOpen(false);  // Close the payment modal
    }
  };

  // Handle form inputs for new or edited product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProductForm({
      ...newProductForm,
      [name]: value
    });
  };

  // Handle file input for image selection
  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProductForm({
          ...newProductForm,
          image: reader.result
        });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  // Handle adding or updating a product
  const handleSaveProduct = () => {
    const updatedProduct = {
      id: selectedProduct ? selectedProduct.id : Date.now(), // Use existing ID if editing
      name: newProductForm.name,
      price: parseFloat(newProductForm.price),
      description: newProductForm.description,
      tags: newProductForm.tags.split(',').map(tag => tag.trim()),
      image: newProductForm.image
    };

    if (selectedProduct) {
      // Update existing product in the list
      setProducts(products.map(product => (product.id === selectedProduct.id ? updatedProduct : product)));
    } else {
      // Add new product if no product is selected
      setProducts([...products, updatedProduct]);
    }

    setIsModalOpen(false); // Close the form modal
    setNewProductForm({
      name: '',
      price: '',
      description: '',
      image: '',
      tags: ''
    });
  };

  return (
    <div className="Catalog">
      <h1>Catalog Page</h1>
      <div className="catalog-container">
        <button className="circular-button" onClick={() => setIsModalOpen(true)}>
          <span className="plus-symbol">+</span>
        </button>

        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openModal(product)}>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            )}
            <h2>{product.name}</h2>
            <p>{product.description.length > 50 ? `${product.description.substring(0, 50)}...` : product.description}</p> {/* Shortened description */}
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>

      {/* Modal Window for Product Details (View-Only Mode) */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            {selectedProduct.image && (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            )}
            <button onClick={handlePurchase}>Buy Now</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Modal Window for Adding/Editing Product */}
      {isModalOpen && !selectedProduct && (
        <div className="form-modal">
          <div className="modal-container">
            <h2>{selectedProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                Product Name:
                <input
                  type="text"
                  name="name"
                  value={newProductForm.name}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Price:
                <input
                  type="number"
                  name="price"
                  value={newProductForm.price}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Description:
                <textarea
                  name="description"
                  value={newProductForm.description}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Image:
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
              <br />
              {newProductForm.image && (
                <div>
                  <img
                    src={newProductForm.image}
                    alt="Product Preview"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>
              )}
              <br />
              <label>
                Tags (comma separated):
                <input
                  type="text"
                  name="tags"
                  value={newProductForm.tags}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button type="button" onClick={handleSaveProduct}>
                {selectedProduct ? 'Save Changes' : 'Add Product'}
              </button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Payment Modal (for completing order) */}
      {isPaymentModalOpen && selectedProduct && (
        <div className="form-modal">
          <div className="modal-container">
            <h2>Complete Payment</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                Name on Card:
                <input type="text" placeholder="Name" required />
              </label>
              <br />
              <label>
                Card Number:
                <input type="text" placeholder="Card Number" required />
              </label>
              <br />
              <label>
                Expiry Date:
                <input type="text" placeholder="MM/YY" required />
              </label>
              <br />
              <label>
                CVV:
                <input type="text" placeholder="CVV" required />
              </label>
              <br />
              <button type="button" onClick={() => completeOrder({ name: 'Mock Payment' })}>
                Confirm Payment
              </button>
              <button type="button" onClick={() => setIsPaymentModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;
