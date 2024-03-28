import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #af8de2, #7e57c2);
  box-shadow: var(--shadow-1);
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .icon {
    color: black;
    border: 1px solid red;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: white;
    background: transparent;
    border-color: transparent;
    transition: transform 1s;
    cursor: pointer;
  }
  .toggled {
    transform: rotate(90deg);
  }
  .links a {
    color: white;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }
  .links a:hover {
    background: linear-gradient(to bottom right, purple, pink);

    padding-left: 1.5rem;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: height 1s ease;
  }
  .show-container {
    height: 4.5rem;
  }
  .img {
    width: 12rem;
    height: auto;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
    }
    .links-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5rem;
    }
    ul {
      display: flex;
      flex-direction: row;
    }
    .links a:hover {
      padding-left: 1rem;
    }
    .img {
      width: 15rem;
      height: auto;
    }
  }
`;

export default Wrapper;
