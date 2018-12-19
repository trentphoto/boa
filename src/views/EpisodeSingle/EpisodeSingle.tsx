import React from 'react'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchAllPosts } from '../../modules/ducks/posts/operations'
import InfoCard from '../../components/InfoCard'
import Btn from '../../components/Btn'
import { Link } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper'

interface Props {
  episode: WPEpisode
  episodes: WPEpisode[]
  fetchPosts: () => Promise<void>
}

interface LeftColProps {
  episode: WPEpisode
}

const LeftCol: React.SFC<LeftColProps> = (
  { episode } // stateless functional components take a props argument
) => (
  // if we just need the episode, make sure to pull it out via { spreading }
  <>
    <h1>{episode.title && episode.title}</h1>
    {episode.image && (
      <img className="img-fluid mb-3" alt={episode.title} src={episode.image} />
    )}
    {episode.url && <audio className="my-5" controls src={episode.url} />}
    <div className="button-group">
      <a
        href="https://soundcloud.com"
        className="btn btn-light mr-3 mb-3 btn-sm"
      >
        Listen on iTunes
      </a>
      <a
        href="https://soundcloud.com"
        className="btn btn-light mr-3 mb-3 btn-sm"
      >
        Listen on Stitcher
      </a>
      <a
        href="https://soundcloud.com"
        className="btn btn-light mr-3 mb-3 btn-sm"
      >
        Listen on SoundCloud
      </a>
    </div>
    <hr />
    <h2 className="text-primary mt-4">Letter</h2>
    <div dangerouslySetInnerHTML={{ __html: episode.letter }} />
    <hr />
    <h2 className="text-primary mt-4">Notes</h2>
    <div dangerouslySetInnerHTML={{ __html: episode.notes }} />
  </>
)

class EpisodeSingle extends React.Component<Props> {
  public componentDidMount() {
    const { episodes, fetchPosts } = this.props
    if (episodes.length === 0) {
      fetchPosts()
    }
  }
  public render() {
    const episode = this.props.episode

    return (
      <PageWrapper
        bg="white"
        title={episode ? episode.title : 'Building One Another'}
      >
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 contentLeft">
                {episode && <LeftCol episode={episode} />}
              </div>

              <div className="col-md-4 sidebarRight">
                <InfoCard>
                  <img
                    src="https://mindvitaminpodcast.files.wordpress.com/2017/05/stitcher-logo.png"
                    className="img-fluid"
                    alt="Stitcher"
                  />
                </InfoCard>
                <InfoCard>
                  <img
                    src="https://archive.org/download/available-on-itunes-logo/available-on-itunes-logo.jpg"
                    className="img-fluid"
                    alt="iTunes"
                  />
                </InfoCard>
                <h3 className="text-primary">About the Podcast</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                  sint minima corporis facere ad aliquam iste maiores inventore
                  unde quisquam.
                </p>
                <Link to="/about">
                  <Btn text="Read more" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => ({
  episodes: state.posts.allPosts.data,
  episode: state.posts.allPosts.data.filter(
    (i: WPEpisode) => i.id === ownProps.match.params.id
  )[0]
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPosts: () => fetchAllPosts()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeSingle)
