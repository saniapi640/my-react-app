import axios from 'axios';

//const KEY = 'g74xJI2ZSIfLWgBcMSa144sl2Ln3HMAH';
const URL = 'https://saniservice.genesyserp.com/api';

export default axios.create({
    baseURL: URL,
    params: {
       // api_key: KEY
    }
});