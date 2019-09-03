<template>
    <div>
        <div class="operation" v-if="!!onAdd || !!onDelete || !!onEdit">
            <a-button @click="toAdd" v-if="!!onAdd" class="operation-btn" >Add</a-button>
            <slot v-if="!!onAdd"
                  name="add-modal"
                  v-bind="{
                    visibleModal: visibleAddModal,
                    confirmModalLoading: confirmAddModalLoading,
                    handleOk: handleOkAdd.bind(this),
                    handleCancel: handleCancelAdd.bind(this) }" />

            <a-button @click="showDeleteConfirm"  v-if="!!onDelete" :disabled="selectedRows.length === 0" class="operation-btn">Delete</a-button>

            <a-button @click="toEdit" v-if="!!onEdit" :disabled="selectedRows.length === 0 || selectedRows.length > 1 " class="operation-btn">Edit</a-button>
            <slot v-if="!!onEdit"
                  name="edit-modal"
                  v-bind="{
                    record: editingRecord,
                    visibleModal: visibleEditModal,
                    confirmModalLoading: confirmEditModalLoading,
                    handleOk: handleOkEdit.bind(this),
                    handleCancel: handleCancelEdit.bind(this) }" />

        </div>

        <a-table bordered :rowSelection="selectable ? {selectedRowKeys: selectedRowKeys, onChange: onSelectChange} : null" :dataSource="dataSource" :columns="columns" :pagination="pagination"></a-table>
    </div>
</template>
<script>
    export default {
        name: 'Table',
        props: {
            selectable: Boolean,
            dataSource: Array,
            columns: Array,
            onAdd: Function,
            onDelete: Function,
            onToEdit: Function,
            onEdit: Function
        },

        data () {
            return {
                pagination: false,
                selectedRows: [],

                visibleAddModal: false,
                confirmAddModalLoading: false,

                visibleEditModal: false,
                confirmEditModalLoading: false,
                editingRecord: Object.create(null)
            }
        },

        computed: {
            selectedRowKeys() {
                return this.selectedRows.map(item => item.key);
            }
        },

        methods: {
            showDeleteConfirm() {
                let length = this.selectedRows.length;
                let  vm = this;
                this.$confirm({
                    title: 'Are you sure delete '+ length +' item ?',
                    okText: 'Yes',
                    okType: 'danger',
                    cancelText: 'No',
                    onOk() {
                        vm.onDelete(vm.selectedRows, () => {
                            vm.selectedRows = [];
                        });
                    }
                });
            },

            onSelectChange(selectedRowKeys, selectedRows) {
                this.selectedRows = selectedRows;
            },

            toAdd() {
                this.visibleAddModal = true;
            },

            handleCancelAdd() {
                this.visibleAddModal = false
            },

            handleOkAdd(record) {
                this.confirmAddModalLoading = true;
                this.onAdd(record, () => {
                    this.visibleAddModal = false;
                    this.confirmAddModalLoading = false;
                }, () => {

                });
            },

            handleCancelEdit() {
                this.visibleEditModal = false
            },

            toEdit() {
                if (this.selectedRows.length !==1) return;
                this.visibleEditModal = true;
                this.editingRecord = this.selectedRows[0];
            },

            handleOkEdit(record) {
                this.confirmEditModalLoading = true;
                this.onEdit(record, () => {
                    this.visibleEditModal = false;
                    this.confirmEditModalLoading = false;
                }, () => {

                });
            },
        },
    }
</script>
<style lang="less" scoped>
    .operation {
        padding: 20px 0;
    }
    .operation *:not(:first-child) {
        margin-left: 20px;
    }
    .operation button:not(disabled):hover {
        background: @light-tealish;
        color: #fff;
    }
</style>
