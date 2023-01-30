import { Link } from 'react-router-dom';

import styles from './PageHeader.module.css';
import { PageHeaderProps } from './types';

export const PageHeader = ({ title, info, link, linkText }: PageHeaderProps) => (
  <header>
    <h1 className={styles.sectionTitle}>{title}</h1>
    <p className={styles.accountInfo}>
      {info}
      <Link to={link} className={styles.link}>
        {linkText}
      </Link>
    </p>
  </header>
);
