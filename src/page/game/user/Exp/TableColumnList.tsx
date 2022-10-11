import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameUserExpDO} from "@/api/admin/GameUserExpController";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameUserExpDO>[] => [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
    },

    {title: '用户 id', dataIndex: 'id', ellipsis: true,},

    {title: '经验类型', dataIndex: 'type', ellipsis: true,},

    {title: '经验值', dataIndex: 'value', ellipsis: true,},

    {
        title: '创建时间',
        dataIndex: 'createTime',
        hideInSearch: true,
        valueType: 'fromNow',
    },

    {
        title: '修改时间',
        dataIndex: 'updateTime',
        hideInSearch: true,
        valueType: 'fromNow',
    },

];

export default TableColumnList
