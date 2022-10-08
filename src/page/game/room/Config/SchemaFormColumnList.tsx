import {YesNoDict} from "@/util/DictUtil";
import {ProFormColumnsType} from "@ant-design/pro-components";
import {GameRoomConfigInsertOrUpdateDTO} from "@/api/admin/GameRoomConfigController";

export const InitForm: GameRoomConfigInsertOrUpdateDTO = {} as GameRoomConfigInsertOrUpdateDTO

const SchemaFormColumnList = (): ProFormColumnsType<GameRoomConfigInsertOrUpdateDTO>[] => {
    return [

        {
            title: '配置名称',
            dataIndex: 'name',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        whitespace: true,
                        min: 0,
                        max: 10,
                    },
                ],
            },
        },

        {
            title: '房间最大人数',
            dataIndex: 'maxUserTotal',
        },

        {
            title: '房间最大数量',
            dataIndex: 'maxRoomTotal',
        },

        {
            title: '房间玩法',
            dataIndex: 'playType',
            tooltip: '1 大厅 2 捕鱼 3 斗地主',
        },

        {
            title: '房间类型',
            dataIndex: 'roomType',
            tooltip: '1000 普通大厅 2000 体验场 2001 普通场 2002 挑战场 2003 大奖赛',
        },

        {
            title: '消耗货币类型',
            dataIndex: 'useMoneyType',
            tooltip: '1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）',
        },

        {
            title: '得到货币类型',
            dataIndex: 'getMoneyType',
            tooltip: '1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）',
        },

        {
            title: '用户限制货币类型',
            dataIndex: 'userMoneyType',
            tooltip: '1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）',
        },

        {
            title: '用户携带货币最低值',
            dataIndex: 'minUserMoney',
        },

        {
            title: '用户携带货币最高值',
            dataIndex: 'maxUserMoney',
        },

        {
            title: '用户限制经验值类型',
            dataIndex: 'userExpType',
            tooltip: '1 普通经验',
        },

        {
            title: '最低用户经验值',
            dataIndex: 'minUserExp',
        },

        {
            title: '最高用户经验值',
            dataIndex: 'maxUserExp',
        },

        {
            title: '房间增加经验值的类型',
            dataIndex: 'roomExpType',
            tooltip: '1 普通经验',
        },

        {
            title: '是否启用',
            dataIndex: 'enableFlag',
            valueEnum: YesNoDict,
            valueType: 'switch',
        },

        {
            title: '排序号',
            dataIndex: 'orderNo',
            tooltip: '值越大越前面',
        },

        {
            title: '备注',
            dataIndex: 'remark',
            valueType: 'textarea',
            formItemProps: {
                rules: [
                    {
                        whitespace: true,
                        max: 300,
                    },
                ],
            },
            fieldProps: {
                showCount: true,
                maxLength: 300,
                allowClear: true,
            }
        },

    ]
}

export default SchemaFormColumnList
