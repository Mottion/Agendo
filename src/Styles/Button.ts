import styled from 'styled-components';

export const Button = styled.button`
  width: 95%;
  padding: 10px;
  margin: 10px 0;

  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  font-family: "Roboto";
  text-align: center;
  font-size: 24px;


  &.blue {
    background: linear-gradient(255.71deg, #1A0F94 0.06%, #2E54B6 100.38%);
  }

  &.green {
    background: linear-gradient(255.71deg, #0C8102 0.06%, #34CB43 100.38%);
  }

  &.red {
    background: linear-gradient(255.71deg, #940F0F 0.06%, #B62E2E 100.38%);
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
