import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  

  > label {
    margin: 0 auto;

    color: #fff;
    font-size: 24px;
    font-family: "roboto";
    font-weight: 500;
  }

  > input {
    width: 100%;
    padding: 5px;
    
    background: #fff;
    border-radius: 5px;
    box-shadow: inset 0px 0px 0px 2px #AEAEAE;

    font-size: 20px;
    color: var(--black);
    font-weight: 500;
    text-align: center;
  }
  
`;
