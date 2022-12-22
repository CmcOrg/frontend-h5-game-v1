import {NumberStringMapToSelectList, NumberTextMapToSelectList} from "@/util/DictUtil";

// 货币类型
export const GameMoneyTypeEnum = new Map<number, string>();
GameMoneyTypeEnum.set(-1, "无")
GameMoneyTypeEnum.set(1, "金币")
GameMoneyTypeEnum.set(2, "龙晶")
GameMoneyTypeEnum.set(3, "钻石")
GameMoneyTypeEnum.set(4, "临时货币") // 退房间清零

// 将 map转换为 下拉选 list
export const GameMoneyTypeEnumSelectList = NumberStringMapToSelectList(GameMoneyTypeEnum)

interface IGameRoomConfigPlayTypeEnumValue {
    text: string
    roomTypeSet: number[] // 支持的房间类型
}

export const GAME_ROOM_TYPE_CODE_OBJ = {
    HALL_GENERAL: 1000, // 大厅-普通
    FISHING_ATTEMPT: 2000, // 捕鱼-体验场
    FISHING_GENERAL: 2001, // 捕鱼-普通场
    FISHING_CHALLENGE: 2002, // 捕鱼-挑战场
    FISHING_GRAND: 2003, // 捕鱼-大奖赛
    FIGHTING_LANDLORD_GENERAL: 3000, // 斗地主-普通
}

// 房间玩法
export const GameRoomConfigPlayTypeEnum = new Map<number, IGameRoomConfigPlayTypeEnumValue>();
GameRoomConfigPlayTypeEnum.set(1, {text: "大厅", roomTypeSet: [GAME_ROOM_TYPE_CODE_OBJ.HALL_GENERAL]})
GameRoomConfigPlayTypeEnum.set(2, {
    text: "捕鱼",
    roomTypeSet: [GAME_ROOM_TYPE_CODE_OBJ.FISHING_ATTEMPT, GAME_ROOM_TYPE_CODE_OBJ.FISHING_GENERAL, GAME_ROOM_TYPE_CODE_OBJ.FISHING_CHALLENGE, GAME_ROOM_TYPE_CODE_OBJ.FISHING_GRAND]
})
GameRoomConfigPlayTypeEnum.set(3, {text: "斗地主", roomTypeSet: [GAME_ROOM_TYPE_CODE_OBJ.FIGHTING_LANDLORD_GENERAL]})

// 将 map转换为 下拉选 list
export const GameRoomConfigPlayTypeEnumSelectList = NumberTextMapToSelectList(GameRoomConfigPlayTypeEnum)

// 房间类型
export const GameRoomConfigRoomTypeEnum = new Map<number, string>();
GameRoomConfigRoomTypeEnum.set(GAME_ROOM_TYPE_CODE_OBJ.HALL_GENERAL, "大厅-普通")
GameRoomConfigRoomTypeEnum.set(GAME_ROOM_TYPE_CODE_OBJ.FISHING_ATTEMPT, "捕鱼-体验场")
GameRoomConfigRoomTypeEnum.set(GAME_ROOM_TYPE_CODE_OBJ.FISHING_GENERAL, "捕鱼-普通场")
GameRoomConfigRoomTypeEnum.set(GAME_ROOM_TYPE_CODE_OBJ.FISHING_CHALLENGE, "捕鱼-挑战场")
GameRoomConfigRoomTypeEnum.set(GAME_ROOM_TYPE_CODE_OBJ.FISHING_GRAND, "捕鱼-大奖赛")
GameRoomConfigRoomTypeEnum.set(GAME_ROOM_TYPE_CODE_OBJ.FIGHTING_LANDLORD_GENERAL, "斗地主-普通")

// 将 map转换为 下拉选 list
export const GameRoomConfigRoomTypeEnumSelectList = NumberStringMapToSelectList(GameRoomConfigRoomTypeEnum)

// 用户经验值类型
export const GameUserExpTypeEnum = new Map<number, string>();
GameUserExpTypeEnum.set(-1, "无")
GameUserExpTypeEnum.set(1, "普通经验")

// 将 map转换为 下拉选 list
export const GameUserExpTypeEnumSelectList = NumberStringMapToSelectList(GameUserExpTypeEnum)
