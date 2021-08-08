import { Link } from 'react-router-dom';
import {FormEvent, useContext, useState } from 'react';
import { CalendarContext } from '../../Context/CalendarContext';

import { Container } from './styles';

import DataInput from '../DataInput';
import { Button } from '../../Styles/Button';

function FormCalendar() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const {date} = useContext(CalendarContext)

  function handleForm(e: FormEvent) {
    e.preventDefault();
    console.log(title);
    console.log(time);
    console.log(description);
    console.log(date);
  }

  return (
    <Container>
      <DataInput />
      <label htmlFor="name">Nome do Evento</label>
      <input 
        name="name" 
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
        required
      />

      <label htmlFor="time">Horario</label>
      <input 
        name="time" 
        type="number"
        value={time}
        onChange={event => setTime(event.target.value)}
        min="0"
        max="2359"
        required
      />

      <label htmlFor="description">Descrição</label>
      <textarea 
        name="description" 
        value={description}
        onChange={event => setDescription(event.target.value)}
        required
      />
      <Button className="blue" onClick={handleForm}>Adicionar Evento</Button>
      <Button as={Link} to="/Home" className="red">Cancelar</Button>
    </Container>
  );
};

export default FormCalendar;
