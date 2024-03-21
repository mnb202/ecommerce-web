import React from 'react'
import './style.css'

function NotFoundPage() {
  return (
    <div className='NotFoundPage'>
      <div className='container-notfound'>
        <h1>Page not found</h1>
        <p className="zoom-area"><b>Ooups,</b> something went wrong! </p>
        <section className="error-container">
          <span><span>4</span></span>
          <span>0</span>
          <span><span>4</span></span>
        </section>
        <div className="link-container">
          <a target="_blank" href="http://localhost:3000/" className="more-link">Back to Homepage</a>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage