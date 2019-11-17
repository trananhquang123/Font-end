import axios from 'axios';
import * as Config from './../constrains/Config';

export default function callApi(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: {"Content-type": "multipart/form-data"}

    }).catch(err => {
        console.log(err);
    });
};