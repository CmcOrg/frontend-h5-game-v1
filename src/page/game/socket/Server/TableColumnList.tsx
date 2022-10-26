import {YesNoDict} from "@/util/DictUtil";
import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameSocketServerDO} from "@/api/admin/GameSocketServerController";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameSocketServerDO>[] => [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
    },

    {title: '主键 id', dataIndex: 'id', ellipsis: true,},

    {title: 'host', dataIndex: 'host', ellipsis: true,},

    {title: '端口', dataIndex: 'port', ellipsis: true,},

    {title: '最大连接数', dataIndex: 'maxConnect', ellipsis: true,},

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

    {
        title: '是否启用',
        dataIndex: 'enableFlag',
        valueEnum: YesNoDict
    },

    {title: '备注', dataIndex: 'remark', ellipsis: true,},

];

export default TableColumnList
