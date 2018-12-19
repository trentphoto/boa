import React from 'react'

const InfoCard: React.SFC = ({ children }) => (
  <div className="card info-card">
    <div className="card-body p-4">{children}</div>
  </div>
)

export default InfoCard
