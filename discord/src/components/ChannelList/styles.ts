import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;


export const Category = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add)`
  height: 21px;
  width: 21px;

  color: var(--symbol);
  cursor: pointer;
`;

