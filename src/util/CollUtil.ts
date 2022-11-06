export default {
    // 是否为空
    isNotEmpty(arr?: any[]) {
        return arr && arr.length
    },
    // 是否不为空
    isEmpty(arr?: any[]) {
        return !(this.isNotEmpty(arr))
    }
}
