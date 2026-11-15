const navbar = `
  <nav class="navbar">
    <a href="index.html" class="logo">ATELIER NOIR</a>

    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>

    <a class="cart-link" href="cart.html">Cart</a>
  </nav>
`;

document.querySelector("#navbar").innerHTML = navbar;