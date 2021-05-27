import { React, AppBar, Button, Toolbar, Typography } from 'imports';

export const Header: React.FC = (): React.ReactElement => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4">Laptop Planet</Typography>
      <Button>Login</Button>
    </Toolbar>
  </AppBar>
);
