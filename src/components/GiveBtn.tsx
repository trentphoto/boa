import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default class GiveBtn extends React.Component {
  render() {
    return (
      <Link className="GiveBtn" to="/support">
        <FontAwesomeIcon icon="gift" />
        <span>Support Us</span>
      </Link>
    )
  }
}
