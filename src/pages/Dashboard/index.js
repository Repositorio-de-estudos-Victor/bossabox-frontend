import React, { useEffect, useState } from 'react';
import { Container, Content, Tool } from './styles';
import Close from '~/assets/close.png';

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
        <div>
          <form>
            <input type="search" placeholder="search" />
            <input type="checkbox" />
            <p>search in tags only</p>
          </form>
          <button type="button"> Add </button>
        </div>

        <ul>
          {tools.map(tool => {
            return (
              <Tool key={tool.id}>
                <div className="title">
                  <a href={tool.link}>{tool.title}</a>
                  <img src={Close} alt="fechar" />
                  <button type="button" className="remove">
                    remove
                  </button>
                </div>
                <p>{tool.description}</p>
                <div>
                  <div className="tags">
                    {tool.tags.map(tag => {
                      return <span key={tag}>{`#${tag}`}</span>;
                    })}
                  </div>
                </div>
              </Tool>
            );
          })}
        </ul>
      </Content>
    </Container>
  );
}
