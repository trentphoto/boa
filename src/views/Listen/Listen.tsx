import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Btn from '../../components/Btn'

export default () => (
  <PageWrapper bg="white" title="Listen">
    <section className="section">
      <div className="py-3" />
      <div className="container containerListen">
        <div className="row">
          <div className="col text-center">
            <h2 className="pb-4">
              Listen to the Building One Another podcast on all your favorite
              platforms.
            </h2>
            <a href="http://google.com">
              <Btn text="iTunes" />
            </a>
            <a href="http://google.com">
              <Btn text="Stitcher" />
            </a>
            <a href="http://google.com">
              <Btn text="SoundCloud" />
            </a>
            <a href="http://google.com">
              <Btn text="Spotify" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-3" />
    </section>
  </PageWrapper>
)
