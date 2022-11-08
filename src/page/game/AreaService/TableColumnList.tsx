import {ActionType, ProColumns} from "@ant-design/pro-components";
import {
    GameAreaServiceDeleteByIdSet,
    GameAreaServiceDO,
    GameAreaServiceInsertOrUpdateDTO
} from "@/api/admin/GameAreaServiceController";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";
import {AreaServiceStateEnumColorMap} from "@/page/game/AreaService/Enums";

const TableColumnList = (currentForm: React.MutableRefObject<GameAreaServiceInsertOrUpdateDTO | null>, setFormVisible: React.Dispatch<React.SetStateAction<boolean>>, actionRef: React.RefObject<ActionType>): ProColumns<GameAreaServiceDO>[] => [

    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
        width: 50,
    },

    {title: '区服名称', dataIndex: 'name', ellipsis: true,},

    {
        title: '区服状态',
        dataIndex: 'state',
        valueEnum: AreaServiceStateEnumColorMap
    },

    {
        title: '每个用户最多角色数',
        dataIndex: 'userGameUserMaxNumber',
        width: 160,
    },

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

    {title: '备注', dataIndex: 'remark', ellipsis: true,},

    {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (dom, entity) => [
            <a key="1" onClick={() => {
                currentForm.current = {id: entity.id} as GameAreaServiceInsertOrUpdateDTO
                setFormVisible(true)
            }}>编辑</a>,
            <a key="2" className={"red3"} onClick={() => {
                ExecConfirm(() => {
                    return GameAreaServiceDeleteByIdSet({idSet: [entity.id!]}).then(res => {
                        ToastSuccess(res.msg)
                        actionRef.current?.reload()
                    })
                }, undefined, `确定删除【${entity.name}】吗？`)
            }}>删除</a>,
        ],
    },
];

export default TableColumnList
