import React from "react";
import { Alert } from "react-bootstrap";

interface IMessageProps {
  variant?: any;
  children: any;
}

function Message(props: IMessageProps) {
  const { variant, children } = props;

  return <Alert variant={variant}>{children}</Alert>;
}

Message.defaultProps = {
  variant: "info",
};

export default Message;
