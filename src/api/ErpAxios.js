import axios from 'axios';

//const KEY = 'g74xJI2ZSIfLWgBcMSa144sl2Ln3HMAH';
const URL = process.env.REACT_APP_ERP_API_URL;

export default axios.create({
    baseURL: URL,
    params: {
       // api_key: KEY
    }
});