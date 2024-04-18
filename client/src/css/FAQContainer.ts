import styled from 'styled-components';

const Wrapper = styled.section`
  padding-bottom: 2rem;
  .container {
    width: 90vw;
    border-radius: var(--radius);
    padding: 0rem 2rem;
    max-width: var(--fixed-width);
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
  }
  .extra {
    display: flex;
    width: 100%;
    height: auto;
  }
  .socials {
    display: grid;
    gap: 0.5rem;
  }
  .video {
    h4 {
      display: none;
      line-height: 1.2;
      text-align: center;
      font-size: 1.5rem;
    }
    img {
      display: none;
      width: 100%;
      height: auto;
    }
    .reddit-link {
      width: 12rem;
      height: auto;
      margin: auto;
    }
    .discord-link,
    .reddit-link {
      img {
        display: block;
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      max-width: 100%;
    }
    .extra {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .extra {
      max-width: 40.2rem;
    }
    a {
      max-width: var(--fixed-width);
    }
    .socials {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
    .video {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      width: 100%;
      height: auto;
      align-items: center;
      h4 {
        display: block;
      }
      img {
        display: block;
      }
      .reddit-link {
        width: 12rem;
      }
      .discord-link {
        margin-top: 1rem;
        margin-left: 1.5rem;
        width: 20rem;
      }
    }
  }
`;

export default Wrapper;
