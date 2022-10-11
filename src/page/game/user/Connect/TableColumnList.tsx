import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameUserConnectDO} from "@/api/admin/GameUserConnectController";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameUserConnectDO>[] => [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
    },

    {title: '用户id', dataIndex: 'id', ellipsis: true,},

    {title: '房间id', dataIndex: 'roomCurrentId', ellipsis: true,},

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
