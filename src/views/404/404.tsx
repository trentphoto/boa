import * as React from 'react'
import { Link } from 'react-router-dom'
import './404.css'
import PageWrapper from '../../components/PageWrapper'

const NotFound = () => (
  <PageWrapper bg="white" title="Not Found">
    <section className="py-5">
      <div className="container">
        <h1>Page not found.</h1>
        <h3>Unfortunately, we couldn't find the page you're looking for.</h3>
        <p>
          You can <Link to="/contact">contact us</Link>, or go to the{' '}
          <Link to="/">homepage</Link>.
        </p>
      </div>
    </section>
  </PageWrapper>
)

export default NotFound
