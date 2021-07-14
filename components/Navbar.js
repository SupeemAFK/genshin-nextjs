import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

import styles from '../styles/Navbar.module.css'

export default function Navbar({ openSidebar }) {
    return (
        <div className={styles.navbar}> 
            <div className={styles.logo}>
                <Image src="/assets/images/logo/09cac33.png" alt="" layout="responsive" width={150} height={100} objectFit='contain' quality={100} />
            </div>
            <button className={styles.btn}><GiHamburgerMenu onClick={() => openSidebar()} /></button>
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