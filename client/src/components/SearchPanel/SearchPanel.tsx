import {
  React, Paper, InputBase, IconButton, SearchIcon,
} from '../../imports';
import './SearchPanel.css';

const SearchPanel: React.FC = () => (
  <Paper component="form" className="search-panel">
    <InputBase
      className="search-panel__input"
      placeholder="Search..."
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchPanel;
