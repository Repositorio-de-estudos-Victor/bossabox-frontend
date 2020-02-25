import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Card = props => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
