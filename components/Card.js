import React from 'react'
import Image from 'next/image'

import styles from '../styles/Card.module.css'

export default function Card({ img, title, info }) {
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <Image src={img} alt={title} width={500} height={300} className={styles.img} />
            </div>
            <div className={styles.info}>
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
        </div>
    )
}