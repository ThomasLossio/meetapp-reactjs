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

    strong {
      color: #fff;
      font-size: 32px;
    }

    button {
      margin: 5px 0 0;
      padding: 0 20px;
      width: 160px;
      height: 44px;
      align-self: flex-end;
      background: #f94d6a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;
      display: flex;
      justify-content: space-between;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
`;

export const List = styled.ul`
  margin-top: 45px;
  display: flex;
  flex-direction: column;

  li {
    height: 62px;
    background: rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;

    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const ContentList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  strong {
    color: #fff;
    font-weight: 18px;
  }

  div {
    display: flex;
    align-items: center;

    p {
      color: #999;
      font-weight: 16px;
      margin-right: 20px;
    }
  }
`;
