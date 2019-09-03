<template>
    <div class="segment">
        <div class="panel">
            <div class="row">
                <Select label="연도"
                        :default-value="selectedYear"
                        :options="years"
                        @change="changeYear" />
                <Select label="시즌"
                        :default-value="selectedSeason"
                        @change="changeSeason"
                        :options="seasons" />
            </div>
            <div class="row">
                <Table selectable="true"
                       :dataSource="data"
                       :columns="columns"
                       :on-add="handleAdd.bind(this)"
                       :on-delete="handleDelete.bind(this)"
                       :on-edit="handleEdit.bind(this)">

                    <template v-slot:add-modal="props">
                        <ContractManagement_AddModal v-bind="props" />
                    </template>

                    <template v-slot:edit-modal="props">
                        <ContractManagement_EditModal v-bind="props" />
                    </template>

                </Table>
                <Pagination @page="page" :total="total" :page-size="pageSize" :current-page="currentPage" />
            </div>
        </div>
    </div>
</template>

<script>
    import Select from '../common/Select';
    import Table from '../common/Table';
    import Pagination from '../common/Pagination';
    import ContractManagement_AddModal from './ContractManagement_AddModal'
    import ContractManagement_EditModal from './ContractManagement_EditModal'

    const columns = [{
        title: '거래처명',
        dataIndex: 'consumer',
        width: '30%',
        scopedSlots: { customRender: 'consumer' },
    }, {
        title: '제작연도',
        dataIndex: 'year',
        scopedSlots: { customRender: 'year' },
    }, {
        title: '제작연도',
        dataIndex: 'season',
        scopedSlots: { customRender: 'season' },
    }];

    export default {
        name: "ContractManagement",
        components: {
            Select,
            Table,
            Pagination,
            ContractManagement_AddModal,
            ContractManagement_EditModal
        },

        data() {
            return {
                selectedYear: '',
                selectedSeason: '',
                years: [],
                seasons: [],

                columns: columns,

                dataSource: [],
                total: 0,
                pageSize: 5,
                currentPage: 1,
            }
        },

        created: function() {
            this.years = [
                { value: '2018', name: '2018'},
                { value: '2019', name: '2019'},
                { value: '2020', name: '2020'},
                { value: '2021', name: '2021'},
                { value: '2022', name: '2022'},
            ];
            this.selectedYear = this.years[0].value;
            this.__loadSeasonsByYear__(this.selectedYear);
            this.__loadData__();
        },

        methods: {
            __loadData__() {
                // load data from db by this.selectedYear ...
                this.data = [{
                    key: Math.round(Math.random() * 100),
                    consumer: '客户' + Math.round(Math.random() * 100),
                    year: '2018',
                    season: '第四季度',
                }, {
                    key: Math.round(Math.random() * 100),
                    consumer: '客户' + Math.round(Math.random() * 100),
                    year: '2098',
                    season: '第四季度',
                }, {
                    key: Math.round(Math.random() * 100),
                    consumer: '客户' + Math.round(Math.random() * 100),
                    year: '2098',
                    season: '第四季度',
                }, {
                    key: Math.round(Math.random() * 100),
                    consumer: '客户' + Math.round(Math.random() * 100),
                    year: '2098',
                    season: '第四季度',
                }, {
                    key: Math.round(Math.random() * 100),
                    consumer: '客户' + Math.round(Math.random() * 100),
                    year: '2098',
                    season: '第四季度',
                }];

                this.total = Math.round((Math.random() + 1) * 2000);
            },

            page(pageNumber) {
                this.currentPage = pageNumber;
                this.__loadData__();
            },

            changeYear(year) {
                this.selectedYear = year;
                this.currentPage = 1;

                this.__loadSeasonsByYear__(this.selectedYear);
                this.__loadData__();
            },

            __loadSeasonsByYear__(year) {
                // load seasons from db by year
                this.seasons = [
                    { value: '1', name: '第一季度'},
                    { value: '2', name: '第二季度'},
                    { value: '3', name: '第三季度'},
                    { value: '4', name: '第四季度'},
                ];
                this.selectedSeason = this.seasons[0].value;
            },

            changeSeason(season) {
                console.log('change', season);
                this.selectedSeason = season;
                this.currentPage = 1;
                this.__loadData__();
            },

            handleAdd(record, success = () => {}, error = () => {}) {
                console.log('add new record', record);
                success();
            },

            handleEdit(record, success = () => {}, error = () => {}) {
                console.log('edit column', record);
                success();
            },

            handleDelete(rows, success = () => {}, error = () => {}) {
                let keys = rows.map(it => it.key);
                console.log('delete column', keys);

                this.currentPage = 1;
                this.__loadData__();
                success();
            },
        }
    }
</script>

<style scoped>
    .panel .row label:not(:first-child) {
        margin-left: 30px;
    }
</style>