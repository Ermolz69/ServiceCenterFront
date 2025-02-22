import axiosInstance from "./axiosConfig";

const getAllOrders = async () => {
    const response = await axiosInstance.get("/Order");
    return response.data;
};

const getOrderById = async (id) => {
    const response = await axiosInstance.get(`/Order/${id}`);
    return response.data;
};

const createOrder = async (orderData) => {
    const response = await axiosInstance.post("/Order", orderData);
    return response.data;
};

const updateOrder = async (id, orderData) => {
    const response = await axiosInstance.put(`/Order/${id}`, orderData);
    return response.data;
};

const deleteOrder = async (id) => {
    const response = await axiosInstance.delete(`/Order/${id}`);
    return response.data;
};

export { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };
