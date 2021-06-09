import React from "react";
import Grid from "@material-ui/core";

const products = [
  { id: 1, name: "Schuhe", description: "sehr schöne Schuhe", price: "€7" },
  { id: 2, name: "Mütze", description: "sehr schöne Mütze", price: "€5" },
  {
    id: 3,
    name: "Dachpappe",
    description: "sehr schöne schwarze Dachpappe",
    price: "€4",
  },
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>;
};

export default Products;
