import { React, Link, Grid, Button, Paper, Typography, Rating, IShopItem, trimDescription } from 'imports';
import './ShopItem.css';

interface ShopItemProps {
  item: IShopItem;
}

export const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
  const { id, image, title, price, description, rating } = item;

  return (
    <Grid item key={id}>
      <Paper elevation={4} className="shop-item">
        <Grid container spacing={2}>
          <Grid item sm={3} xs={12}>
            <img className="shop-item__img" src={image} alt="img-1" />
          </Grid>
          <Grid item sm={9} xs={12} container direction="column" justify="space-around">
            <Grid item container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">
                  <Link to={`/product/${id}`} className="shop-item__title">
                    {title}
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="shop-item__price">
                  ${price}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className="shop-item__description">{trimDescription(description)}</Typography>
            </Grid>
            <Grid item container justify="space-between" alignItems="center">
              <Grid item>
                <Rating name="read-only" value={rating} readOnly />
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained">
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
