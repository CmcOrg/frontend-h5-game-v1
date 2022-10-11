import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameUserExpDO} from "@/api/admin/GameUserExpController";
import {GameUserExpTypeEnumSelectList} from "@/page/game/room/Config/Enums";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameUserExpDO>[] => [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
    },

    {title: '用户 id', dataIndex: 'id', ellipsis: true,},

    {
        title: '经验类型', dataIndex: 'type', valueType: 'select',
        fieldProps: {
            showSearch: true,
            options: GameUserExpTypeEnumSelectList,
        },
    },

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
