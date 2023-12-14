import axios from 'axios';

//const KEY = 'g74xJI2ZSIfLWgBcMSa144sl2Ln3HMAH';
const URL = 'https://656eaddb6529ec1c62367815.mockapi.io';

export default axios.create({
    baseURL: URL,
    params: {
       // api_key: KEY
    }
});