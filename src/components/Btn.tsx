import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  text: string
  icon?: IconProp
  classes?: string
  onClick?: () => any
}

class Btn extends React.Component<Props> {
  state = {
    hovered: false
  }
  btnFocus() {
    this.setState({ hovered: true })
  }
  btnBlur() {
    this.setState({ hovered: false })
  }
  text() {
    if (this.props.icon) {
      return (
        <>
          <FontAwesomeIcon className="mr-3" icon={this.props.icon} />
          {this.props.text}
        </>
      )
    } else {
      return this.props.text
    }
  }
  render() {
    const btnClass = this.state.hovered
      ? `btn btn-jpl btn-jpl_hovered ${this.props.classes || ''}`
      : `btn btn-jpl ${this.props.classes || ''}`
    return (
      <button
        className={btnClass}
        onClick={this.props.onClick}
        onMouseEnter={this.btnFocus.bind(this)}
        onMouseLeave={this.btnBlur.bind(this)}
        onFocus={this.btnFocus.bind(this)}
        onBlur={this.btnBlur.bind(this)}
      >
        <span className="btn-jpl__text">{this.text()}</span>
        <div className="btn-jpl__border" />
        <div className="btn-jpl__bg" />
        <span className="btn-jpl__hover-text">{this.text()}</span>
      </button>
    )
  }
}

export default Btn
