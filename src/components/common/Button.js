import styled from "styled-components";
import { COLOR_CODES } from '../../core/constants'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${COLOR_CODES.primary};
  color: ${COLOR_CODES.white};
  font-size: 1em;
  height: 50px;
  padding: 0.25em 1em;
  border: 0;
  border-radius: 5px;
  width: 100%;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
`;

export default Button;
