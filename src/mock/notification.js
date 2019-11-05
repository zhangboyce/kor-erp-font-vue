export default {
    list(ctx) {
        const { currentPage } = ctx.queries;
        const pageSize = 20;
        if (currentPage) {
            return {
                status: true,
                ['results|'+ pageSize]:[{
                    'key|+1': 1,
                    'title': '@ctitle(5, 10)',
                    'content': '@cparagraph',
                    'date': '@datetime("yyyy-MM-dd HH:mm:ss")'
                }],
                total: 137,
                pageSize: pageSize
            };
        } else {
            return {
                status: false,
                errMsg: 'Illegal params, currentPage: ' + currentPage
            };
        }
    }
};