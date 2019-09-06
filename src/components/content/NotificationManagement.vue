<template>
    <div class="segment">
        <div class="panel">
            <template v-if="notifications && notifications.length !== 0" >
                <div class="row nt-item" :key="nt.key" v-for="nt in notifications">
                    <span class="title">{{ nt.title }}</span>
                    <span class="date">{{ nt.date }}</span>
                </div>
                <div class="row">
                    <Pagination @page="page" :total="total" :page-size="pageSize" :current-page="currentPage" />
                </div>
            </template>
            <div v-else class="nt-item">
                No result.
            </div>
        </div>
    </div>
</template>

<script>
    import Pagination from '../common/Pagination';

    export default {
        name: "NotificationManagement",
        components: {
            Pagination
        },

        data: function () {
            return {
                notifications: [],
                total: 0,
                pageSize: 10,
                currentPage: 1,
            }
        },

        created: function() {
            this.page(1);
        },

        methods: {
            page(pageNumber) {
                this.$http.get('/api/notification/list', { currentPage: pageNumber }).then(resp => {
                    if (resp.status !== true) {
                        this.$alert.error(resp.errMsg);
                    } else {
                        this.notifications = resp.results;
                        this.total = resp.total;
                        this.pageSize = resp.pageSize;
                        this.currentPage = pageNumber;
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .segment .panel .row.nt-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 30px;
        font-size: 14px;
        font-family: SpoqaHanSansJP-Regular, sans-serif;
        border-bottom: 1px solid #e6eaee;
        color: #666;
        transition: all 0.2s ease-in;

    &:last-child {
         border-bottom: none;
     }

    &:hover {
         background: #f2f3f5;
     }
    }
</style>