import styled from "styled-components";

let shoutbox = {};

shoutbox.ShoutboxContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
shoutbox.MessgesList = styled.div``;

shoutbox.Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  overflow: auto; //sito reikejo del firefox
`;
shoutbox.SubmitButton = styled.button`
  background: ${props => props.theme.PRIMARY_COLOR};
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  cursor: pointer;

  &:hover {
    background: #556c9a;
  }
`;

shoutbox.Textarea = styled.textarea`
  border: 1px solid #dad7d7;
`;

export default shoutbox;
