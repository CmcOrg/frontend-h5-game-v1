import {YesNoDict} from "@/util/DictUtil";
import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameSocketServerDeleteByIdSet, GameSocketServerDO} from "@/api/admin/GameSocketServerController";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameSocketServerDO>[] => [

    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
        width: 50,
    },

    {title: '主键 id', dataIndex: 'id', ellipsis: true,},

    {title: 'host', dataIndex: 'host', ellipsis: true,},

    {title: '端口', dataIndex: 'port', ellipsis: true,},

    {title: '最大连接数', dataIndex: 'maxConnect', ellipsis: true,},

    {title: '当前连接数', dataIndex: 'socketServerCurrentConnectTotal', ellipsis: true, width: 100,},

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

    {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (dom, entity) => [
            <a key="1" className={"red3"} onClick={() => {
                ExecConfirm(() => {
                    return GameSocketServerDeleteByIdSet({idSet: [entity.id!]}).then(res => {
                        ToastSuccess(res.msg)
                        actionRef.current?.reload()
                    })
                }, undefined, `确定删除【${entity.id}】吗？`)
            }}>删除</a>,
        ],
    },
];

export default TableColumnList
