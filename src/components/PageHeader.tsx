import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  info: string;
  link: string;
  linkText: string;
}
const PageHeader = ({ title, info, link, linkText }: Props) => {
  return (
    <header>
      <h1 className="section-title">{title}</h1>
      <p className="account-info">
        {info}{' '}
        <Link to={link} className="sign-up account-info">
          {linkText}
        </Link>
      </p>
    </header>
  );
};
export default PageHeader;
