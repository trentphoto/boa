import React from 'react'

interface Props {
  item: WPEpisode
}

const FeatureCard: React.SFC<Props> = ({ item }) => (
  <div className="FeatureCard">
    <div className="row no-gutters">
      {item.image && (
        <div className="col FeatureCard__image-wrap">
          <img
            className="FeatureCard__image"
            src={item.image}
            alt={item.title}
          />
        </div>
      )}
      <div className="col">
        <div className="card-body">
          <p className="FeatureCard__subtitle">Latest Episode</p>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.excerpt}</p>
          <div className="FeatureCard__btn btn btn-primary btn-block">
            Listen Now
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FeatureCard
