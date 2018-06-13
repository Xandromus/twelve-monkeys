import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class StatusModal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   modal: false
    // };

    // this.toggle = this.toggle.bind(this);
  }

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.openModal} centered="true" toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.message}</ModalHeader>
          <ModalBody>
            Close the dialog to play again
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.toggle()}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}