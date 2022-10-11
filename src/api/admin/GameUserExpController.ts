import {SortOrder} from "antd/es/table/interface";
import MyOrderDTO from "@/model/dto/MyOrderDTO";
import $http from "@/util/HttpUtil";
import {AxiosRequestConfig} from "axios";

export interface NotEmptyIdSet {
    idSet: number[] // 主键 idSet
}

// 批量删除
export function GameUserExpDeleteByIdSet(form: NotEmptyIdSet, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/userExp/deleteByIdSet', form, config)
}

export interface NotNullId {
    id: number // 主键id {"min":1}
}

export interface GameUserExpDO {
    id?: number // 用户主键 id
    type?: -1 | 1 // 经验值类型：1 普通经验
    value?: number // 经验值
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
export function GameUserExpInfoById(form: NotNullId, config?: AxiosRequestConfig) {
    return $http.myProPost<GameUserExpDO>('/game/userExp/infoById', form, config)
}

export interface GameUserExpPageDTO {
    id?: number // 用户主键 id
    type?: -1 | 1 // 经验值类型：1 普通经验
    current?: number // 第几页
    pageSize?: number // 每页显示条数
    order?: MyOrderDTO // 排序字段
    sort?: Record<string, SortOrder> // 排序字段（只在前端使用，实际传值：order）
}

// 分页排序查询
export function GameUserExpPage(form: GameUserExpPageDTO, config?: AxiosRequestConfig) {
    return $http.myProPagePost<GameUserExpDO>('/game/userExp/page', form, config)
}
