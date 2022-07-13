import { Code, GitHub } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import CustomLink from "components/CustomLink";
import { GITHUB, REPOSITORY } from "config";

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
          <div className="sm-down:hidden flex items-center">
            <CustomLink to={GITHUB} target="_blank">
              <Button color="inherit" startIcon={<GitHub />}>
                Github
              </Button>
            </CustomLink>
            <CustomLink to={REPOSITORY} target="_blank">
              <Button color="inherit" startIcon={<Code />}>
                Show Code
              </Button>
            </CustomLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
