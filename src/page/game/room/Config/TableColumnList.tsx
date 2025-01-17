import {YesNoDict} from "@/util/DictUtil";
import {ActionType, ProColumns} from "@ant-design/pro-components";
import {
    GameRoomConfigDeleteByIdSet,
    GameRoomConfigDO,
    GameRoomConfigInsertOrUpdateDTO
} from "@/api/admin/GameRoomConfigController";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";
import {
    GameMoneyTypeEnumSelectList,
    GameRoomConfigPlayTypeEnumSelectList,
    GameRoomConfigRoomTypeEnumSelectList,
    GameUserExpTypeEnumSelectList
} from "@/page/game/room/Config/Enum";

const TableColumnList = (currentForm: React.MutableRefObject<GameRoomConfigInsertOrUpdateDTO | null>, setFormVisible: React.Dispatch<React.SetStateAction<boolean>>, actionRef: React.RefObject<ActionType>): ProColumns<GameRoomConfigDO>[] => [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
        width: 90,
    },

    {title: '配置名称', dataIndex: 'name', ellipsis: true, width: 80,},

    {title: '最大人数', dataIndex: 'maxUserTotal', ellipsis: true, hideInSearch: true, width: 80,},

    {title: '最大数量', dataIndex: 'maxRoomTotal', ellipsis: true, hideInSearch: true, width: 80,},

    {
        title: '房间玩法', dataIndex: 'playType', valueType: 'select', width: 80,
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
        title: '消耗货币', dataIndex: 'useMoneyType', valueType: 'select', width: 80,
        fieldProps: {
            showSearch: true,
            options: GameMoneyTypeEnumSelectList,
        },
    },

    {
        title: '得到货币', dataIndex: 'gotMoneyType', valueType: 'select', width: 80,
        fieldProps: {
            showSearch: true,
            options: GameMoneyTypeEnumSelectList,
        },
    },

    {
        title: '限制货币', dataIndex: 'limitMoneyType', valueType: 'select', width: 80,
        fieldProps: {
            showSearch: true,
            options: GameMoneyTypeEnumSelectList,
        },
    },

    {title: '货币最低', dataIndex: 'minUserMoney', ellipsis: true, hideInSearch: true, width: 80,},

    {title: '货币最高', dataIndex: 'maxUserMoney', ellipsis: true, hideInSearch: true, width: 80,},

    {
        title: '限制经验', dataIndex: 'limitExpType', valueType: 'select', width: 80,
        fieldProps: {
            showSearch: true,
            options: GameUserExpTypeEnumSelectList,
        },
    },

    {title: '最低经验', dataIndex: 'minUserExp', ellipsis: true, hideInSearch: true, width: 80,},

    {title: '最高经验', dataIndex: 'maxUserExp', ellipsis: true, hideInSearch: true, width: 80,},

    {
        title: '增加经验', dataIndex: 'roomExpType', valueType: 'select', width: 80,
        fieldProps: {
            showSearch: true,
            options: GameUserExpTypeEnumSelectList,
        },
    },

    {
        title: '修改时间',
        dataIndex: 'updateTime',
        hideInSearch: true,
        valueType: 'fromNow',
        width: 90,
    },

    {
        title: '是否启用',
        dataIndex: 'enableFlag',
        valueEnum: YesNoDict,
        width: 80,
    },

    {title: '排序号', dataIndex: 'orderNo', ellipsis: true, hideInSearch: true, width: 70,},

    {title: '备注', dataIndex: 'remark', ellipsis: true, width: 90,},

    {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (dom, entity) => [
            <a key="1" onClick={() => {
                currentForm.current = {id: entity.id} as GameRoomConfigInsertOrUpdateDTO
                setFormVisible(true)
            }}>编辑</a>,
            <a key="2" className={"red3"} onClick={() => {
                ExecConfirm(() => {
                    return GameRoomConfigDeleteByIdSet({idSet: [entity.id!]}).then(res => {
                        ToastSuccess(res.msg)
                        actionRef.current?.reload()
                    })
                }, undefined, `确定删除【${entity.name}】吗？`)
            }}>删除</a>,
        ],
    },
];

export default TableColumnList
