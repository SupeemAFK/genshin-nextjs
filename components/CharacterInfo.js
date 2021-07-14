import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '../styles/CharacterInfo.module.css'

export default function CharacterInfo({ characterData }) { 

    const router = useRouter()
    const { characterNameParam } = router.query
    
    const { name, vision, weapon, nation, affiliation, rarity, constellation, description } = characterData

    return (
        <div className={styles.characterInfo}>
            <div className={styles.container}>
                <div className={styles.characterImgWrapper}>
                    <Image src={`/assets/images/characters/${characterNameParam}/portrait.png`} alt={name} layout='responsive' width={500} height={900} objectFit='contain' />
                </div>
                <div className={styles.characterText}>
                    <h1 className={styles.name}>{name}</h1>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Vision:</h5>
                        <p className={styles.paragraph}>{vision}</p>
                        <div className={styles.visionWrapper}>
                            <Image src={`/assets/images/visions/${vision}.jpg`} alt={vision} width={50} height={50} className={styles.vision} />
                        </div>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Weapon:</h5>
                        <p className={styles.paragraph}>{weapon}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Nation:</h5>
                        <p className={styles.paragraph}>{nation}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Affiliation:</h5>
                        <p className={styles.paragraph}>{affiliation}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Rarity:</h5>
                        <p className={styles.paragraph}>{rarity}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Constellation:</h5>
                        <p className={styles.paragraph}>{constellation}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Description:</h5>
                        <p className={styles.paragraph}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
