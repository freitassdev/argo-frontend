import axiosPrimitive from 'axios';

const axios = axiosPrimitive.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL
});

export default axios;