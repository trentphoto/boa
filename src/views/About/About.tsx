import * as React from 'react'
import './about.css'
import PageWrapper from '../../components/PageWrapper'

class About extends React.Component {
  public render() {
    return (
      <PageWrapper bg="light" title="About the Podcast">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="mb-3">About Building One Another</h2>
                <p>
                  Years ago, I wondered how to expand a ministry of
                  encouragement. I was given the chance to spend an hour with
                  Dick Halverson, who was then the Chaplain of the U.S. Senate.
                  When I asked him about that wondering, he told me the story of
                  his weekly one-page letter “Perspective” that he began mailing
                  once a week to forty-five members of his congregation. That
                  number grew into the tens of thousands, all before email!
                </p>
                <p>
                  With his encouragement, Building One Another was born — first
                  as a letter, and then as an e-devotional. Now we are adding
                  the podcast dimension too that we may expand and elaborate on
                  the topic of the week. We pray you will enjoy them both!
                </p>
                <p>— E. Stanley Ott</p>
                <h3>E. Stanley Ott</h3>
                <p>
                  E. Stanley Ott is a pastor who has served three vibrant
                  congregations and is President of Leading Moments ®, LLC and
                  founder of the Vital Churches Institute. His passion is the
                  transformation of the local church and the encouragement of
                  those who follow Jesus.
                </p>
                <p>
                  Stan has taught principles of congregational vitality and
                  leadership to thousands of people throughout the United States
                  and Canada. His publications include Twelve Dynamic Shifts for
                  Transforming Your Church and Transform Your Church with
                  Ministry Teams.
                </p>
                <h3>Lee Zehmer</h3>
                <p>More info about Lee coming soon.</p>
              </div>
              <div className="col-md-2">
                <img
                  src="https://brightsaltmedialabs.com/buildingoneanotheradmin/wp-content/uploads/2018/11/Stan-Ott.jpg"
                  alt="Stan Ott"
                  className="img-fluid"
                />
                <p>Stan Ott</p>
              </div>
              <div className="col-md-2">
                <img
                  src="https://brightsaltmedialabs.com/buildingoneanotheradmin/wp-content/uploads/2018/11/Lee-Zehmer.jpg"
                  alt="Lee Zehmer"
                  className="img-fluid"
                />
                <p>Lee Zehmer</p>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    )
  }
}

export default About
