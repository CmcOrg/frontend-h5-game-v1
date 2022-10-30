import {SortOrder} from "antd/es/table/interface";
import MyOrderDTO from "@/model/dto/MyOrderDTO";
import $http from "@/util/HttpUtil";
import {AxiosRequestConfig} from "axios";

export interface NotEmptyIdSet {
    idSet: number[] // 主键 idSet
}

// 批量删除
export function GameAreaServiceDeleteByIdSet(form: NotEmptyIdSet, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/areaService/deleteByIdSet', form, config)
}

export interface NotNullId {
    id: number // 主键id {"min":1}
}

export interface GameAreaServiceDO {
    name?: string // 区服名称
    state?: 0 | 1 | 2 // 区服状态：0 关闭 1 正常 2 维护
    userGameUserMaxNumber?: number // 该区服下，每个用户最多可创建的角色个数 {"min":1}
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
export function GameAreaServiceInfoById(form: NotNullId, config?: AxiosRequestConfig) {
    return $http.myProPost<GameAreaServiceDO>('/game/areaService/infoById', form, config)
}

export interface GameAreaServiceInsertOrUpdateDTO {
    name: string // 区服名称 {"sizeMax":10,"sizeMin":0}
    state: 0 | 1 | 2 // 区服状态：0 关闭 1 正常 2 维护
    userGameUserMaxNumber?: number // 该区服下，每个用户最多可创建的角色个数 {"min":1}
    remark?: string // 备注
    id?: number // 主键id {"min":1}
}

// 新增/修改
export function GameAreaServiceInsertOrUpdate(form: GameAreaServiceInsertOrUpdateDTO, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/areaService/insertOrUpdate', form, config)
}

export interface GameAreaServicePageDTO {
    name?: string // 区服名称
    state?: 0 | 1 | 2 // 区服状态：0 关闭 1 正常 2 维护
    remark?: string // 备注
    current?: number // 第几页
    pageSize?: number // 每页显示条数
    order?: MyOrderDTO // 排序字段
    sort?: Record<string, SortOrder> // 排序字段（只在前端使用，实际传值：order）
}

// 分页排序查询
export function GameAreaServicePage(form: GameAreaServicePageDTO, config?: AxiosRequestConfig) {
    return $http.myProPagePost<GameAreaServiceDO>('/game/areaService/page', form, config)
}

export interface GameAreaServiceUserPageDTO {
    name?: string // 区服名称
    current?: number // 第几页
    pageSize?: number // 每页显示条数
    order?: MyOrderDTO // 排序字段
}

// 用户，分页排序查询
export function GameAreaServiceUserPage(form: GameAreaServiceUserPageDTO, config?: AxiosRequestConfig) {
    return $http.myProPagePost<GameAreaServiceDO>('/game/areaService/user/page', form, config)
}
