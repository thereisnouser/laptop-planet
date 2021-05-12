import {
  React, Paper, InputBase, IconButton, SearchIcon,
} from '../../imports';

const SearchPanel: React.FC = () => (
  <Paper component="form">
    <InputBase
      placeholder="Search..."
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchPanel;
