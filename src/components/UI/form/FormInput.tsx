import { HiOutlineUserCircle, HiOutlineEye } from 'react-icons/hi';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  placeholder: string;
  inputBoxClass: string;
  labelTitle: string;
  value: string;
  reactIcon?: string;
}

const FormInput = ({ onChange, name, type, placeholder, inputBoxClass, labelTitle, value, reactIcon }: Props) => {
  return (
    <div className={`input-box ${inputBoxClass}`}>
      <label htmlFor={name} className="labels">
        {labelTitle}
      </label>
      <div className="input-panel">
        // @TODO zaimplementować obsługę ikon react
        <HiOutlineEye className="input-icon" />
        <input type={type} name={name} id={name} value={value} onChange={onChange} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormInput;
