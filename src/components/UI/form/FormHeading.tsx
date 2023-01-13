import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  info: string;
  link: string;
  linkText: string;
}
const FormHeading = ({ title, info, link, linkText }: Props) => {
  return (
    <section>
      <h1 className="section-title">{title}</h1>
      <p className="account-info">
        {info}{' '}
        <Link to={link} className="sign-up account-info">
          {linkText}
        </Link>
      </p>
    </section>
  );
};
export default FormHeading;
