import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  main {
    width: 100%;
    height: 100vh;
    background: linear-gradient(255.96deg, #FF4D00 0%, #D58D23 100%);

    > h1 {
      width: 100%;
      padding: 10px 0;
      text-align: center;
      background: var(--black);
      color: #ffffff99;
      border-bottom-left-radius:40px;
      border-bottom-right-radius:40px;
    }

    .event {
      display: flex;
      flex-direction: column;
      
      width: 90%;

      margin: 10px auto;
      padding: 10px;

      background: var(--black);
      color: var(--gray-blue);
      border-radius: 10px;

      text-align: center;
      font-size: 18px;
      font-weight: 500;
    }
  }

  .sidebar {
    width: 100%;
    max-width: 350px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    
    background: linear-gradient(90deg, #FF8A00, #E52E71);

    &::-webkit-scrollbar { 
    	display: none;
    }

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
  &::-webkit-scrollbar { 
    display: none;
  }
`;
