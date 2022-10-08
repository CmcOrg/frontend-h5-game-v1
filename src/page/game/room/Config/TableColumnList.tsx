import {YesNoDict} from "@/util/DictUtil";
import {ActionType, ProColumns} from "@ant-design/pro-components";
import {
    GameRoomConfigDeleteByIdSet,
    GameRoomConfigDO,
    GameRoomConfigInsertOrUpdateDTO
} from "@/api/admin/GameRoomConfigController";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";

const TableColumnList = (currentForm: React.MutableRefObject<GameRoomConfigInsertOrUpdateDTO | null>, setFormVisible: React.Dispatch<React.SetStateAction<boolean>>, actionRef: React.RefObject<ActionType>): ProColumns<GameRoomConfigDO>[] => [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
    },

    {title: '房间配置名称', dataIndex: 'name', ellipsis: true,},

    {title: '排序号', dataIndex: 'orderNo', ellipsis: true, hideInSearch: true,},

    {title: '房间最大人数', dataIndex: 'maxUserTotal', ellipsis: true,},

    {title: '房间最大数量', dataIndex: 'maxRoomTotal', ellipsis: true,},

    {title: '房间玩法', dataIndex: 'playType', ellipsis: true,},

    {title: '房间类型', dataIndex: 'roomType', ellipsis: true,},

    {title: '消耗货币类型', dataIndex: 'useMoneyType', ellipsis: true,},

    {title: '得到货币类型', dataIndex: 'getMoneyType', ellipsis: true,},

    {title: '用户限制货币类型', dataIndex: 'userMoneyType', ellipsis: true,},

    {title: '用户携带货币最低值', dataIndex: 'minUserMoney', ellipsis: true,},

    {title: '用户携带货币最高值', dataIndex: 'maxUserMoney', ellipsis: true,},

    {title: '用户限制经验值类型', dataIndex: 'userExpType', ellipsis: true,},

    {title: '最低用户经验值', dataIndex: 'minUserExp', ellipsis: true,},

    {title: '最高用户经验值', dataIndex: 'maxUserExp', ellipsis: true,},

    {title: '房间增加经验值的类型', dataIndex: 'roomExpType', ellipsis: true,},

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
