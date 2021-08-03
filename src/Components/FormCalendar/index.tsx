import { Container } from './styles';

import DataInput from '../DataInput';
import InputAndLabel from '../InputAndLabel';
import { Button } from '../../Styles/Button';

function FormCalendar() {
  return (
    <Container>
      <DataInput />
      <InputAndLabel label="Nome do Evento" name="title"/>
      <InputAndLabel label="Horario" name="title" inputType="number"/>
      <div className="textarea">
        <label htmlFor="description">Descrição</label>
        <textarea name="description" />
      </div>
      <Button to="/Home" className="red">Cancelar</Button>
    </Container>
  );
};

export default FormCalendar;
