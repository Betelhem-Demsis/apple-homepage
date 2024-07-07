import React from 'react'
import "../CSS/style.css"
import watch from "../images/icons/watch-series5-logo.png";
import card from "../images/icons/apple-card-logo.png"
import tv from "../images/icons/apple-tv-logo.png"
import servant from "../images/icons/servant-logo.png"
import ipad from "../images/icons/new-ipad-logo.png"

function Box() {
  return (
    <div class="whole-wrap">
  <div class="contents content-1">
    <img src={watch} alt="" />
    <p class="description">
      With the new Always-On Retina display.<br />
      You’ve never seen a watch like this.
    </p>
    <div class="link-title">
      <a href="">Learn more</a>
      <a href="">Buy</a>
    </div>
  </div>
  <div class="contents content-2">
    <img src={card} alt="" />
    <p class="description">
      Get 3% Daily Cash on purchases from <br />
      Apple using Apple Card.
    </p>
    <div class="link-title">
      <a href="">Learn more</a>
      <a href="">Buy</a>
    </div>
  </div>

  <div class="content-3">
    <div class="logo">
        <img src={tv} alt="" />
    </div>
    <div class="middle-pic">
         <img src={servant} alt=""/>
    </div>
     <div class="trailor">
        <a  href="">Watch the trailer</a>
    </div>
      
  </div>
  <div class="content-4">
   <h1>AirPods Pro</h1>
    <p class="description">
        Magic like you’ve never heard.
    </p>
    <div class="link-title">
      <a href="">Learn more</a>
      <a href="">Buy</a>
    </div>
  </div>

  <div class="content-5">
    <p>16-inch model</p>
    <h1>MacBook Pro</h1>
    <p class="mac-p">The best for the brightest.</p>
    <div class="link-title">
      <a href="">Learn more</a>
      <a href="">Buy</a>
    </div>
  </div>

  <div class="contents content-6">
    <img src={ipad} alt="" />
    <p class="description">
        Like a computer. Unlike any computer.
    </p>
    <div class="link-title">
      <a href="">Learn more</a>
      <a href="">Buy</a>
    </div>
  </div>
</div>
  )
}

export default Box
