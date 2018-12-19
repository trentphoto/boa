import * as React from 'react'
import { Link } from 'react-router-dom'
import PodcastCard from '../../components/PodcastCard'

import './episodes.css'
import { fetchAllPosts } from '../../modules/ducks/posts/operations'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import PageWrapper from '../../components/PageWrapper'

interface Props {
  posts: ReduxState['posts']['allPosts']
  fetchPosts: () => Promise<void>
}

class Episodes extends React.Component<Props> {
  public componentDidMount() {
    const { posts, fetchPosts } = this.props
    if (posts.data.length === 0) {
      fetchPosts()
    }
  }

  public render() {
    return (
      <PageWrapper bg="white" title="All Episodes">
        <section className="section section_light">
          <div className="container containerEpisodes">
            <div className="row">
              <div className="col">
                <h2 className="mb-5 text-center">All Episodes</h2>
                <div className="l_PodcastCard">
                  {this.props.posts.data.map((i: WPEpisode) => (
                    <Link
                      className="no-hover"
                      key={i.id}
                      to={`/episodes/${i.id}`}
                    >
                      <PodcastCard
                        title={i.title}
                        id={i.id}
                        excerpt={i.excerpt}
                        image={i.image}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  posts: state.posts.allPosts
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPosts: () => fetchAllPosts()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episodes)
