import * as React from 'react'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchAllPosts } from '../../modules/ducks/posts/operations'
import PageWrapper from '../../components/PageWrapper'
import InfoCard from '../../components/InfoCard'
import FeatureCard from '../../components/FeatureCard'
import PodcastCard from '../../components/PodcastCard'
import CtaSection from '../../components/CtaSection'
import Btn from '../../components/Btn'
import { Link } from 'react-router-dom'

import './home.css'

interface Props {
  latest3Posts: WPEpisode[]
  fetchPosts: () => Promise<void>
}

class Home extends React.Component<Props> {
  public componentDidMount() {
    const { latest3Posts, fetchPosts } = this.props
    if (latest3Posts.length === 0) {
      fetchPosts()
    }
  }
  public render() {
    const { latest3Posts } = this.props
    const latest = latest3Posts[0]

    return (
      <PageWrapper bg="light" title="The Building One Another Podcast">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 py-3">
                <h2>About the Podcast</h2>
                <p className="lead">
                  Our heart is to encourage your heart and to encourage you to
                  encourage others.
                </p>
                <p>
                  We touch on many topics of life, love and leadership to
                  encourage your trust in Jesus as you take whatever adventure
                  our Lord has given you and as you encourage others on their
                  adventures of faith life.
                </p>
                <Link to="/episodes">
                  <Btn text="Get Devotionals" />
                </Link>
              </div>
              <div className="col-md-6">
                {latest3Posts.length > 0 && ( // if the data is loaded, show a FeatureCard
                  <Link className="no-hover" to={`episodes/${latest.id}`}>
                    <FeatureCard item={latest} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <InfoCard>
                  <p className="text-center w-100 text-success">
                    <i className="fas fa-anchor fa-2x" />
                  </p>
                  <p>
                    <i>
                      Encourage one another and build one another up, just as
                      you are doing.
                    </i>
                  </p>
                  <p>I Thessalonians 5:11</p>
                </InfoCard>
              </div>
              <div className="col-md-4">
                <InfoCard>
                  <p className="text-center w-100 text-success">
                    <i className="fas fa-heart fa-2x" />
                  </p>
                  <p className="font-weight-bold">Be encouraged</p>
                  <p>
                    Whether you are in a good place or a rough one, a place of
                    challenge, trial or adventure, our Lord wants to encourage
                    your heart!
                  </p>
                  <p className="font-weight-bold">Be an encourager</p>
                  <p>
                    God said to Job, “Your words have put people on their feet.”
                    Our Lord wishes to encourage many others through you!
                  </p>
                </InfoCard>
              </div>
              <div className="col-md-4">
                <InfoCard>
                  <p className="text-center w-100 text-success">
                    <i className="fas fa-leaf fa-2x" />
                  </p>
                  <p className="font-weight-bold">
                    For individual and small group study
                  </p>
                  <p>
                    Building One Another is both a podcast and an e-devotional.
                    Both of them are designed for your personal use and for use
                    in small group and leadership teams.
                  </p>
                  <p>
                    You may access the podcasts here or on your favorite podcast
                    platform. You may also have the e-devotionals sent to your
                    inbox or read them here. Sign up for the weekly e-devotional
                    below.
                  </p>
                </InfoCard>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />

        {latest3Posts.length > 0 && (
          <section className="section section_blue">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6 text-right mb-3">
                  <p>Latest Episode</p>
                  <h2 className="display-4">{latest.title}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: latest.letter.substring(0, 200) + '...'
                    }}
                  />
                  <Link to={`/episodes/${latest.id}`}>
                    <Btn text="Listen Now" classes="btn-light" />
                  </Link>
                </div>
                <div className="col-sm-6">
                  {latest.image && (
                    <img
                      className="img-fluid"
                      src={latest.image}
                      alt={latest.title}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="section section_light">
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="text-center mb-5">More Episodes</h2>
                </div>
              </div>
              <div className="row">
                {latest3Posts.map(i => (
                  <div className="col-lg-4 col-md-6" key={i.id}>
                    <Link className="no-hover" to={`/episodes/${i.id}`}>
                      <PodcastCard
                        title={i.title}
                        id={i.id}
                        excerpt={i.excerpt}
                        image={latest.image}
                      />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col text-center">
                  <Link to="/episodes">
                    <Btn text="View All" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section_white">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center mx-auto">
                <h2>Support Building One Another</h2>
                <p className="lead">
                  Your support helps us continue making new episodes available
                  for free.
                </p>
                <a href="https://www.patreon.com/buildingoneanother">
                  <button className="btn btn-primary btn-primary-gradient">
                    Support Us on Patreon
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  latest3Posts: state.posts.allPosts.data.filter(
    (i: WPEpisode, ind: number) => ind > 0 && ind < 4
  )
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPosts: () => fetchAllPosts()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
