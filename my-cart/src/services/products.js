import axios from 'axios';

const product_api = 'https://dnc0cmt2n557n.cloudfront.net/products.json';

export const getProducts = async () => {
  const products = await axios
    .get(product_api)
    .then((response) => response.data);

  return products;
};
