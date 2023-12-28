import styled from "@emotion/styled";

const Message = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
`;

const Error = ({ children }) => {
  return <Message>{children}</Message>;
};

export default Error;
