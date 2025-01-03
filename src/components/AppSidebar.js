import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from "src/assets/images/logo.png"
import {
  CCloseButton, CFormLabel,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

// sidebar nav config
import navigation from '../_nav'
import CIcon from "@coreui/icons-react";
import {Link} from "react-router-dom";

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand className="d-none d-md-flex">
          <CFormLabel
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textDecoration: "none",

            }}
          >
            <img src={logo} alt="Logo" height={40} />
            <span style={{ marginLeft: "8px",textDecoration: "none"
            }}>Zino Kriptoloji</span>
          </CFormLabel>

        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
