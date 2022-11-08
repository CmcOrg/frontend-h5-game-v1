import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameUserExpDeleteByIdSet, GameUserExpDO} from "@/api/admin/GameUserExpController";
import {GameUserExpTypeEnumSelectList} from "@/page/game/room/Config/Enums";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameUserExpDO>[] => [

    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
        width: 50,
    },

    {title: '主键 id', dataIndex: 'id', ellipsis: true,},

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

    {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (dom, entity) => [
            <a key="1" className={"red3"} onClick={() => {
                ExecConfirm(() => {
                    return GameUserExpDeleteByIdSet({idSet: [entity.id!]}).then(res => {
                        ToastSuccess(res.msg)
                        actionRef.current?.reload()
                    })
                }, undefined, `确定删除【${entity.id}】吗？`)
            }}>删除</a>,
        ],
    },

];

export default TableColumnList
