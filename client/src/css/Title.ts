import styled from 'styled-components';

const Wrapper = styled.div`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 1.5rem;
  h3 {
    font-size: 1.75rem;
  }
  @media (min-width: 992px) {
    h3 {
      font-size: 3rem;
    }
  }
`;

export default Wrapper;
