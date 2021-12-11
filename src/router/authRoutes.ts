import { lazy } from 'react'

const authRoutes = [
  {
    path: '/home',
    component: lazy(() => import('views/home/Home')),
    exact: true,
    header: true,
  },
]

export default authRoutes
