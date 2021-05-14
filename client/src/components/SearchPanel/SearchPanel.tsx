import {
  React, useState,
  Paper, InputBase, IconButton, SearchIcon,
} from '../../imports';
import './SearchPanel.css';

const SearchPanel: React.FC = (): React.ReactElement => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} className="search-panel">
      <InputBase onChange={(e) => setValue(e.target.value)} className="search-panel__input" placeholder="Search..." />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchPanel;
