import React from 'react';
import Styled from 'styled-components';

var headerImage = require('../assets/canvas.jpg');

const StyledImage = Styled.img`
    object-fit: cover;
    height: 200px;
    max-width: 100%;
`;

const Canvas = () => (
    <StyledImage src={headerImage} />
);
  
export default Canvas;