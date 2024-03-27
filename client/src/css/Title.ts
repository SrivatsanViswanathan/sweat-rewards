import styled from 'styled-components';

const Wrapper = styled.div`
  text-transform: capitalize;
  text-align: center;
  padding-bottom: 2rem;
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
