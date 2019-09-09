export default {
    list(params) {
        const { currentPage, year, season } = params;
        const pageSize = 20;
        if (currentPage) {
            return {
                status: true,
                ['results|'+ pageSize]:[{
                    'key|+1': 1,
                    'consumer': '@ctitle(5, 10)',
                    'year': year,
                    'season': season,
                    'date': '@datetime("yyyy-MM-dd HH:mm:ss")'
                }],
                total: 112,
                pageSize: pageSize
            };
        } else {
            return {
                status: false,
                errMsg: 'Illegal params, currentPage: ' + currentPage
            };
        }
    },

    add(data) {
        let record = data.body;

        return { status: true };
    },

    edit(data) {
        let record = data.body;

        return { status: true };
    },

    delete(data) {
        let record = data.body;

        return { status: true };
    }
};