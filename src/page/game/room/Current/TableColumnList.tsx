import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameRoomCurrentDeleteByIdSet, GameRoomCurrentPageVO} from "@/api/admin/GameRoomCurrentController";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";
import {
    GameMoneyTypeEnumSelectList,
    GameRoomConfigPlayTypeEnumSelectList,
    GameRoomConfigRoomTypeEnumSelectList,
    GameUserExpTypeEnumSelectList
} from "@/page/game/room/Config/Enums";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameRoomCurrentPageVO>[] => [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
        width: 50,
    },

    {title: '主键 id', dataIndex: 'id', ellipsis: true,},

    {title: '配置id', dataIndex: 'roomConfigId', ellipsis: true, width: 90,},

    {title: '配置名称', dataIndex: 'name', ellipsis: true, width: 90,},

    {
        title: '房间玩法', dataIndex: 'playType', valueType: 'select', width: 90,
        fieldProps: {
            showSearch: true,
            options: GameRoomConfigPlayTypeEnumSelectList,
        },
    },

    {
        title: '房间类型', dataIndex: 'roomType', valueType: 'select',
        fieldProps: {
            showSearch: true,
            options: GameRoomConfigRoomTypeEnumSelectList,
        },
    },

    {
        title: '消耗货币', dataIndex: 'useMoneyType', valueType: 'select', width: 90,
        fieldProps: {
            showSearch: true,
            options: GameMoneyTypeEnumSelectList,
        },
    },

    {
        title: '得到货币', dataIndex: 'gotMoneyType', valueType: 'select', width: 90,
        fieldProps: {
            showSearch: true,
            options: GameMoneyTypeEnumSelectList,
        },
    },

    {
        title: '限制货币', dataIndex: 'limitMoneyType', valueType: 'select', width: 90,
        fieldProps: {
            showSearch: true,
            options: GameMoneyTypeEnumSelectList,
        },
    },

    {
        title: '限制经验', dataIndex: 'limitExpType', valueType: 'select', width: 90,
        fieldProps: {
            showSearch: true,
            options: GameUserExpTypeEnumSelectList,
        },
    },

    {
        title: '增加经验', dataIndex: 'roomExpType', valueType: 'select', width: 90,
        fieldProps: {
            showSearch: true,
            options: GameUserExpTypeEnumSelectList,
        },
    },

    {title: 'socketServerId', dataIndex: 'socketServerId', ellipsis: true, width: 120,},

    {
        title: '创建时间',
        dataIndex: 'createTime',
        hideInSearch: true,
        valueType: 'fromNow',
    },

    {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (dom, entity) => [
            <a key="1" className={"red3"} onClick={() => {
                ExecConfirm(() => {
                    return GameRoomCurrentDeleteByIdSet({idSet: [entity.id!]}).then(res => {
                        ToastSuccess(res.msg)
                        actionRef.current?.reload()
                    })
                }, undefined, `确定删除【${entity.name}】吗？`)
            }}>删除</a>,
        ],
    },
];

export default TableColumnList
