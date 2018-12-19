import React from 'react'
import GiveBtn from './GiveBtn'

const BoaHeader = () => (
  <header className="BoaHeader">
    <GiveBtn />
    <div className="container">
      <div className="row">
        <div className="col mr-auto">
          <h1 className="main-header__title text-white">
            Building One Another
          </h1>
          <p className="main-header__subtitle text-white">
            A Podcast About Encouragement
          </p>
        </div>
        <div className="col ml-auto" />
      </div>
    </div>
  </header>
)

export default BoaHeader
