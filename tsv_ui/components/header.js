import { Button, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button>login</Button>
      </Toolbar>
    </AppBar>
  );
};
