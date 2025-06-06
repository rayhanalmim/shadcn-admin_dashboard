import {
  IconApps,
  IconBoxSeam,
  // IconHexagonNumber1,
  // IconHexagonNumber2,
  // IconHexagonNumber3,
  // IconHexagonNumber4,
  // IconHexagonNumber5,
  IconLayoutDashboard,
  IconMessages,
  IconRouteAltLeft,
  IconTruck,
  // IconUserShield,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/dashboard',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Chats',
    label: '9',
    href: '/dashboard/chats',
    icon: <IconMessages size={18} />,
  },
  {
    title: 'Apps',
    label: '',
    href: '/dashboard/apps',
    icon: <IconApps size={18} />,
  },
  // {
  //   title: 'Authentication',
  //   label: '',
  //   href: '',
  //   icon: <IconUserShield size={18} />,
  //   sub: [
  //     {
  //       title: 'Sign In (email + password)',
  //       label: '',
  //       href: '/sign-in',
  //       icon: <IconHexagonNumber1 size={18} />,
  //     },
  //     {
  //       title: 'Sign In (Box)',
  //       label: '',
  //       href: '/sign-in-2',
  //       icon: <IconHexagonNumber2 size={18} />,
  //     },
  //     {
  //       title: 'Sign Up',
  //       label: '',
  //       href: '/sign-up',
  //       icon: <IconHexagonNumber3 size={18} />,
  //     },
  //     {
  //       title: 'Forgot Password',
  //       label: '',
  //       href: '/forgot-password',
  //       icon: <IconHexagonNumber4 size={18} />,
  //     },
  //     {
  //       title: 'OTP',
  //       label: '',
  //       href: '/otp',
  //       icon: <IconHexagonNumber5 size={18} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Users',
  //   label: '',
  //   href: '/users',
  //   icon: <IconUsers size={18} />,
  // },
  {
    title: 'Settings',
    label: '3',
    href: '/dashboard/requests',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'User Profile',
        href: '/dashboard/user-profile',
        icon: <IconTruck size={18} />,
      },
      {
        title: 'Account Settings',
        label: '',
        href: '/dashboard/user-settings',
        icon: <IconBoxSeam size={18} />,
      },

    ],
  },
  {
    title: 'Ai',
    label: '1',
    href: '/requests',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'Train AI',
        href: '/dashboard/train-ai',
        icon: <IconTruck size={18} />,
      },
      {
        title: 'System Settings',
        label: '',
        href: '/dashboard/system-settings',
        icon: <IconBoxSeam size={18} />,
      },
      // {
      //   title: 'Account Settings',
      //   label: '',
      //   href: '/user-settings',
      //   icon: <IconBoxSeam size={18} />,
      // },
      // {
      //   title: 'System Settings',
      //   label: '',
      //   href: '/system-settings',
      //   icon: <IconBoxSeam size={18} />,
      // },
    ],
  },
  // {
  //   title: 'Analysis',
  //   label: '',
  //   href: '/analysis',
  //   icon: <IconChartHistogram size={18} />,
  // },
  // {
  //   title: 'Extra Components',
  //   label: '',
  //   href: '/extra-components',
  //   icon: <IconComponents size={18} />,
  // },
  // {
  //   title: 'Error Pages',
  //   label: '',
  //   href: '',
  //   icon: <IconExclamationCircle size={18} />,
  //   sub: [
  //     {
  //       title: 'Not Found',
  //       label: '',
  //       href: '/404',
  //       icon: <IconError404 size={18} />,
  //     },
  //     {
  //       title: 'Internal Server Error',
  //       label: '',
  //       href: '/500',
  //       icon: <IconServerOff size={18} />,
  //     },
  //     {
  //       title: 'Maintenance Error',
  //       label: '',
  //       href: '/503',
  //       icon: <IconBarrierBlock size={18} />,
  //     },
  //     {
  //       title: 'Unauthorised Error',
  //       label: '',
  //       href: '/401',
  //       icon: <IconLock size={18} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Settings',
  //   label: '',
  //   href: '/settings',
  //   icon: <IconSettings size={18} />,
  // },
]
