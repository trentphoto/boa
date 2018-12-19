// defaults
import * as React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  About,
  Episodes,
  EpisodeSingle,
  Heart,
  Listen,
  NotFound
} from './views'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { introPageTransition, outroPageTransition } from './utils/animations'
import BoaHeader from './components/BoaHeader'
import Subnav from './components/Subnav'

import './App.css'

// Font Awesome config
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faBookOpen, faGift } from '@fortawesome/free-solid-svg-icons'
library.add(faPlay, faBookOpen, faGift)

interface Props {
  location: any
}

const App: React.SFC<Props> = props => (
  <div className="App">
    <BoaHeader />
    <Subnav />
    {/* <div className="page-wrapper"> */}
    <div className="transition-wrapper">
      <TransitionGroup>
        <CSSTransition
          classNames="fade"
          key={props.location.pathname}
          timeout={500}
          appear={true}
          onEnter={node => introPageTransition(node)}
          onExit={node => outroPageTransition(node)}
        >
          <Switch location={props.location}>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/episodes" component={Episodes} />
            <Route path="/episodes/:id" component={EpisodeSingle} />
            <Route path="/heart" component={Heart} />
            <Route path="/listen" component={Listen} />
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
    {/* </div> */}
  </div>
)

const mapStateToProps = (state: any) => ({
  location: state.router.location
})

export default connect(mapStateToProps)(App)
