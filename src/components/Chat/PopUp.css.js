const ChatContainer = styled.div`
  margin-left: 10px;
  display: flex;
  height: 100%;
  width: 300px;
  position: relative;
  align-items: flex-end;
  display: flex;
`;

const PopUpContainer = styled.div`
  width: 100%;
  height: 350px;
  z-index: 2;
  background: #fff;
  box-shadow: rgba(109, 103, 95, 0.22) 1px 3px 6px;
  background: rgb(255, 255, 255);
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e3e4;
`;

const PopUpHeader = styled.div`
  background: ${props => props.theme.CHAT_HEADER_COLOR};
  color: #e9f0ff;
  padding: 5px 3px 5px 3px;
`;

const MessagesContainer = styled.div`
  overflow-y: scroll;
  flex: 1;
`;
const InputContainer = styled.div`
  border-top: 1px solid #ccc5c5;
`;

const Input = styled.input`
  border-radius: 0px;
  border: none;
  padding-left: 3px;
  width: 100%;
  &:focus {
    border: none;
  }
`;
const CloseButton = styled.button`
  border: none;
  padding: 0px;
  background: none;

  &:focus {
    outline: none;
  }
`;
