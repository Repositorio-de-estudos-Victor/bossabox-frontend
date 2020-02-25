import React, { useEffect, useState } from 'react';
import { Container, Content, Cards } from './styles';
import Tool from '~/components/Tool';

import api from '~/services/api';

export default function Dashboard() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function loadTools() {
      const response = await api.get('tools');

      const { data } = response;

      console.tron.log(data);

      setTools(data);
    }

    loadTools();
  }, []);

  return (
    <Container>
      <Content>
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>
        <div className="header">
          <form>
            <input type="search" placeholder="search" />
            <input type="checkbox" />
            <p>search in tags only</p>
          </form>
          <button type="button"> Add </button>
        </div>

        <Cards>
          {tools.map(tool => (
            <Tool key={tool.id} data={tool} />
          ))}
        </Cards>
      </Content>
    </Container>
  );
}
