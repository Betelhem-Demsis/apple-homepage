import React from 'react'
import mac from "../images/home/mac-laptop.jpg"
import "../CSS/style.css"
function Hero() {
  return (
    <>
    <div class="macbook">
      <div class="mac-title">
        <p>16-inch model</p>
        <h1>MacBook Pro</h1>
        <p class="mac-p">The best for the brightest.</p>
        <div class="link-title">
          <a href="">Learn more</a>
          <a href="">Buy</a>
        </div>
        <div>
          <img src={mac} alt="" />
        </div>
      </div>
    </div>

    <div class="iphone-pro">
      <h1>iPhone 11 Pro</h1>
      <h6>Pro cameras. Pro display. Pro performance.</h6>
      <p>From $24.95/mo. or $599 with trade‑in.</p>
      <div class="link-title">
        <a href="">Learn more</a>
        <a href="">Buy</a>
      </div>
    </div>

    <div class="iphone">
    <h1>iPhone 11</h1>
    <h6>Just the right amount of everything.</h6>
    <p>From $16.62/mo. or $399 with trade‑in.</p>
    <div class="link-title">
      <a href="">Learn more</a>
      <a href="">Buy</a>
    </div>
  </div>
    </>
  )
}

export default Hero
