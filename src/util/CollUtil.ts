export default {
    // 是否为空
    IsNotEmpty(arr?: any[]) {
        return arr && arr.length
    },
    // 是否不为空
    isEmpty(arr?: any[]) {
        return !(this.IsNotEmpty(arr))
    }
}
