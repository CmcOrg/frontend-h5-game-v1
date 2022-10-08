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

// 房间玩法
export const GameRoomConfigPlayTypeEnum = new Map<number, IGameRoomConfigPlayTypeEnumValue>();
GameRoomConfigPlayTypeEnum.set(1, {text: "大厅", roomTypeSet: [1000]})
GameRoomConfigPlayTypeEnum.set(2, {text: "捕鱼", roomTypeSet: [2000, 2001, 2002, 2003]})
GameRoomConfigPlayTypeEnum.set(3, {text: "斗地主", roomTypeSet: [3000]})

// 将 map转换为 下拉选 list
export const GameRoomConfigPlayTypeEnumSelectList = NumberTextMapToSelectList(GameRoomConfigPlayTypeEnum)

// 房间类型
export const GameRoomConfigRoomTypeEnum = new Map<number, string>();
GameRoomConfigRoomTypeEnum.set(1000, "大厅-普通")
GameRoomConfigRoomTypeEnum.set(2000, "捕鱼-体验场")
GameRoomConfigRoomTypeEnum.set(2001, "捕鱼-普通场")
GameRoomConfigRoomTypeEnum.set(2002, "捕鱼-挑战场")
GameRoomConfigRoomTypeEnum.set(2003, "捕鱼-大奖赛")
GameRoomConfigRoomTypeEnum.set(3000, "斗地主-普通")

// 将 map转换为 下拉选 list
export const GameRoomConfigRoomTypeEnumSelectList = NumberStringMapToSelectList(GameRoomConfigRoomTypeEnum)

// 用户经验值类型
export const GameUserExpTypeEnum = new Map<number, string>();
GameUserExpTypeEnum.set(-1, "无")
GameUserExpTypeEnum.set(1, "普通经验")

// 将 map转换为 下拉选 list
export const GameUserExpTypeEnumSelectList = NumberStringMapToSelectList(GameUserExpTypeEnum)
