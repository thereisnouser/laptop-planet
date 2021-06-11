import { React, Pagination } from 'imports';
import './PageNumbers.css';

interface PageNumberProps {
  pagesQuantity: number;
  currentPage: number;
  changePage: (value: string) => void;
}

export const PageNumbers: React.FC<PageNumberProps> = ({ pagesQuantity, currentPage, changePage }) => {
  const changeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    changePage(String(value));
  };

  return (
    <Pagination
      onChange={changeHandler}
      page={currentPage}
      count={pagesQuantity}
      variant="outlined"
      shape="rounded"
      size="large"
      className="page-numbers"
    />
  );
};
