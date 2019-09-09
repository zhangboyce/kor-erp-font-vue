const Mock = require('mockjs');
import { getParams } from './Query'

export default function () {
    return function (url, type, fn) {
        if (arguments.length === 2) {
            fn = type;
            type = 'get';
        }
        Mock.mock(url, type, options => {
            console.log('[mock-'+ type +'] access ', options.url);
            if (type === 'get') {
                let url = options.url;
                let params = getParams(url);
                let obj = fn(params);
                return Mock.mock(obj)
            }

            if (type === 'post') {
                let body = options.body;
                let obj = fn(body);
                return Mock.mock(obj)
            }
        })
    }
}