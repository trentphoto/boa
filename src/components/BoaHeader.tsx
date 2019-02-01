import React from 'react'
import GiveBtn from './GiveBtn'

const BoaHeader = () => (
  <header className="BoaHeader">
    <GiveBtn />
    <div className="container">
      <div className="row">
        <div className="col mr-auto">
          <h1 className="BoaHeader__title">Building One Another</h1>
          <p className="BoaHeader__subtitle">A Podcast About Encouragement</p>
        </div>
        <div className="col ml-auto" />
      </div>
    </div>
  </header>
)

export default BoaHeader
