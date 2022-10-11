import {useRef, useState} from "react";
import {ActionType, ColumnsState, ProTable} from "@ant-design/pro-components";
import {Space} from "antd";
import {
    GameUserConnectDeleteByIdSet,
    GameUserConnectDO,
    GameUserConnectPage,
    GameUserConnectPageDTO
} from "@/api/admin/GameUserConnectController";
import TableColumnList from "./TableColumnList";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";
import CommonConstant from "@/model/constant/CommonConstant";

// 用户连接
export default function () {

    const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>();

    const [expandedRowKeys, setExpandedRowKeys] = useState<number[]>([]);

    const actionRef = useRef<ActionType>(null)

    return (
        <>
            <ProTable<GameUserConnectDO, GameUserConnectPageDTO>
                scroll={{x: 'max-content'}}
                sticky={{offsetHeader: CommonConstant.NAV_TOP_HEIGHT}}
                actionRef={actionRef}
                rowKey={"id"}
                pagination={{
                    showQuickJumper: true,
                    showSizeChanger: true,
                }}
                columnEmptyText={false}
                columnsState={{
                    value: columnsStateMap,
                    onChange: setColumnsStateMap,
                }}
                rowSelection={{}}
                expandable={{
                    expandedRowKeys,
                    onExpandedRowsChange: (expandedRows) => {
                        setExpandedRowKeys(expandedRows as number[])
                    },
                }}
                revalidateOnFocus={false}
                columns={TableColumnList(actionRef)}
                options={{
                    fullScreen: true,
                }}
                request={(params, sort, filter) => {
                    return GameUserConnectPage({...params, sort})
                }}
                tableAlertOptionRender={({selectedRowKeys, selectedRows, onCleanSelected}) => (
                    <Space size={16}>
                        <a className={"red3"} onClick={() => {
                            ExecConfirm(() => {
                                return GameUserConnectDeleteByIdSet({idSet: selectedRowKeys as number[]}).then(res => {
                                    ToastSuccess(res.msg)
                                    actionRef.current?.reload()
                                    onCleanSelected()
                                })
                            }, undefined, `确定删除选中的【${selectedRowKeys.length}】项吗？`)
                        }}>批量删除</a>
                        <a onClick={onCleanSelected}>取消选择</a>
                    </Space>
                )}
            >
            </ProTable>
        </>
    )
}
