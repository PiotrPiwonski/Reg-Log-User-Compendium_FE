interface Props {
  children: React.ReactNode;
}
const FormBox = ({ children }: Props) => {
  return <section className="form-box">{children}</section>;
};

export default FormBox;
