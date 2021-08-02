import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin-bottom: 10px;

  background: var(--black);

  border-radius: 10px;
  color: var(--gray-blue);

  > .month {
    width: 270px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-bottom: 0;


    > svg {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    span {
      font-size: 24px;
      font-weight: 500;
      pointer-events: none;
    }
  }

  .line {
    width: 100%;
    height: 2px;
    background: var(--gray-blue);
  }

  .dateSelected {
    font-size: 24px;
    font-weight: 500;
    
    text-align: center;
  }

  .weekday {
    display: flex;
    justify-content: space-around;
    font-weight: 600;

    > p {
      width: calc(100% / 7);
      text-align: center;
    }
  }

  .days {
    display: flex;
    flex-wrap: wrap;
    
    > div {
      width: calc(80% / 7);
      height: 36px;
      margin: calc(20% / 14);
      text-align: center;
      line-height: 36px;

      background: rgba(73, 79, 90, 0.15);
      color: rgba(60, 60, 60, 0.93);
      border-radius: 5px;
      box-shadow: inset 1px 1px 1px #5A5A5A, inset -2px -2px 1px #3C3C3C;
      cursor: pointer;
    }

    > div:not(.otersDays):hover{
      background: rgba(73, 79, 90, 0.45);
    }

    > .today {
      box-shadow: inset 1px 1px 1px #C0C0C0, inset -2px -2px 1px #C0C0C0;
      color: #C0C0C0;
    }

    > .otersDays{
      opacity: 0.4;
      cursor: default;
    }
  }
  
`;
