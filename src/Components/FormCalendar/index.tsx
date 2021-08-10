import { Link, useHistory } from 'react-router-dom';
import {FormEvent, useContext, useState } from 'react';

import { CalendarContext } from '../../Context/CalendarContext';
import { AuthContext } from '../../Context/AuthContext';
import { db } from '../../Services/Firebase'

import { Container } from './styles';

import DataInput from '../DataInput';
import { Button } from '../../Styles/Button';

function FormCalendar() {
  const history = useHistory();

  const { user } = useContext(AuthContext)
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const {date} = useContext(CalendarContext);

  function handleForm(e: FormEvent) {
    e.preventDefault();
    
    if(new Date(date[2], date[1], date[0]).getTime() < new Date().getTime())
    return alert("não marque datas no passado ou datas referentes a hoje")

    db.collection('events').add({
      userID: user?.id,
      eventDate: date,
      eventTitle: title,
      eventTime: time,
      eventDescription: description,
    }).then(() => {console.log("adicionado")})

    history.push('/Home')
  }

  return (
    <Container onSubmit={handleForm}>
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
      <Button className="blue" type="submit" >Adicionar Evento</Button>
      <Button as={Link} to="/Home" className="red">Cancelar</Button>
    </Container>
  );
};

export default FormCalendar;
