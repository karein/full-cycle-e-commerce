"use client"

import {
  AccountCircle as AccountCircleIcon,
  ListAlt as ListAltIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { IconButton, Menu, MenuItem, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export type UserMenuProps = {
  user: any | null
}

export function UserMenu(props: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const redirectToCart = () => {
    handleClose()
    router.push("/my-cart")
  }

  const redirectToMyOrders = () => {
    handleClose()
    router.push("/my-orders")
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleClose()
  }

  return props.user ? (
    <div>
      <IconButton size="large" onClick={handleMenu}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={redirectToCart}>
          <ShoppingCartIcon />
          <Typography>Meu Carrinho</Typography>
        </MenuItem>
        <MenuItem onClick={redirectToMyOrders}>
          <ListAltIcon />
          <Typography>Meus pedidos</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon />
          <Typography>sair</Typography>
        </MenuItem>
      </Menu>
    </div>
  ) : (
    <Link href={"/login"} style={{ textDecoration: "none" }}>
      <Typography color="text.primary" sx={{ ml: 3, fontWeight: 500 }}>
        Entrar
      </Typography>
    </Link>
  )
}
