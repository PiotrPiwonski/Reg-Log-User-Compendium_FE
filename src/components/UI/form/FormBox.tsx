interface Props {
  children: React.ReactNode;
}
const FormBox = ({ children }: Props) => {
  return (
    <section className="form-box">
      <div>{children}</div>
    </section>
  );
};

export default FormBox;
