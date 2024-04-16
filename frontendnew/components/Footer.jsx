import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KING'S</h1>
          <p>Events and weading's</p>
        </div>
        <div className="tag">
          <label>
            News Letter
          </label>
          <div>
            <input className="ftr-inpt" type="text" placeholder='E-mail'/>
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email to receive news and updates</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
