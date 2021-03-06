import { useState, useEffect, useContext } from 'react'

import { CalendarContext } from '../../Context/CalendarContext';

import { Container } from './styles';
import {ArrowheadLeftOutline, ArrowheadRightOutline} from "styled-icons/evaicons-outline"

function DataInput() {
  const [selectedDate] = useState(new Date());
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  const [month, setMonth] = useState(selectedDate.getMonth());
  var [days, setDays] = useState<React.ReactNode[]>([]);
  var {date, setDate, selectedDay} = useContext(CalendarContext);

  useEffect(() => {
    setDate([selectedDay.getDate(), selectedDay.getMonth(), selectedDay.getFullYear()])
    //`${selectedDay.getDate()}/${selectedDay.getMonth() + 1}/${selectedDay.getFullYear()}`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function handleDays() {
    const SelectLastDayOfTheSelectedMonthe = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0)
    // para saber se o mes selecionado tem 30 ou 31 dias
    const numberOfDaysIntTheSelectedMonth = SelectLastDayOfTheSelectedMonthe.getDate();
    // para saber que dia da semana o ultimo dia do mes selecionado é
    var lastDayOfTheWeek = SelectLastDayOfTheSelectedMonthe.getDay();
    // para pegar o dia atual
    var currentDay = selectedDay.getDate();
    // o array aonde contem os dias: anteriores ao mes selecionado + do mes selecionado + apos o mes selecionado
    var selectedDays = [];
    // o primeiro dia do mes selecionado, com isso, posso saber se o dia 1 é domingo, segundo, terça... e por ai vai, vo usar isso pra ver quantos dias do mes anterior vo precisar colocar no calendario
    let firstDayOfSelectedDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    // pegando o dia da semana
    let amountOfPreviousDays = firstDayOfSelectedDay.getDay();
    // dia 1 - quantia de dias que eu tenho que colocar, pegados no "amountOfPreviousDays" (digamos que seja 4 e o mes anterior tinha 30 dias), sendo assim o resultado a baixo vai ser 26
    firstDayOfSelectedDay.setDate(firstDayOfSelectedDay.getDate() - amountOfPreviousDays - 1);

    // colocando os dias anteriores ao mes selecionado
    for(var i = 0; i < amountOfPreviousDays; i++){
      firstDayOfSelectedDay.setDate(firstDayOfSelectedDay.getDate() + 1);
      selectedDays.push(<div key={i + "a"} className="otersDays" >{firstDayOfSelectedDay.getDate()}</div>);
    }

    //colocando os dias do mes selecionado
    if(selectedDate.getMonth() === selectedDay.getMonth() && selectedDate.getFullYear() === selectedDay.getFullYear()){
      for(let i=1; i <= numberOfDaysIntTheSelectedMonth; i++){
        (i === currentDay)? selectedDays.push(<div key={i} className="today">{i}</div>) : selectedDays.push(<div onClick={() => selectDay(i)} key={i} >{i}</div>)
      }
    }else{
      for(let i=1; i <= numberOfDaysIntTheSelectedMonth; i++){
        selectedDays.push(<div onClick={() => selectDay(i)} key={i} >{i}</div>)
      }
    }

    // colocando os dias posteriores ao mes selecionado
    for(i = 1; lastDayOfTheWeek < 6;i++){
      selectedDays.push(<div key={i + "b"} className="otersDays" >{i}</div>);
      lastDayOfTheWeek++;
    }

    setDays(selectedDays);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() =>{handleDays()},[])

  function handleMonth(operation: number) {
    selectedDate.setMonth(selectedDate.getMonth() + operation);
    setMonth(selectedDate.getMonth());
    handleDays();
  }

  function selectDay(day: number){
    selectedDay.setMonth( selectedDate.getMonth())
    selectedDay.setFullYear( selectedDate.getFullYear())
    selectedDay.setDate(day)
    handleDays();
    setDate([selectedDay.getDate(), selectedDay.getMonth(), selectedDay.getFullYear()])
  }

  return (
    <Container>
      <div className="month">
        <ArrowheadLeftOutline onClick={() => handleMonth(-1)} />
        <span>{months[month]}</span>
        <ArrowheadRightOutline onClick={() => handleMonth(+1)} />
      </div>
      <div className="line"></div>
      <p className="dateSelected">{date[0]}/{date[1] + 1}/{date[2]}</p>
      <div className="line"></div>
      <div className="weekday">
        <p>Dom</p>
        <p>Sab</p>
        <p>Seg</p>
        <p>Ter</p>
        <p>Qua</p>
        <p>Qui</p>
        <p>Sex</p>
      </div>
      <div className="days">{days}</div>
    </Container>
  );
};

export default DataInput;
