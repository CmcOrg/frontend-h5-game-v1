import {SortOrder} from "antd/es/table/interface";
import MyOrderDTO from "@/model/dto/MyOrderDTO";
import $http from "@/util/HttpUtil";
import {AxiosRequestConfig} from "axios";

export interface NotEmptyIdSet {
    idSet: number[] // 主键 idSet
}

// 批量删除
export function GameRoomCurrentDeleteByIdSet(form: NotEmptyIdSet, config?: AxiosRequestConfig) {
    return $http.myPost<string>('/game/roomCurrent/deleteByIdSet', form, config)
}

// 退出房间
export function GameRoomCurrentExitRoom(config?: AxiosRequestConfig) {
    return $http.myPost<void>('/game/roomCurrent/exitRoom', undefined, config)
}

export interface NotNullId {
    id: number // 主键id {"min":1}
}

export interface GameRoomCurrentDO {
    id?: number // 主键id
    createTime?: string // 创建时间
    roomConfigId?: number // 房间配置主键 id
    socketServerId?: number // socket服务器主键 id
    currentConnectTotal?: number // 当前连接数
}

// 通过主键id，查看详情
export function GameRoomCurrentInfoById(form: NotNullId, config?: AxiosRequestConfig) {
    return $http.myProPost<GameRoomCurrentDO>('/game/roomCurrent/infoById', form, config)
}

export interface GameRoomCurrentJoinRoomDTO {
    roomConfigId?: number // 房间配置主键 id {"min":1}
}

export interface GameRoomCurrentJoinRoomVO {
    host?: string // host
    port?: number // 端口，备注：host + 端口，可以表示唯一标识
    securityCode?: string // 连接码：用于获取：用户主键 id，格式：simple-uuid
}

// 加入房间
export function GameRoomCurrentJoinRoom(form: GameRoomCurrentJoinRoomDTO, config?: AxiosRequestConfig) {
    return $http.myPost<GameRoomCurrentJoinRoomVO>('/game/roomCurrent/joinRoom', form, config)
}

export interface GameRoomCurrentPageDTO {
    id?: number // 主键 id
    roomConfigId?: number // 房间配置主键 id
    name?: string // 房间配置名称
    playType?: 1 | 2 | 3 // 房间玩法：1 大厅（无法重连） 2 捕鱼 3 斗地主
    roomType?: 1000 | 2000 | 2001 | 2002 | 2003 | 3000 // 房间类型，例如：1000 普通大厅 2000 体验场 2001 普通场 2002 挑战场 2003 大奖赛
    useMoneyType?: -1 | 1 | 2 | 3 | 4 // 消耗货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    gotMoneyType?: -1 | 1 | 2 | 3 | 4 // 得到货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    limitMoneyType?: -1 | 1 | 2 | 3 | 4 // 用户限制货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    limitExpType?: -1 | 1 // 用户限制经验值类型：1 普通经验
    roomExpType?: -1 | 1 // 房间增加经验值的类型：1 普通经验
    socketServerId?: number // socket服务器主键 id
    current?: number // 第几页
    pageSize?: number // 每页显示条数
    order?: MyOrderDTO // 排序字段
    sort?: Record<string, SortOrder> // 排序字段（只在前端使用，实际传值：order）
}

export interface GameRoomCurrentPageVO {
    id?: number // 主键 id
    roomConfigId?: number // 房间配置主键 id
    name?: string // 房间配置名称
    playType?: 1 | 2 | 3 // 房间玩法：1 大厅（无法重连） 2 捕鱼 3 斗地主
    roomType?: 1000 | 2000 | 2001 | 2002 | 2003 | 3000 // 房间类型，例如：1000 普通大厅 2000 体验场 2001 普通场 2002 挑战场 2003 大奖赛
    useMoneyType?: -1 | 1 | 2 | 3 | 4 // 消耗货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    gotMoneyType?: -1 | 1 | 2 | 3 | 4 // 得到货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    limitMoneyType?: -1 | 1 | 2 | 3 | 4 // 用户限制货币类型：1 金币 2 龙晶 3 钻石 4 临时货币（退房间清零）
    limitExpType?: -1 | 1 // 用户限制经验值类型：1 普通经验
    roomExpType?: -1 | 1 // 房间增加经验值的类型：1 普通经验
    socketServerId?: number // socket服务器主键 id
    createTime?: string // 创建时间
    roomCurrentConnectTotal?: number // 当前连接数
}

// 分页排序查询
export function GameRoomCurrentPage(form: GameRoomCurrentPageDTO, config?: AxiosRequestConfig) {
    return $http.myProPagePost<GameRoomCurrentPageVO>('/game/roomCurrent/page', form, config)
}
