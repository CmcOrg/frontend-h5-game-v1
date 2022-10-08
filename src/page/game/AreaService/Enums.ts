import {ProSchemaValueEnumType} from "@ant-design/pro-components";
import {NumberTextMapToSelectList} from "@/util/DictUtil";

// 区服状态
export const AreaServiceStateEnumColorMap = new Map<number, ProSchemaValueEnumType>();
AreaServiceStateEnumColorMap.set(0, {text: '关闭', status: 'error'})
AreaServiceStateEnumColorMap.set(1, {text: '正常', status: 'success'})
AreaServiceStateEnumColorMap.set(2, {text: '维护', status: 'warning'})

// 将 map转换为 下拉选 list
export const AreaServiceStateEnumSelectList = NumberTextMapToSelectList(AreaServiceStateEnumColorMap as Map<number, { text: string }>)
