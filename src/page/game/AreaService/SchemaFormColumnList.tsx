import {ProFormColumnsType} from "@ant-design/pro-components";
import {GameAreaServiceInsertOrUpdateDTO} from "@/api/admin/GameAreaServiceController";
import {AreaServiceStatusDict} from "@/page/game/AreaService/TableColumnList";
import {DictLongListVO} from "@/util/DictUtil";

export const InitForm: GameAreaServiceInsertOrUpdateDTO = {} as GameAreaServiceInsertOrUpdateDTO

const AreaServiceStatusSelectList: DictLongListVO[] = []
AreaServiceStatusDict.forEach((value, key) => {
    AreaServiceStatusSelectList.push({
        label: value.text as string,
        value: key
    })
})

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
            title: '区服状态',
            dataIndex: 'state',
            valueType: 'select',
            fieldProps: {
                options: AreaServiceStatusSelectList,
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
