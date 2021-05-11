import {
  React, Grid, Button, Paper, Typography,
  ShopItemInt, ItemRating,
} from '../../imports';
import './ShopItemFull.css';

const ShopItemFull: React.FC<ShopItemInt> = (props: ShopItemInt) => {
  const {
    id, image, title, price, description, rating, showMoreInfoToggler,
  } = props;

  return (
    <Grid item key={id}>
      <Paper elevation={4} className="shop-item-full">
        <Grid container justify="space-around">
          <Grid item>
            <img className="shop-item-full__img" src={image} alt="img-1" />
          </Grid>
          <Grid item xs={6} container direction="column" justify="space-around">
            <Grid item container justify="space-between" alignItems="center">
              <Grid item>
                <Typography className="shop-item-full__title" onClick={() => showMoreInfoToggler(id)}>
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="shop-item-full__price">
                  $
                  {price}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className="shop-item-full__description">
                {description}
              </Typography>
            </Grid>
            <Grid item container justify="space-between" alignItems="center">
              <Grid item>
                <ItemRating rating={rating} />
              </Grid>
              <Grid item>
                <Button variant="contained">Add to cart</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ShopItemFull;
