import Vue from 'vue';
import utils from '@/utils'; // 工具包

Vue.filter('formatTime', utils.formatTimeFn);
