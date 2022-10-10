import {ActionType, ProColumns} from "@ant-design/pro-components";
import {GameRoomCurrentDeleteByIdSet, GameRoomCurrentPageVO} from "@/api/admin/GameRoomCurrentController";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";

const TableColumnList = (actionRef: React.RefObject<ActionType>): ProColumns<GameRoomCurrentPageVO>[] => [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
    },

    {title: '主键 id', dataIndex: 'id', ellipsis: true,},

    {title: '房间配置主键 id', dataIndex: 'roomConfigId', ellipsis: true,},

    {title: '房间配置名称', dataIndex: 'name', ellipsis: true,},

    {title: '房间玩法：1 大厅 2 捕鱼 3 斗地主', dataIndex: 'playType', ellipsis: true,},

    {title: '房间类型，例如：1000 普通大厅 2000 体验场 2001 普通场 2002 挑战场 2003 大奖赛', dataIndex: 'roomType', ellipsis: true,},

    {title: '消耗货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）', dataIndex: 'useMoneyType', ellipsis: true,},

    {title: '得到货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）', dataIndex: 'gotMoneyType', ellipsis: true,},

    {title: '用户限制货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）', dataIndex: 'limitMoneyType', ellipsis: true,},

    {title: '用户限制经验值类型：1 普通经验', dataIndex: 'limitExpType', ellipsis: true,},

    {title: '房间增加经验值的类型：1 普通经验', dataIndex: 'roomExpType', ellipsis: true,},

    {title: 'socket服务器主键 id', dataIndex: 'socketServerId', ellipsis: true,},

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
