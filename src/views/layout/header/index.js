import { AppBar, Toolbar, Typography } from "@mui/material";
import Menus from "./Menus";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Reading List
          </Typography>
          <Menus />
        </Toolbar>
      </AppBar>
    </div>
  );
}
