import { Code, Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import CustomLink from "components/CustomLink";
import { REPOSITORY } from "config";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Reading List
          </Typography>
          <CustomLink to={REPOSITORY} target="_blank">
            <Button color="inherit" startIcon={<Code />}>
              Go to Code
            </Button>
          </CustomLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
