import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #353372, #6554c0);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;

  h1 {
    margin-top: 30px;
    color: #fff;
    margin-bottom: 10px;
  }

  > p {
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    form {
      display: flex;
      flex-direction: row;
      margin-top: 30px;
      align-items: center;

      > input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 10px 0 0;

        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }

      > p {
        color: #fff;
      }
    }

    button {
      height: 44px;
      background: #30c3fc;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      width: 10%;
      margin-top: 25px;
    }
  }
`;
