import {YesNoDict} from "@/util/DictUtil";
import {ProFormColumnsType} from "@ant-design/pro-components";
import {GameAreaServiceInsertOrUpdateDTO} from "@/api/admin/GameAreaServiceController";

export const InitForm: GameAreaServiceInsertOrUpdateDTO = {} as GameAreaServiceInsertOrUpdateDTO

const SchemaFormColumnList = (): ProFormColumnsType<GameAreaServiceInsertOrUpdateDTO>[] => {
    return [

        {
            title: '区服名称',
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
            title: '是否停服',
            dataIndex: 'shutdownFlag',
            valueEnum: YesNoDict,
            valueType: 'switch',
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
