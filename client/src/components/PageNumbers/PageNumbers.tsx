import {
  React, Pagination, useHistory,
} from '../../imports';
import './PageNumbers.css';

interface PageNumberProps {
  currentPage: number;
  changePage: (property: string, value: string) => void;
}

const PageNumbers: React.FC<PageNumberProps> = ({
  currentPage, changePage,
}): React.ReactElement => {
  const changeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    changePage('page', String(value));
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

export default PageNumbers;
