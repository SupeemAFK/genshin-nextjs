import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai'

import styles from '../styles/CharacterSidebar.module.css';

export default function characterSidebar({ charactersNameArray, isCharacterSidebarOpen, closeSidebar }) {  
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className={isCharacterSidebarOpen ? `${styles.characterSidebar} ${styles.active}` : styles.characterSidebar}>
            <button onClick={() => closeSidebar()} className={styles.closeBtn}><AiOutlineClose /></button>
            <ul className={styles.nav}>
                {charactersNameArray.map((charactersName, index) => (
                    <li key={index} className={styles.navItems}>
                        <div className={styles.logoWrapper}>
                            <Image src={`/assets/images/characters/${charactersName}/icon.png`} alt={charactersName} width={50} height={50} priority className={styles.logoImg} />
                        </div>
                        <Link href={`/characters/${charactersName}`}>
                            <a className={styles.linkBtn} onClick={() => closeSidebar()}>{capitalizeFirstLetter(charactersName)}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}