import {ProFormColumnsType} from "@ant-design/pro-components";
import {AdminInsertOrUpdateDTO} from "@/api/admin/GameRoomCurrentController";

export const InitForm: AdminInsertOrUpdateDTO = {} as AdminInsertOrUpdateDTO

const SchemaFormColumnList = (): ProFormColumnsType<AdminInsertOrUpdateDTO>[] => {
    return []
}

export default SchemaFormColumnList
