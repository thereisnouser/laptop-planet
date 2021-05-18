import {
  React, useState,
  Paper, InputBase, IconButton, SearchIcon,
} from '../../imports';
import './SearchPanel.css';

interface SearchPanelProps {
  onSearch: (property: string, value: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch }): React.ReactElement => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSearch('description', value);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} className="search-panel">
      <InputBase
        onChange={(e) => setValue(e.target.value)}
        className="search-panel__input"
        placeholder="Search..."
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchPanel;
