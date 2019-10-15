import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 20% 60%;
  }
`;
export default StyledWrapper;
