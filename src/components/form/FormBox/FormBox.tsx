import styles from './FormBox.module.css';

interface Props {
  children: React.ReactNode;
}
export const FormBox = ({ children }: Props) => {
  return <section className={styles.formBox}>{children}</section>;
};
