const Mock = require('mockjs');
import { getParams } from './Query'
export default function () {
    return function (url, fn) {
        Mock.mock(url, options => {
            console.log('[mock] access ', options.url);
            let url = options.url;
            let params = getParams(url);

            let obj = fn(params);
            return Mock.mock(obj)
        })
    }
}