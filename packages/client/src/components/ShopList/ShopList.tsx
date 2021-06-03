import { React, Grid, Container, IShopItem, ShopItem } from 'imports';

interface ShopListProps {
  itemsList: IShopItem[];
}

export const ShopList: React.FC<ShopListProps> = ({ itemsList }): React.ReactElement => (
  <Container>
    <Grid container spacing={2}>
      {itemsList.map((item: IShopItem, index: number) => (
        <ShopItem key={index} item={item} />
      ))}
    </Grid>
  </Container>
);
