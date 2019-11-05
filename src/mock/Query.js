export function getQueries(url) {
    if (typeof url !== 'string' || url.length === 0 || url.trim().length === 0) {
        return Object.create(null);
    }

    let index = url.indexOf('?');
    if (index === -1) {
        return Object.create(null)
    }

    let queryStr = url.substring(index).replace(/\?/, '');
    if (!queryStr) {
        return Object.create(null);
    }

    return queryStr.split('\&').map(it => it.split('=')).reduce((a, c) => {
        if (c[0]) a[c[0]] = c[1];
        return a;
    }, Object.create(null));
}

export function getParams(regexp, keys, url) {
    let params = Object.create(null);
    let match = regexp.exec(url);
    for (let i = 1; i < match.length; i++) {
        let key = keys[i - 1];
        let prop = key.name;
        let val = decodeURIComponent(match[i]);
        if (val !== undefined) params[prop] = val;
    }
    return params;
}