import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import { Container, SmallButton } from './styles';

export default function Tool({ data: tool }) {
  return (
    <Card elevation={1} style={{ padding: 20 }}>
      <Container>
        <SmallButton>
          <span>remove</span>
        </SmallButton>
        <a href={tool.link} target="_blank" rel="noopener noreferrer">
          {tool.title}
        </a>
        <p>{tool.description}</p>
        <div className="tags">
          {tool.tags.map(tag => {
            return (
              <span className="highlight" key={tag}>
                #{tag}
              </span>
            );
          })}
        </div>
      </Container>
    </Card>
  );
}

Tool.propTypes = {
  data: PropTypes.element.isRequired,
};
