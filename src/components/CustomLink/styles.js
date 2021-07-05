import styled from "styled-components";
import { Link } from "react-router-dom";
import { main } from "../../variables";

export const Wrapper = styled.div`
  width: fit-content;
  margin: 30px auto 0 auto;
  background-color: ${main};
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    background-color: #cc2d72;
  }
`;

export const LinkItem = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
`;
