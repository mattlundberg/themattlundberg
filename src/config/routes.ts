export interface Route {
  path: string
  label: string
  icon?: string
  showInNav?: boolean
  showInFooter?: boolean
}

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    showInNav: true,
    showInFooter: true,
  },
  {
    path: '/tools',
    label: 'Tools',
    showInNav: true,
    showInFooter: true,
  },
  {
    path: '/audit',
    label: 'AI Audit',
    showInNav: false,
    showInFooter: false,
  },
  {
    path: '/contact',
    label: 'Contact',
    showInNav: true,
    showInFooter: true,
  },
  {
    path: '/schedule',
    label: 'Schedule',
    showInNav: true,
    showInFooter: true,
  },
] 