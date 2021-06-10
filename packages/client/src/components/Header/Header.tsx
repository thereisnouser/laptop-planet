import { React, AppBar, Button, Toolbar, Typography } from 'imports';
import './Header.css';

export const Header: React.FC = () => (
  <AppBar position="static" color="inherit" className="header__appbar">
    <Toolbar>
      <Typography variant="h4" className="header__sign">
        Laptop Planet
      </Typography>
      <Button color="primary" variant="outlined" className="header__login-button">
        Login
      </Button>
    </Toolbar>
  </AppBar>
);
