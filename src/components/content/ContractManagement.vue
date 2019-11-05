<template>
    <div class="segment">
        <div class="panel">
            <div class="row">
                <Select label="연도"
                        :value="selectedYear"
                        :options="years"
                        @change="changeYear" />
                <Select label="시즌"
                        :value="selectedSeason"
                        @change="changeSeason"
                        :options="seasons" />
            </div>
            <div class="row">
                <Table :selectable=true
                       :dataSource="dataSource"
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
    import ContractManagement_AddModal from './ContractManagement_AddModal'
    import ContractManagement_EditModal from './ContractManagement_EditModal'

    const columns = [{
        title: '거래처명',
        dataIndex: 'consumer',
        width: '25%',
        scopedSlots: { customRender: 'consumer' },
    }, {
        title: '제작연도',
        dataIndex: 'year',
        width: '25%',
        scopedSlots: { customRender: 'year' },
    }, {
        title: '제작연도',
        dataIndex: 'season',
        width: '25%',
        scopedSlots: { customRender: 'season' },
    }, {
        title: '시간',
        dataIndex: 'date',
        width: '25%',
        scopedSlots: { customRender: 'date' },
    }];

    export default {
        name: "ContractManagement",
        components: {
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
            this.$http.get('/api/combobox/year/').then(resp => {
                if (resp.status !== true) {
                    this.$alert.error(resp.errMsg);
                } else {
                    this.years = resp.results || [];
                    this.changeYear(this.years[0].value);
                }
            });
        },

        methods: {
            __loadData__() {
                this.$http.get('/api/contract/list/', {
                    year: this.selectedYear,
                    season: this.selectedSeason,
                    currentPage: this.currentPage,
                }).then(resp => {
                    if (resp.status !== true) {
                        this.$alert.error(resp.errMsg);
                    } else {
                        this.dataSource = resp.results || [];
                        this.pageSize = resp.pageSize || 10;
                        this.total = resp.total || 0;
                    }
                });
            },

            page(pageNumber) {
                this.currentPage = pageNumber;
                this.__loadData__();
            },

            changeYear(year) {
                this.selectedYear = year;
                this.$http.get('/api/combobox/season/', { year: year }).then(resp => {
                    if (resp.status !== true) {
                        this.$alert.error(resp.errMsg);
                    } else {
                        this.seasons = resp.results || [];
                        this.changeSeason(this.seasons[0].value);
                    }
                });
            },

            changeSeason(season) {
                this.selectedSeason = season;
                this.currentPage = 1;
                this.__loadData__();
            },

            handleAdd(record, onSuccess = () => {}, onError = () => {}) {
                this.$http.post('/api/contract/add/', { body: record }).then(resp => {
                   if (resp.status !== true) {
                       onError(resp.errMsg)
                   } else {
                       this.__loadData__();
                       onSuccess();
                   }
                }).catch(err => {
                    onError(err.message);
                });
            },

            handleEdit(record, onSuccess = () => {}, onError = () => {}) {
                this.$http.post('/api/contract/edit/', { body: record }).then(resp => {
                    if (resp.status !== true) {
                        onError(resp.errMsg)
                    } else {
                        this.__loadData__();
                        onSuccess();
                    }
                }).catch(err => {
                    onError(err.message);
                });
            },

            handleDelete(rows, onSuccess = () => {}, onError = () => {}) {
                this.$http.post('/api/contract/delete/', { body: rows }).then(resp => {
                    if (resp.status !== true) {
                        onError(resp.errMsg)
                    } else {
                        this.__loadData__();
                        onSuccess();
                    }
                }).catch(err => {
                    onError(err.message);
                });
            },
        }
    }
</script>

<style scoped>
    .panel .row label:not(:first-child) {
        margin-left: 30px;
    }
</style>