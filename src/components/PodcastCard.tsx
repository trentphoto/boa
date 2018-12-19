import React from 'react'

interface Props {
  title: string
  id: string
  excerpt: string
  image: string
}

const PodcastCard: React.SFC<Props> = ({ title, id, excerpt, image }) => (
  <div className="PodcastCard">
    {image && <img className="PodcastCard__image" src={image} alt={title} />}
    <div className="PodcastCard__content">
      <span className="PodcastCard__subtitle">Episode {id}</span>
      <h3 className="PodcastCard__title">{title}</h3>
      <span className="PodcastCard__subtitle">{excerpt}</span>
    </div>
  </div>
)

export default PodcastCard
