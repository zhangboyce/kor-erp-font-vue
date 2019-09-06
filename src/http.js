import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export function get(url, params) {
    if (!url) return Promise.resolve();
    url += buildQueries(params);
    return axios.get(url).then(resp => {
        console.log('[http-get] access ', url, ' resp: ', resp);
        return Promise.resolve(resp.data);
    });
}

export function post(url, body) {
    return axios.post(url, body).then(resp => {
        console.log('[http-post] access ', url, ' body: ', body,' resp: ', resp);
        return Promise.resolve(resp.data);
    });
}

function buildQueries(params) {
    if (!params) return '';
    let keys = Object.keys(params);
    if (keys.length === 0) return '';
    return ('?' + keys.map(q => {
        if(params[q] !== undefined) return q + '=' + encodeURIComponent(params[q]);
    }).join('&'));
}