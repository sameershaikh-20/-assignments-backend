function logMessage(msg) {
  console.log(msg);
  const logOutput = document.getElementById("log-output");
  if (logOutput) {
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.textContent = "> " + msg;
    logOutput.appendChild(entry);
    logOutput.scrollTop = logOutput.scrollHeight;
  }
}

function handleCardClick(event) {
  logMessage("Product details opened");

  console.log("--- Event Target vs CurrentTarget Demonstration ---");
  console.log("event.target (the actual element that was clicked):", event.target);
  console.log("event.currentTarget (the element listening to this event - the product card):", event.currentTarget);

  logMessage("event.target: <" + event.target.tagName.toLowerCase() + "> | event.currentTarget: <" + event.currentTarget.tagName.toLowerCase() + ">");
}

function handleCardDoubleClick(event, productImage) {
  logMessage("Product image zoomed");
  productImage.classList.toggle("zoomed");
}

function handleCardMouseOver(event, productCard) {
  productCard.classList.add("card-hover");
}

function handleCardMouseOut(event, productCard) {
  productCard.classList.remove("card-hover");
}

function handleAddToCart(event) {
  event.stopPropagation();
  logMessage("Product added to cart");

  event.target.disabled = true;
  event.target.textContent = "Added to Cart";
}

function handleWishlist(event) {
  event.stopPropagation();
  logMessage("Added to wishlist");

  event.target.textContent = "❤️ Wishlisted";
}

function handleDelete(event, productCard) {
  event.preventDefault();
  event.stopPropagation();

  const userConfirmed = confirm("Are you sure you want to delete this product card?");
  if (userConfirmed) {
    logMessage("Product card removed from the DOM");
    productCard.remove();
  } else {
    logMessage("Deletion cancelled by user");
  }
}
