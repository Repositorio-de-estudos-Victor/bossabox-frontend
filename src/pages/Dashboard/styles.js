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
    font-size: 42px;
  }

  > h3 {
    color: #fff;
    font-size: 30px;
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

export const Tool = styled.li`
  padding: 26px;
  border-radius: 4px;
  background: #fff;
  margin-top: 10px;

  /* opacity: ${props => (props.past ? 0.6 : 1)}; */

  img {
    width: 12px;
    height: 12px;
  }

  .title {
    display: flex;
    flex-direction: row;
  }

  .remove{
    background: none;
    color: #000;
    margin-top: 0px;
  }

  a {
    display: block;
    /* color: ${props => (props.available ? '#999' : '#7159c1')}; */
    font-size: 24px;
    font-weight: normal;
  }

  p {
    display: block;
    margin-top: 3px;
    font-size: 20px;
    margin-top: 10px;
    /* color: ${props => (props.available ? '#999' : '#666')}; */
  }

  div {
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .tags {
    margin-top: 20px;
    span {
      margin-right: 10px;
      font-size: 18px;
      font-weight: 600;
      }
  }

  span {
    font-weight: bold;
  }
`;
