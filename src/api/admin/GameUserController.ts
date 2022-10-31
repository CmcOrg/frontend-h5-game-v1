import {SortOrder} from "antd/es/table/interface";
import MyOrderDTO from "@/model/dto/MyOrderDTO";
import $http from "@/util/HttpUtil";
import {AxiosRequestConfig} from "axios";

export interface NotEmptyIdSet {
    idSet: number[] // 主键 idSet
}

// 批量删除
export function GameUserDeleteByIdSet(form: NotEmptyIdSet, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/user/deleteByIdSet', form, config)
}

export interface NotNullId {
    id: number // 主键id {"min":1}
}

export interface GameUserDO {
    nickname?: string // 昵称
    bio?: string // 个人简介
    avatarUri?: string // 头像uri
    areaServiceId?: number // 区服主键 id（外键）
    userId?: number // 用户主键id（外键）
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
export function GameUserInfoById(form: NotNullId, config?: AxiosRequestConfig) {
    return $http.myProPost<GameUserDO>('/game/user/infoById', form, config)
}

export interface GameUserInsertOrUpdateDTO {
    nickname: string // 昵称 {"regexp":"^[\\u4E00-\\u9FA5A-Za-z0-9_-]{2,20}$"}
    bio?: string // 个人简介
    avatarUri?: string // 头像uri
    areaServiceId: number // 区服主键 id（外键） {"min":1}
    userId: number // 用户主键id（外键） {"min":1}
    enableFlag?: boolean // 正常/冻结
    id?: number // 主键id {"min":1}
}

// 新增/修改
export function GameUserInsertOrUpdate(form: GameUserInsertOrUpdateDTO, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/user/insertOrUpdate', form, config)
}

export interface GameUserPageDTO {
    id?: number // 主键id
    nickname?: string // 昵称
    avatarUri?: string // 头像uri
    areaServiceId?: number // 区服主键 id（外键）
    userId?: number // 用户主键id（外键）
    current?: number // 第几页
    pageSize?: number // 每页显示条数
    order?: MyOrderDTO // 排序字段
    sort?: Record<string, SortOrder> // 排序字段（只在前端使用，实际传值：order）
}

// 分页排序查询
export function GameUserPage(form: GameUserPageDTO, config?: AxiosRequestConfig) {
    return $http.myProPagePost<GameUserDO>('/game/user/page', form, config)
}
