/**
 * @author 陆海鹍
 * @date 2020-07-15 15:26:18
 * @description 描述 防抖函数
 * @email luhaikun@cecdat.com
 * @param {number} 延迟时间
 * @param {immediate} 是否立即执行
 * @copyright Copyright 2018 CEC(Fujian) Healthcare Big Data Operation Service Co., Ltd. All rights reserved.
 */
export default function debounce(
  func: () => void,
  delay = 250,
  immediate = false
): () => void {
  let timer: number = null
  return function (...args: []) {
    if (immediate && !timer) func.apply(this, ...args)
    if (timer) clearTimeout(timer)
    timer = window.setTimeout(() => {
      if (!immediate) func.apply(this, ...args)
      timer = null
    }, delay)
  }
}
