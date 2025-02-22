import axiosInstance from "./axiosConfig";

const getAllProducts = async () => {
    const response = await axiosInstance.get("/Product");
    return response.data;
};

const getProductById = async (id) => {
    const response = await axiosInstance.get(`/Product/${id}`);
    return response.data;
};

const createProduct = async (product) => {
    const response = await axiosInstance.post("/Product", product);
    return response.data;
};

const updateProduct = async (id, product) => {
    const response = await axiosInstance.put(`/Product/${id}`, product);
    return response.data;
};

const deleteProduct = async (id) => {
    const response = await axiosInstance.delete(`/Product/${id}`);
    return response.data;
};

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
