import React from 'react'
import Footer from './Footer'
import classnames from 'classnames'
import Helmet from 'react-helmet'

interface Props {
  title: string
  bg: string
}

const PageWrapper: React.SFC<Props> = ({ title, bg, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Building One Another</title>
      </Helmet>
      <div
        className={classnames('page', {
          section_light: bg === 'light'
        })}
      >
        {children}
        <Footer />
      </div>
    </>
  )
}

export default PageWrapper
