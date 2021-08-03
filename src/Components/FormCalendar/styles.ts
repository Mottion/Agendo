import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .textarea{
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

    > textarea {
      width: 100%;
      min-height: 150px;
      padding: 5px;
      resize: none;
      
      background: #fff;
      border-radius: 5px;
      box-shadow: inset 0px 0px 0px 2px #AEAEAE;

      font-size: 20px;
      color: var(--black);
      font-weight: 500;
    }
  }
`;
