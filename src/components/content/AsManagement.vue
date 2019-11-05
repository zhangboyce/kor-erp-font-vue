<template>
    <div class="segment">
        <div class="panel">
            <div class="row">
                <label>
                    성명
                    <a-input placeholder="성명"/>
                </label>
                <Select label="거래처명"
                        showSearch
                        :value="contract"
                        :options="contracts"
                        @change="changeContract" />

                <Select label="부서명"
                        showSearch
                        :value="department"
                        @change="changeDepartment"
                        :options="departments" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AsManagement"
    }
</script>

<style scoped>
    .ant-input {
        width: 200px;
        margin: 0 8px 8px 0;
    }
</style>