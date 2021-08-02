import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  main {
    width: 100%;
  }

  .sidebar {
    width: 100%;
    max-width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    
    background: linear-gradient(90deg, #FF8A00, #E52E71);

    .profileWrapper {
      width: 100%;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }

      span {
        font-size: 24px;
        color: #fff;
        font-weight: 500;
      }
    }

    .logout {
      width: 100%;
      padding: 5px;
      
      margin-top: auto;

      background: var(--black);
      color: #fff;
      cursor: pointer;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      font-family: "Roboto";
      font-size: 24px;
    }
  }
`;
