import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: relative;
  z-index: 999;
`;

//elementas kuriame kuriame talpinisim kiekviena modala
//jis visada bus layoute
export const ModalContainer = () => <Modal id="modal-root" />;
