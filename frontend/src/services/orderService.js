import axios from "axios";

export const createOrder = async order => {
    try {
        const { data } = axios.post('/api/orders/create', order)
        return data;
    } catch (error) {
        console.error('Failed to Create Order',error.response?.data || error.message);
        throw error;
    }
}

export const getNewOrderForCurrentUser = async () => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    const response = await axios.get('/api/orders/newOrderForCurrentUser', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
  };


export const pay = async paymentId => {
    try {
        const { data } = await axios.put('/api/orders/pay', { paymentId });
        return data
    } catch (error) {
        console.error('Failed to pay order:', error.response?.data || error.message);
        throw error;
    }
}