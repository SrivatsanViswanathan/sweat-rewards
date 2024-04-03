import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  color: black;
  .winner {
    display: flex;
    flex-direction: column;
  }
  .winner h5 {
    font-weight: bold;
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
  .loser.active {
    display: flex;
    font-weight: bold;
    color: blue;
  }
  .loser {
    display: none;
  }
  .loser p {
    padding: 0.25rem;
  }
  table {
    border-collapse: collapse;
    overflow-y: auto;
    width: 90vw;
    max-width: var(--fixed-width);
  }
  a {
    color: blue;
  }
  th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  td {
    border: 1px solid #ddd;
    padding: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
    }
    .section {
      display: grid;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
    img {
      height: 20rem;
    }
  }
`;

export default Wrapper;
