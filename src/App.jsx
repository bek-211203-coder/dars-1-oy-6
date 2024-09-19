// import { useState } from 'react'

import logo from './assets/image/logo.svg'
import chat from './assets/image/chat.svg'
import imageArrowRight from './assets/image/imageArrowRight.svg'
import imagePilot from './assets/image/imagePilot.svg'
import imageGroup from './assets/image/imageGroup.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <nav className='nav'>
          <div className='nav__heroLogo'>
            <a href="#">
              <img src={logo} alt="company Logo" width={157} height={40} />
            </a>
          </div>
          <div className='nav__list'>
            <ul className='list__hero'>
              <li className='list listButton'>
                <a href="#">HOME</a>
              </li>
              <li className='list'>
                <a href="#">ABOUT US</a>
              </li>
              <li className='list'>
                <a href="#">SERVICES</a>
              </li>
              <li className='list'>
                <a href="#">PROJECTS</a>
              </li>
              <li className='list'>
                <a href="#">BLOG</a>
              </li>
            </ul>
          </div>
          <div className='nav__needHelp'>
            <img src={chat} alt="chat icon" width={45} height={45} />
            <div className='need__text'>
              <span className='need'>Need Help ?</span>
              <a href="#" className='needPhone'>(91) 109-11-03</a>
            </div>
          </div>
        </nav>
      </div>
      {/* main */}
      <main className='main'>
        <div className='container  mainHero'>
          <h1 className='main__title'>Journey With Confidence <span className='mainTitle__color'>Migrate</span> with Us</h1>
          <p className='main__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet </p>
          <p className='main__text'>rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          <button className='mainButton'>Learn More <a href="#"><img src={imageArrowRight} alt="arrow right icon" width={14} height={16} /></a></button>
        </div>
      </main>
      {/* ABOUT us */}
      <div className='ABOUT_US'>
        <div className='container about__info'>

          <div className='box'>
            <div className='box_top'>
              <div className='rectangleOne'></div>
              <div className='rectangleTwo'></div>
            </div>
            <div className='box_bottom'>
              <div className='rectangleThree'>
                <div className='box_bottom_info'>
                  <p className='cardNum'>10 <small className='plus'>+</small></p>
                  <p className='cardText'>years of </p>
                  <p className='cardText'>experiences</p>
                </div>

              </div>
              <div className='rectangleFor'></div>
            </div>
            <div className='imageGroup'>
              <img src={imageGroup} alt="group" />
            </div>
          </div>

          <div className='about_info_hero'>
            <h4 className='about__name'>ABOUT US <img src={imagePilot} alt="pilot icon" width={14} height={12} /></h4>
            <h2 className='about__title'>Unknown Wanderlust <span className='aboutTitle_color'>Your Journey into</span></h2>
            <p className='about_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>

            <div className='about_cards'>
              <div className='safety'>
                <div className='checked'>
                  <label htmlFor="check">
                    <input type="checkbox" id='check' name='check' />
                  </label>
                  <h5 className='cheText'> Safety Guides</h5>
                </div>
                <p className='about_card_text'>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
              </div>

              <div className='passport'>
                <div className='checked'>
                  <label htmlFor="check">
                    <input type="checkbox" id='check' name='check' />
                  </label>
                  <h5 className='cheText'>Passport Assistance</h5>
                </div>
                <p className='about_card_text'>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
              </div>
            </div>
            <div className='aboutButton'>
            <button className=' btn_about'>Read More <a href="#"><img src={imageArrowRight} alt="arrow right icon" width={18} height={16} /></a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
