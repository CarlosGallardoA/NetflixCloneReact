import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background-color: #fff;
  padding: 25.5px;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin-right: 3px;
  width: 240px;
`;
const handleWidth = (width) => {
  switch (width) {
    case "fullWidth":
      return "100%";
    case "medium":
      return "50%";
    default:
      return "200px";
  }
};
export const NetflixButton = styled.button`
  background-color: ${(props) =>
    props.color === "gray" ? " lightgray" : "red"};
  cursor: pointer;
  padding: 15px;
  border: none;
  color: white;
  z-index: 15;
  border-radius: ${({ radius }) => (radius ? "0px 10px 10px 0px" : null)};
  text-transform: inherit;
  font-size: 1.1rem;
  outline: none;
  width: ${({ wide }) => handleWidth(wide)};
`;
