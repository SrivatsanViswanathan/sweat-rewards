import styled from 'styled-components';

const Wrapper = styled.section`
  .question {
    padding: 1rem 1.5rem;
    border: 2px solid #a855f7;
    margin-bottom: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-1);
  }
  .question h4 {
    text-transform: capitalize;
    line-height: 1.5;
    font-size: 1.25rem;
  }
  .question p {
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 2;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question header h4 {
    margin-bottom: 0;
  }
  .btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: var(--clr-grey-special);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: black;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }
  @media (min-width: 992px) {
    .question h4 {
      font-size: 1.5rem;
    }
  }
`;

export default Wrapper;
