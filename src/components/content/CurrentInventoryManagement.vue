<template>
    <div class="segment">
        <div class="panel">
            <div class="row">
                <Select label="년도"
                        :options="years"
                        :value="selectedYear"
                        @change="changeYear" />
                <Select label="거래처명"
                        :value="selectedCustomer"
                        @change="changeCustomer"
                        :options="customers" />
                <Select label="시즌"
                        :value="selectedSeason"
                        @change="changeSeason"
                        :options="seasons" />
            </div>
            <div class="row">
                <Select label="자켓"
                        :style="{ 'font-weight': 'bold' }"
                        :userStyle="{ width: '100px', margin: '20px 10px' }"
                        :value="selectedItem"
                        @change="changeItem"
                        :options="items"/>
                <Table :dataSource="dataSource" :columns="columns" />
            </div>
        </div>
    </div>
</template>

<script>
    import Select from '../common/Select';
    import Table from '../common/Table';

    const columns = [{
        title: '사이즈',
        dataIndex: '사이즈',
        width: '30%',
        scopedSlots: { customRender: '사이즈' },
    }, {
        title: '재고',
        dataIndex: '재고',
        width: '30%',
        scopedSlots: { customRender: '재고' },
    }, {
        title: '폼목',
        dataIndex: '폼목',
        scopedSlots: { customRender: '폼목' },
    }];

    export default {
        name: "CurrentInventoryManagement",
        components: {
            Select,
            Table,
        },

        data() {
            return {
                selectedYear: '',
                selectedCustomer: '',
                selectedSeason: '',
                selectedItem: '',
                years: [],
                customers: [],
                seasons: [],
                items: [],

                columns: columns,
                dataSource: [],
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
            this.changeYear(this.years[0].value);
        },

        methods: {
            __loadData__() {
                // load data from db by this.selectedYear ...
                this.dataSource = [{
                    key: Math.round(Math.random() * 100),
                    사이즈: '77L' + Math.round(Math.random() * 100),
                    재고: '209',
                    폼목: 'jacket'
                }, {
                    key: Math.round(Math.random() * 100),
                    사이즈: '77L' + Math.round(Math.random() * 100),
                    재고: '209',
                    폼목: 'jacket'
                }, {
                    key: Math.round(Math.random() * 100),
                    사이즈: '77L' + Math.round(Math.random() * 100),
                    재고: '209',
                    폼목: 'jacket'
                }, {
                    key: Math.round(Math.random() * 100),
                    사이즈: '77L' + Math.round(Math.random() * 100),
                    재고: '209',
                    폼목: 'jacket'
                }, {
                    key: Math.round(Math.random() * 100),
                    사이즈: '77L' + Math.round(Math.random() * 100),
                    재고: '209',
                    폼목: 'jacket'
                }];
            },

            changeYear(year) {
                this.selectedYear = year;
                this.customers = [
                    { value: '1', name: '客户1'},
                    { value: '2', name: '客户2'},
                    { value: '3', name: '客户3'},
                    { value: '4', name: '客户4'},
                ];
               this.changeCustomer(this.customers[0].value);
            },

            changeCustomer(customer) {
                this.selectedCustomer = customer;
                this.seasons = [
                    { value: '1', name: '第一季度'},
                    { value: '2', name: '第二季度'},
                    { value: '3', name: '第三季度'},
                    { value: '4', name: '第四季度'},
                ];
                this.changeSeason(this.seasons[0].value);
            },

            changeSeason(season) {
                this.selectedSeason = season;
                this.items = [
                    { value: '1', name: 'item1'},
                    { value: '2', name: 'item2'},
                    { value: '3', name: 'item3'},
                    { value: '4', name: 'item4'},
                ];
                this.changeItem(this.items[0].value);
            },

            changeItem(item) {
                this.selectedItem = item;
                this.__loadData__();
            }
        }
    }
</script>

<style scoped>
    .panel .row label:not(:first-child) {
        margin-left: 30px;
    }
</style>