import {
  React, Grid, Container, IShopItem, ShopItem,
} from '../../imports';

interface ShopListProps {
  itemsList: IShopItem[];
  // eslint-disable-next-line no-unused-vars
  onSelect: (id: number) => void;
}

export const ShopList: React.FC<ShopListProps> = ({
  itemsList, onSelect,
}): React.ReactElement => (
  <Container>
    <Grid container spacing={2}>
      {
        itemsList.map((item: IShopItem) => (
          <ShopItem
            item={item}
            onSelect={onSelect}
          />
        ))
      }
    </Grid>
  </Container>
);
