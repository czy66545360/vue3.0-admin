import Vue, {VNode} from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  // 声明 window 实例的属性
  interface Window {
    $utils: any; // 工具包
    $fly: any; // ajax
    $localforage: any; // indexedDB
  }
}
