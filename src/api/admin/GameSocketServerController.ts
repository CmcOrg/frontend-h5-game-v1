import {SortOrder} from "antd/es/table/interface";
import MyOrderDTO from "@/model/dto/MyOrderDTO";
import $http from "@/util/HttpUtil";
import {AxiosRequestConfig} from "axios";

export interface NotEmptyIdSet {
    idSet: number[] // 主键 idSet
}

// 批量删除
export function GameSocketServerDeleteByIdSet(form: NotEmptyIdSet, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/socketServer/deleteByIdSet', form, config)
}

export interface NotNullId {
    id: number // 主键id {"min":1}
}

export interface GameSocketServerDO {
    host?: string // host
    port?: number // 端口，备注：host + 端口，可以表示唯一标识
    maxConnect?: number // 最大连接数
    socketServerCurrentConnectTotal?: number // 当前：连接数
    id?: number // 主键id
    createId?: number // 创建人id
    createTime?: string // 创建时间
    updateId?: number // 修改人id
    updateTime?: string // 修改时间
    version?: number // 乐观锁
    enableFlag?: boolean // 是否启用
    delFlag?: boolean // 是否逻辑删除
    remark?: string // 备注
}

// 通过主键id，查看详情
export function GameSocketServerInfoById(form: NotNullId, config?: AxiosRequestConfig) {
    return $http.myProPost<GameSocketServerDO>('/game/socketServer/infoById', form, config)
}

export interface GameSocketServerPageDTO {
    id?: number // 主键id
    host?: string // host
    port?: number // 端口，备注：host + 端口，可以表示唯一标识
    remark?: string // 备注
    current?: number // 第几页
    pageSize?: number // 每页显示条数
    order?: MyOrderDTO // 排序字段
    sort?: Record<string, SortOrder> // 排序字段（只在前端使用，实际传值：order）
}

// 分页排序查询
export function GameSocketServerPage(form: GameSocketServerPageDTO, config?: AxiosRequestConfig) {
    return $http.myProPagePost<GameSocketServerDO>('/game/socketServer/page', form, config)
}
