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
    margin-top: 0.3rem;
    width: calc(100% - 0.3rem - 18px);
  }
  .paste-button-container {
    display: flex;
    gap: 0.3rem;
    width: 100%;
  }
  .paste-button {
    top: 5px;
    right: 8px;
    background: transparent;
    border: transparent;
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export default Wrapper;
