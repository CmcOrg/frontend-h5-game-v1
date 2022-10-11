import {SortOrder} from "antd/es/table/interface";
import MyOrderDTO from "@/model/dto/MyOrderDTO";
import $http from "@/util/HttpUtil";
import {AxiosRequestConfig} from "axios";

export interface NotEmptyIdSet {
    idSet: number[] // 主键 idSet
}

// 批量删除
export function GameUserConnectDeleteByIdSet(form: NotEmptyIdSet, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/userConnect/deleteByIdSet', form, config)
}

export interface NotNullId {
    id: number // 主键id {"min":1}
}

export interface GameUserConnectDO {
    id?: number // 用户主键 id
    roomCurrentId?: number // 当前房间主键 id
    createTime?: string // 创建时间
    updateTime?: string // 修改时间
}

// 通过主键id，查看详情
export function GameUserConnectInfoById(form: NotNullId, config?: AxiosRequestConfig) {
    return $http.myProPost<GameUserConnectDO>('/game/userConnect/infoById', form, config)
}

export interface GameUserConnectPageDTO {
    id?: number // 用户主键 id
    roomCurrentId?: number // 当前房间主键 id
    current?: number // 第几页
    pageSize?: number // 每页显示条数
    order?: MyOrderDTO // 排序字段
    sort?: Record<string, SortOrder> // 排序字段（只在前端使用，实际传值：order）
}

// 分页排序查询
export function GameUserConnectPage(form: GameUserConnectPageDTO, config?: AxiosRequestConfig) {
    return $http.myProPagePost<GameUserConnectDO>('/game/userConnect/page', form, config)
}
