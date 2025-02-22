import axiosInstance from "./axiosConfig";

const getAllReports = async () => {
    const response = await axiosInstance.get("/ServiceRequest");
    return response.data;
};

const getReportById = async (id) => {
    const response = await axiosInstance.get(`/ServiceRequest/${id}`);
    return response.data;
};

const createReport = async (report) => {
    const response = await axiosInstance.post("/ServiceRequest", report);
    return response.data;
};


const updateReport = async (id, report) => {
    const response = await axiosInstance.put(`/ServiceRequest/${id}`, report);
    return response.data;
};

const deleteReport = async (id) => {
    const response = await axiosInstance.delete(`/ServiceRequest/${id}`);
    return response.data;
};

export { getAllReports, getReportById, createReport, updateReport, deleteReport };
