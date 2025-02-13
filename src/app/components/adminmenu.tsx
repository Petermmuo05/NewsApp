"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuImg from "../../../public/white_menu.svg";
import Image from "next/image";
import SignOut from "./signOutButton";
import { useApp } from "../../../lib/appcontext";
import Link from "next/link";

export default function AdminMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Image
        src={MenuImg}
        onClick={handleClick}
        className="w-10 h-10"
        alt="Menu"
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Link href="/admin">Your Articles</Link>
        </MenuItem>
        <hr />
        <SignOut />
      </Menu>
    </div>
  );
}
