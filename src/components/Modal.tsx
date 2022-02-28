import React, { useState } from "react";
import { Button, Modal as ModalBoot } from "react-bootstrap";

interface IModalProps {
  show: boolean;
  title: string;
  onClose: any;
}

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const Modal = (props: IModalProps) => {
  const { show, title } = props;

  return (
    <ModalBoot show={show}>
      <ModalBoot.Header>
        <ModalBoot.Title>{title}</ModalBoot.Title>
      </ModalBoot.Header>
      <ModalBoot.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </ModalBoot.Footer>
    </ModalBoot>
  );
};

export default Modal;
