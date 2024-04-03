import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  label {
    text-align: center;
    font-weight: bold;
  }
  a {
    color: black;
    margin: 0;
    padding: 0;
  }
  .btn-block {
    background: black;
  }
  .paste-button-container {
    position: relative;
  }
  .paste-button {
    position: absolute;
    top: 5px;
    right: 12px;
    background: transparent;
    border: transparent;
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export default Wrapper;
