import React from 'react';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <h1>VUTTR</h1>
        <p>Very Useful Tools to Remember</p>
        <div>
          <form>
            <input type="search" placeholder="search" />
            <input type="checkbox" />
            <p>search in tags only</p>
          </form>
          <button type="button"> Add </button>
        </div>
      </Content>
    </Container>
  );
}
