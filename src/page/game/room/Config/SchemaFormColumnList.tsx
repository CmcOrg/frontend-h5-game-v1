import {DictLongListVO, YesNoDict} from "@/util/DictUtil";
import {ProFormColumnsType} from "@ant-design/pro-components";
import {GameRoomConfigInsertOrUpdateDTO} from "@/api/admin/GameRoomConfigController";
import {
    GameMoneyTypeEnumSelectList,
    GameRoomConfigPlayTypeEnum,
    GameRoomConfigPlayTypeEnumSelectList,
    GameRoomConfigRoomTypeEnumSelectList,
    GameUserExpTypeEnumSelectList
} from "@/page/game/room/Config/Enums";

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
            valueType: 'select',
            fieldProps: {
                showSearch: true,
                options: GameRoomConfigPlayTypeEnumSelectList,
            },
            formItemProps: {
                rules: [
                    {
                        required: true
                    }
                ]
            }
        },

        {
            valueType: 'dependency',
            fieldProps: {
                name: ['playType'],
            },
            columns: ({playType}: GameRoomConfigInsertOrUpdateDTO): ProFormColumnsType<GameRoomConfigInsertOrUpdateDTO>[] => {
                let options: DictLongListVO[]
                if (playType) {
                    // 过滤：只要：房间玩法支持的 房间类型
                    let roomTypeSet = GameRoomConfigPlayTypeEnum.get(playType)!.roomTypeSet;
                    options = GameRoomConfigRoomTypeEnumSelectList.filter(item => {
                        return roomTypeSet.includes(item.value)
                    })
                } else {
                    options = GameRoomConfigRoomTypeEnumSelectList
                }
                return [
                    {
                        title: '房间类型',
                        dataIndex: 'roomType',
                        valueType: 'select',
                        fieldProps: {
                            showSearch: true,
                            options,
                        },
                        formItemProps: {
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        }
                    },
                ]
            }
        },

        {
            title: '消耗货币类型',
            dataIndex: 'useMoneyType',
            valueType: 'select',
            fieldProps: {
                showSearch: true,
                options: GameMoneyTypeEnumSelectList,
            },
            formItemProps: {
                rules: [
                    {
                        required: true
                    }
                ]
            }
        },

        {
            title: '得到货币类型',
            dataIndex: 'gotMoneyType',
            valueType: 'select',
            fieldProps: {
                showSearch: true,
                options: GameMoneyTypeEnumSelectList,
            },
            formItemProps: {
                rules: [
                    {
                        required: true
                    }
                ]
            }
        },

        {
            title: '用户限制货币类型',
            dataIndex: 'limitMoneyType',
            valueType: 'select',
            fieldProps: {
                showSearch: true,
                options: GameMoneyTypeEnumSelectList,
            },
            formItemProps: {
                rules: [
                    {
                        required: true
                    }
                ]
            }
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
            dataIndex: 'limitExpType',
            valueType: 'select',
            fieldProps: {
                showSearch: true,
                options: GameUserExpTypeEnumSelectList,
            },
            formItemProps: {
                rules: [
                    {
                        required: true
                    }
                ]
            }
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
            valueType: 'select',
            fieldProps: {
                showSearch: true,
                options: GameUserExpTypeEnumSelectList,
            },
            formItemProps: {
                rules: [
                    {
                        required: true
                    }
                ]
            }
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
