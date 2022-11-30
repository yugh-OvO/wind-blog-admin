import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ONLINELOG: AppRouteRecordRaw = {
  path: '/online',
  name: 'online',
  component: DEFAULT_LAYOUT,
  redirect: '/online/list',
  meta: {
    locale: '在线用户',
    icon: 'icon-file',
    requiresAuth: true,
    roles: ['admin'],
    hideChildrenInMenu: true,
    order: 9,
  },
  children: [
    {
      path: 'list',
      name: 'onlineList',
      component: () => import('@/views/online/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['admin'],
        activeMenu: 'online',
      },
    },
  ],
};

export default ONLINELOG;
