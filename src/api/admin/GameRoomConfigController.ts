import {SortOrder} from "antd/es/table/interface";
import MyOrderDTO from "@/model/dto/MyOrderDTO";
import $http from "@/util/HttpUtil";
import {AxiosRequestConfig} from "axios";

export interface NotEmptyIdSet {
    idSet: number[] // 主键 idSet
}

// 批量删除
export function GameRoomConfigDeleteByIdSet(form: NotEmptyIdSet, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/roomConfig/deleteByIdSet', form, config)
}

export interface NotNullId {
    id: number // 主键id {"min":1}
}

export interface GameRoomConfigDO {
    name?: string // 房间配置名称
    orderNo?: number // 排序号（值越大越前面，默认为 0）
    maxUserTotal?: number // 房间最大人数
    maxRoomTotal?: number // 房间最大数量
    playType?: 1 | 2 | 3 // 房间玩法：1 大厅 2 捕鱼 3 斗地主
    roomType?: 1000 | 2000 | 2001 | 2002 | 2003 | 3000 // 房间类型，例如：1000 普通大厅 2000 体验场 2001 普通场 2002 挑战场 2003 大奖赛
    useMoneyType?: 1 | 2 | 3 | 4 // 消耗货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    gotMoneyType?: 1 | 2 | 3 | 4 // 得到货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    limitMoneyType?: 1 | 2 | 3 | 4 // 用户限制货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    minUserMoney?: number // 用户携带货币最低值
    maxUserMoney?: number // 用户携带货币最高值
    limitExpType?: 1 // 用户限制经验值类型：1 普通经验
    minUserExp?: number // 最低用户经验值
    maxUserExp?: number // 最高用户经验值
    roomExpType?: 1 // 房间增加经验值的类型：1 普通经验
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
export function GameRoomConfigInfoById(form: NotNullId, config?: AxiosRequestConfig) {
    return $http.myProPost<GameRoomConfigDO>('/game/roomConfig/infoById', form, config)
}

export interface GameRoomConfigInsertOrUpdateDTO {
    id?: number // 主键id {"min":1}
    name: string // 房间配置名称 {"sizeMax":10,"sizeMin":0}
    orderNo?: number // 排序号（值越大越前面，默认为 0）
    maxUserTotal?: number // 房间最大人数
    maxRoomTotal?: number // 房间最大数量
    playType?: 1 | 2 | 3 // 房间玩法：1 大厅 2 捕鱼 3 斗地主
    roomType?: 1000 | 2000 | 2001 | 2002 | 2003 | 3000 // 房间类型，例如：1000 普通大厅 2000 体验场 2001 普通场 2002 挑战场 2003 大奖赛
    useMoneyType?: 1 | 2 | 3 | 4 // 消耗货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    gotMoneyType?: 1 | 2 | 3 | 4 // 得到货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    limitMoneyType?: 1 | 2 | 3 | 4 // 用户限制货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    minUserMoney?: number // 用户携带货币最低值
    maxUserMoney?: number // 用户携带货币最高值
    limitExpType?: 1 // 用户限制经验值类型：1 普通经验
    minUserExp?: number // 最低用户经验值
    maxUserExp?: number // 最高用户经验值
    roomExpType?: 1 // 房间增加经验值的类型：1 普通经验
    enableFlag?: boolean // 是否启用
    remark?: string // 备注
}

// 新增/修改
export function GameRoomConfigInsertOrUpdate(form: GameRoomConfigInsertOrUpdateDTO, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/roomConfig/insertOrUpdate', form, config)
}

export interface GameRoomConfigPageDTO {
    name?: string // 房间配置名称
    playType?: 1 | 2 | 3 // 房间玩法：1 大厅 2 捕鱼 3 斗地主
    roomType?: 1000 | 2000 | 2001 | 2002 | 2003 | 3000 // 房间类型，例如：1000 普通大厅 2000 体验场 2001 普通场 2002 挑战场 2003 大奖赛
    useMoneyType?: 1 | 2 | 3 | 4 // 消耗货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    gotMoneyType?: 1 | 2 | 3 | 4 // 得到货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    roomExpType?: 1 // 房间增加经验值的类型：1 普通经验
    remark?: string // 备注
    current?: number // 第几页
    pageSize?: number // 每页显示条数
    order?: MyOrderDTO // 排序字段
    sort?: Record<string, SortOrder> // 排序字段（只在前端使用，实际传值：order）
}

// 分页排序查询
export function GameRoomConfigPage(form: GameRoomConfigPageDTO, config?: AxiosRequestConfig) {
    return $http.myProPagePost<GameRoomConfigDO>('/game/roomConfig/page', form, config)
}
