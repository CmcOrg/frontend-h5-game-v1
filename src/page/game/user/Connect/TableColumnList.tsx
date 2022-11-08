import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameUserConnectDeleteByIdSet, GameUserConnectDO} from "@/api/admin/GameUserConnectController";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameUserConnectDO>[] => [

    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
        width: 50,
    },

    {title: '用户 id', dataIndex: 'id', ellipsis: true,},

    {title: '房间 id', dataIndex: 'roomCurrentId', ellipsis: true,},

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
                    return GameUserConnectDeleteByIdSet({idSet: [entity.id!]}).then(res => {
                        ToastSuccess(res.msg)
                        actionRef.current?.reload()
                    })
                }, undefined, `确定删除【${entity.id}】的连接吗？`)
            }}>删除</a>,
        ],
    },
];

export default TableColumnList
