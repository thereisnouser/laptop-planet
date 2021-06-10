import { React, Pagination } from 'imports';
import './PageNumbers.css';

interface PageNumberProps {
  currentPage: number;
  changePage: (value: string) => void;
}

export const PageNumbers: React.FC<PageNumberProps> = ({ currentPage, changePage }) => {
  const changeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    changePage(String(value));
  };

  return (
    <Pagination
      onChange={changeHandler}
      page={currentPage}
      count={10}
      variant="outlined"
      shape="rounded"
      size="large"
      className="page-numbers"
    />
  );
};
