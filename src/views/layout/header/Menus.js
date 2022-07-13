import { Button, IconButton } from "@mui/material";
import CustomLink from "components/CustomLink";
import React from "react";
import { MENU_DATA } from "./menuData";

export default function Menus() {
  return (
    <div>
      <div className="sm-down:hidden flex items-center">
        {MENU_DATA.map((item, itemIndex) => (
          <CustomLink key={itemIndex} to={item?.to} target="_blank">
            <Button color="inherit" startIcon={item?.icon ?? null}>
              {item?.label ?? ""}
            </Button>
          </CustomLink>
        ))}
      </div>
      <div className="sm:hidden flex items-center">
        {MENU_DATA.map((item, itemIndex) => (
          <CustomLink key={itemIndex} to={item?.to} target="_blank">
            <IconButton color="inherit">{item?.icon ?? null}</IconButton>
          </CustomLink>
        ))}
      </div>
    </div>
  );
}
