import Select from './Select';
import Table from './Table';
import EditableTable from './EditableTable';
import Pagination from './Pagination';
import TransitionExpand from './TransitionExpand';

export default {
    install: function (Vue, options) {
        Vue.component(Select.name, Select);
        Vue.component(Table.name, Table);
        Vue.component(EditableTable.name, EditableTable);
        Vue.component(Pagination.name, Pagination);
        Vue.component(TransitionExpand.name, TransitionExpand);
    }
}