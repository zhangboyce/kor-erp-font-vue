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
                notifications: [
                    {key: 1, title: '공지사항 내용이 들어갑니다' + Math.random(), date: '2019-09-11'},
                    {key: 2, title: '공지사항의 본 내용이 이 곳에 들어갑니다. 다른 곳을 클릭하면 자동으로 펴진 곳이 접어집니다.', date: '2019-09-11'},
                    {key: 3, title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
                    {key: 4, title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
                    {key: 5, title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
                    {key: 6, title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
                    {key: 7, title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
                    {key: 8, title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
                    {key: 9, title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
                    {key: 10, title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
                ],
                total: 313,
                pageSize: 10,
                currentPage: 1,
            }
        },

        methods: {
            page(pageNumber) {
                this.notifications = [...this.notifications]; // query data from db
                this.currentPage = pageNumber;
            },
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