import axiosInstance from "./axiosConfig";

const getAllReports = async () => {
    const response = await axiosInstance.get("/Report");
    return response.data;
};

const getReportById = async (id) => {
    const response = await axiosInstance.get(`/Report/${id}`);
    return response.data;
};

const createReport = async (report) => {
    const response = await axiosInstance.post("/Report", report);
    return response.data;
};

const updateReport = async (id, report) => {
    const response = await axiosInstance.put(`/Report/${id}`, report);
    return response.data;
};

const deleteReport = async (id) => {
    const response = await axiosInstance.delete(`/Report/${id}`);
    return response.data;
};

export { getAllReports, getReportById, createReport, updateReport, deleteReport };
