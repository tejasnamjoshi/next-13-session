import Link from 'next/link';
import React from 'react'
import styles from './Navigation.module.css';

interface NavigationProps {
    links: Array<{ title: string, url: string }>
}

const Navigation = ({ links }: NavigationProps) => {
  return (
    <ul className={styles.nav}>
        {links.map(link => (
            <li key={link.url}>
                <Link className={styles.navItemLink} href={link.url}>
                    {link.title}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default Navigation