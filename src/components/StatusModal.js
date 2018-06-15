// component and style imports
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../styles/StatusModal.css";

// class for StatusModal component
export default class StatusModal extends React.Component {
  constructor(props) {
    super(props);

    // modal state is always set to true. conditional render on App handles whether or not modal is shown
    this.state = {
      modal: true
    };
  }

  // toggle method used to call resetModal method passed as props from App
  toggle = () => {
    this.props.resetModal();
  }

  // render component, taking messages passed as props from App
  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} centered={true} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.message}</ModalHeader>
          <ModalBody>
            {this.props.bodyMessage}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}