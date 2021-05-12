import {
  React, Paper, InputBase, IconButton,
} from '../../imports';

const SearchPanel: React.FC = () => (
  <Paper component="form">
    <InputBase
      placeholder="Search..."
    />
    <IconButton />
  </Paper>
);

export default SearchPanel;
