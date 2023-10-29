import styled from "styled-components";
import {Link} from 'react-router-dom';

export const SidebarLinkStyles = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  
  &:nth-child(1) {
    margin-bottom: 40px;
  }

  &:nth-child(2) {
    margin-bottom: 24px;
  }
`;
export const SideBarImg = styled.img<{ $hasBackground?: boolean }>`
  width: 40px;
  height: 40px;
  background: ${props => props.$hasBackground ? '#d6eff9' : null};
  padding: 5px;
  border-radius: ${props => props.$hasBackground ? '16px' : null};
`;

export const SideBarTitle = styled.span`
  font-size: 10px;
`;