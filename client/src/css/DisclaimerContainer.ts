import styled from 'styled-components';

const Wrapper = styled.section`
  line-height: 1.5;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: black;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bold {
    font-weight: bold;
    color: violet;
    text-align: center;
  }
  a {
    color: violet;
    text-decoration: underline;
  }
  .accurate {
    margin-top: 1rem;
    text-align: center;
  }
  @media (min-width: 992px) {
    .container {
      display: flex;
      width: 75vw;
      flex-direction: column;
    }
  }
`;

export default Wrapper;
