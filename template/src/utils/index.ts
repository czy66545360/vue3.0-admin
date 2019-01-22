import Vue from 'vue';
import localforage from 'localforage';

/**
 * 不足10 补 0
 * @param num // 被补数
 */
const supplementZeroFn = (num: any) => {
  num = Number(num);
  return (num < 10 ? '0' + num : num);
};
const utils: any = { // 工具包
  /**
   * 格式化时间戳
   * @param val // 数据
   * @param format // 格式
   */
  formatTimeFn(val: any, format: string = 'YYYY-MM-DD hh:mm:ss'): string {
    let Dates = null;
    format = format || 'YYYY-MM-DD hh:mm:ss';
    if (!val) {
      return '无';
    }
    if (val instanceof Object) {
      Dates = new Date(val);
    } else if (Number(val)) {
      val = (val += '').length === 13 ? Number(val) : Number(val) * 1000;
      Dates = new Date(val);
    } else {
      return val;
    }
    const year: any = Dates.getFullYear(); // 年
    const month: any = supplementZeroFn(Dates.getMonth() + 1); // 月
    const date: any = supplementZeroFn(Dates.getDate()); // 日
    const hour: any = supplementZeroFn(Dates.getHours()); // 时
    const minute: any = supplementZeroFn(Dates.getMinutes()); // 分
    const second: any = supplementZeroFn(Dates.getSeconds()); // 秒
    format = format.replace(/YYYY/, year);
    format = format.replace(/MM/, month);
    format = format.replace(/DD/, date);
    format = format.replace(/hh/, hour);
    format = format.replace(/mm/, minute);
    format = format.replace(/ss/, second);
    return format;
  },
  supplementZeroFn,
};
window.$utils = utils; // 添加到 Vue 原型
Vue.$utils = utils;
window.$localforage = localforage; // 添加到 Vue 原型
Vue.$localforage = localforage;

export default utils;
