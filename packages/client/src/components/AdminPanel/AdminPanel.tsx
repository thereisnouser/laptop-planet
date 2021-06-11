import { React, DataGrid, getProductsList, useEffect, useState, IShopItem, MAX_ITEMS_ON_ADMIN_PAGE } from 'imports';
import './AdminPanel.css';

export const AdminPanel: React.FC = () => {
  const [products, setProducts] = useState<IShopItem[]>([]);
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
    },
    {
      field: 'title',
      headerName: 'Title',
      type: 'string',
      width: 300,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      type: 'string',
      flex: 1,
      editable: true,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'image',
      headerName: 'Img',
      type: 'string',
      width: 300,
      editable: true,
    },
  ];

  useEffect(() => {
    async function fetch() {
      const list = await getProductsList();
      setProducts(list);
    }

    fetch();
  }, []);

  return (
    <DataGrid
      columns={columns}
      rows={products}
      showCellRightBorder
      autoHeight
      pageSize={MAX_ITEMS_ON_ADMIN_PAGE}
      className="admin-panel"
    />
  );
};
