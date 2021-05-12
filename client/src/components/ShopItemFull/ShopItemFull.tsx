import {
  React, Grid, Button, Paper, Typography, Rating, ShopItemInt,
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
          <Grid item md={6} xs={12} container direction="column" justify="space-around">
            <Grid item container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h5" className="shop-item-full__title" onClick={() => showMoreInfoToggler(id)}>
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="shop-item-full__price">
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
                <Rating name="read-only" value={rating} readOnly />
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained">Add to cart</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ShopItemFull;
