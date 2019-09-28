import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: #fff;
      font-size: 32px;
    }

    button {
      margin: 5px 0 0;
      width: 160px;
      height: 44px;
      align-self: flex-end;
      background: #f94d6a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
`;

export const Header = styled.div``;
