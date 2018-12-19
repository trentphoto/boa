import React, { Component } from 'react'
import Btn from './Btn'
import { Modal, ModalBody } from 'reactstrap'

interface Props {
  className?: string
}

class myModal extends Component<Props> {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <>
        <Btn
          classes="mb-5"
          icon="book-open"
          text="read now"
          onClick={this.toggle}
        />
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>
            <div className="row">
              <div className="col-lg-6">
                <h2 className="font-weight-bold">
                  What is the actual impact of your life on other people?
                </h2>
                <p>
                  What is the actual impact of your life on other people? Do
                  people find you encouraging or exhausting?
                </p>
                <p>
                  In this short PDF (you can read it in one sitting), E. Stanley
                  Ott shares how to grow a heart that longs to invest in others
                  and give yourself away.
                </p>

                <form
                  onSubmit={() => {
                    console.log(2)
                  }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control text-center"
                      placeholder="your email"
                    />
                  </div>
                  <Btn classes="btn-block mb-3" text="submit" />
                </form>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://brightsaltmedialabs.com/buildingoneanotheradmin/wp-content/uploads/2018/11/cover.jpg"
                  className="img-fluid d-none d-lg-block"
                  alt="Grow a Heart to Impart"
                />
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default myModal
