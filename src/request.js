let host = 'http://117.16.136.196:8080/mverp_dev';
import axios from 'axios';

export function get(url, params) {
    if (!url) return Promise.resolve();
    url += buildQueries(params);
    return axios.get(host + url);
}

export function post(url, body) {
    return axios.post(host + url, body);
}

function buildQueries(params) {
    if (!params) return '';
    let keys = Object.keys(params);
    if (keys.length === 0) return '';
    return ('?' + keys.map(q => {
        if(params[q] !== undefined) return q + '=' + encodeURIComponent(params[q]);
    }).join('&'));
}