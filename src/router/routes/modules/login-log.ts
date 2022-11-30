import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LOGINLOG: AppRouteRecordRaw = {
  path: '/login-log',
  name: 'loginLog',
  component: DEFAULT_LAYOUT,
  redirect: '/login-log/list',
  meta: {
    locale: '登录日志',
    icon: 'icon-file',
    requiresAuth: true,
    roles: ['admin'],
    hideChildrenInMenu: true,
    order: 9,
  },
  children: [
    {
      path: 'list',
      name: 'loginLogList',
      component: () => import('@/views/login-log/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['admin'],
        activeMenu: 'loginLog',
      },
    },
  ],
};

export default LOGINLOG;
