import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--main-gradient);
  position: relative;

  h2 {
    position: absolute;
    left: 10px;

    font-family: Roboto Slab;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0.1em;
  }

  .social-icons {
    position: absolute;
    right: 25px;
    top: 15px;
    display: flex;
    width: max-content;

    svg {
      width: 40px;
      height: 40px;
      margin: 0 5px;
    }
  }

  main {
    width: 100%;
    max-width: 350px;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    > h1 {
      font-size: 35px;
      font-weight: 600;
      text-align: center;

      span {
        background-image: linear-gradient(45deg, #0060F1, #9005FD);
        background-clip: text;
        color: transparent;
        -webkit-background-clip: text;
      }
    }

    > .wrapper {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background: #fff;
      
      padding: 10px;
      margin-top: 15px;
      border-radius: 10px;

      > .button {
        width: 100%;
        height: 50px;

        display: flex;
        align-items: center;
        
        border-radius: 5px;
        margin-top: 15px;
        
        background: rgba(40, 89, 214, 0.92);
        cursor: pointer;

        > span {
          font-size: 28px;
          font-weight: 700;
        }
      }
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }

  .github-link{
    display: flex;
    justify-content: center;

    width: max-content;
    

    position: absolute;
    bottom: 0;
    left: 50%;

    font-size: 1.3rem;

    transform: translate(-50%, -50%);
  }

  @media (max-width: 750px){
    h2 {
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
      font-size: min(48px, 10vw)
    }

    .social-icons {
      left: 50%;
      top: 80%;
      transform: translateX(-50%);
    }

    .button > span {
      font-size: 24px !important;
      font-weight: 700;
    }

    .github-link {
      flex-direction: column;
      align-items: center;
    }
  }
`;
