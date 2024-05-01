import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  .update-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    margin-top: -1.5rem;
    align-items: center;
  }
  .update {
    text-align: center;
    color: #06b6d4;
    font-weight: bold;
    margin-bottom: 0.25rem;
    line-height: 1.5;
  }
  .underline {
    width: 50%;
    border: 1.5px solid black;
    color: black;
  }
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
    margin-left: calc(0.3rem + 24px);
    width: calc(100% - 0.3rem - 18px - 0.3rem - 24px);
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
  .circle {
    display: inline-block;
    border: 2px solid black;
    border-radius: 50%;
    padding-right: 9px;
    padding-left: 9px;
    margin-left: 0.25rem;
    cursor: pointer;
  }
`;

export default Wrapper;
