export const ENDPOINTS = {
  getCategoryList: '/cart/category-list',
  getProductList: '/product/product-list',
  getProductsByCategory: '/product/products-by-category/{categoryId}',
  getProductDetail: '/product/get-product-detail/{productId}',
  getCustomerCart: '/cart/get-customer-cart/{customerId}',
  login: '/customer/login',
  addToCart: '/cart/add-to-cart',
  updateCart: '/cart/update-cart-item',
  deleteCartItem: '/cart/delete-cart-item/{cartId}',
  placeOrder: '/Order/place-order',
  getAllOrders: '/Order/get-all-orders',
};
