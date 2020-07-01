import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Harrison Kamau';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
