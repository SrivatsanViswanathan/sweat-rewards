import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  padding-bottom: 5rem;
  .container {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    gap: 0rem 2rem;
    align-items: center;
  }
  .section {
    display: grid;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
    height: auto;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
  }
  .img {
    width: 80vw;
    height: auto;
    object-fit: cover;
    max-width: var(--fixed-width);
  }
  @media (min-width: 992px) {
    padding-bottom: 2rem;
    .container {
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
    }
    .section {
      display: grid;
      justify-content: center;
      text-align: center;
    }
    .img {
      height: 20rem;
      width: auto;
    }
  }
`;

export default Wrapper;
