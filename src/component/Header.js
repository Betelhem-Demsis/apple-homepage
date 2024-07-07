import React from 'react'
import "../CSS/style.css"
import logo from "../images/icons/logo.png";
import search from "../images/icons/search-icon.png";
import cart from "../images/icons/cart.png";


function Header() {
  return (
    <div class="header-main">
    <ul>
      <li class="icon-link">
        <a href="#" title="link"
          ><img src={logo} alt="" />
        </a>
      </li>
      <li><a href="">Mac</a></li>
      <li><a href="#">iphone</a></li>
      <li><a href="#">ipad</a></li>
      <li><a href="#">watch</a></li>
      <li><a href="#">tv</a></li>
      <li><a href="#">Music</a></li>
      <li><a href="#">Support</a></li>
      <li class="icon-link search-link">
        <a href="/search/" title="link"
          ><img src={search} alt=""
        /></a>
      </li>
      <li class="icon-link">
        <a href="" title="link"
          ><img src={cart}
        /></a>
      </li>
    </ul>
  </div>
  )
}

export default Header
