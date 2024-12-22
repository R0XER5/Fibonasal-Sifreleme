import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cibDiscover,
  cilDrop, cilHome, cilInfo,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Anasayfa',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Fibonasal Şifreleme',
  },
  {
    component: CNavItem,
    name: 'Şifreleme Algoritması',
    to: '/fibonasal/algorithm',
    icon: <CIcon icon={cibDiscover} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Bilgiler',
    to: '/fibonasal/info',
    icon: <CIcon icon={cibDiscover} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Arayüz Kullanımı',
    to: '/fibonasal/manuel',
    icon: <CIcon icon={cibDiscover} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Şifreleme Örnekleri',
    to: '/fibonasal/examples',
    icon: <CIcon icon={cibDiscover} customClassName="nav-icon" />,
  }
]

export default _nav
