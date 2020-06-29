import styled from "styled-components";

export const Container = styled.div`
  grid-area: SL;

  align-items: center;
  display: flex;
  flex-direction: column;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  border-bottom: 2px solid var(--quaternery);
  margin-bottom: 8px;
  width: 32px;
`;



