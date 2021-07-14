import React from 'react'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
 
import styles from '../styles/Sidebar.module.css'

export default function Sidebar({ closeSidebar, isSidebarOpen }) {
    return (
        <div className={ isSidebarOpen ? `${styles.sidebar} ${styles.active}` : styles.sidebar }>
            <button className={styles.closeBtn} onClick={() => closeSidebar()}><AiOutlineClose /></button>
            <ul className={styles.navbarNav}>
                <li className={styles.navItems}>
                    <Link href="/"><a className={styles.linkBtn}>Home</a></Link>
                </li>
                <li className={styles.navItems}>
                    <Link href="/characters/albedo"><a className={styles.linkBtn}>Character</a></Link> 
                </li>
                <li className={styles.navItems}>
                    <Link href="/more-info"><a className={styles.linkBtn}>More Info</a></Link> 
                </li>
            </ul>
        </div>
    )
}