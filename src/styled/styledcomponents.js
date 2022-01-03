import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background-color: #fff;
  padding: 25.5px;
  height: 30px;
  border-radius: 10px 0px 0px 10px;
  border: none;
  margin-right: 3px;
  width: 50%;
`;
export const NetflixButton = styled.button`
  background-color: #e50914;
  cursor: pointer;
  padding: 15px;
  border: none;
  color: white;
  z-index: 15;
  border-radius: 5px;
  text-transform: inherit;
  font-size: 1.1rem;
  outline: none;
`;
