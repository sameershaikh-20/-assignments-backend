document.addEventListener("DOMContentLoaded", () => {

  const productCard = document.getElementById("product-card");
  const productImage = document.getElementById("product-image");
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  const wishlistBtn = document.getElementById("wishlist-btn");
  const deleteBtn = document.getElementById("delete-btn");

  if (!productCard) return;

  productCard.addEventListener("click", (event) => {
    handleCardClick(event);
  });

  productCard.addEventListener("dblclick", (event) => {
    handleCardDoubleClick(event, productImage);
  });

  productCard.addEventListener("mouseover", (event) => {
    handleCardMouseOver(event, productCard);
  });

  productCard.addEventListener("mouseout", (event) => {
    handleCardMouseOut(event, productCard);
  });

  addToCartBtn.addEventListener("click", (event) => {
    handleAddToCart(event);
  });

  wishlistBtn.addEventListener("click", (event) => {
    handleWishlist(event);
  });

  deleteBtn.addEventListener("click", (event) => {
    handleDelete(event, productCard);
  });
});
