import { Container } from './styles';

interface InputAndLabelProps {
  label: string;
  name: string;
  inputType?: string;
}

function InputAndLabel({label, name, inputType = "text"}: InputAndLabelProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={inputType}/>
    </Container>
  );
};

export default InputAndLabel;
