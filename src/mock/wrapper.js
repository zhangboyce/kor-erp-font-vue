const Mock = require('mockjs');
const pathToRegexp = require('path-to-regexp');
import { getQueries, getParams } from './Query'

export default ['get', 'post', 'delete', 'put', 'head','options', 'patch'].reduce((a, c) => {
    a[c] = function (url, fn) {
        mock(url, c, fn);
    };
    return a;
}, {});

function mock(url, type, fn) {
    let keys = [];
    let regexp = pathToRegexp(url, keys, { start: false, end: false });
    console.log(regexp);
    Mock.mock(regexp, type, options => {
        console.log('[mock-'+ type +'] access ', options.url);
        if (typeof fn === 'function') {
            let ctx = getCtx(regexp, keys, options);
            let obj = fn(ctx);
            return Mock.mock(obj)
        } else {
            return Mock.mock(fn)
        }
    })
}

function getCtx(regexp, keys, options) {
    let accessUrl = options.url;
    let queries = getQueries(accessUrl);
    let params = getParams(regexp, keys, accessUrl);
    let body = options.body;

    let ctx = Object.create(null);
    ctx.queries = queries;
    ctx.params = params;
    ctx.body = body;
    return ctx;
}