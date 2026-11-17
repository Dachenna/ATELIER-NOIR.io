const navbar = `
  <nav class="navbar">
    <a href="index.html" class="logo">ATELIER NOIR</a>


    <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <ul class="nav-links" id="navLinks">
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

const toggle = document.querySelector("#menuToggle");
const links = document.querySelector("#navLinks");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.classList.toggle("active", open);
  toggle.setAttribute("aria-expanded", open);
});