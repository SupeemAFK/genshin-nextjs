import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { MdPlayArrow } from 'react-icons/md'
import axios from 'axios'

import styles from '../../styles/Characters.module.css'

//components
import CharacterSidebar from '../../components/CharacterSidebar'
import CharacterInfo from '../../components/CharacterInfo'

export default function Characters(props) {
    const router = useRouter()
    const [isCharacterSidebarOpen, setIsCharacterSidebarOpen] = useState(false)

    function openSidebar() {
        setIsCharacterSidebarOpen(true)
    }

    function closeSidebar() {
        setIsCharacterSidebarOpen(false)
    }

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.character}>
            <button onClick={() => openSidebar()} className={styles.openCharacterSidebarBtn}><MdPlayArrow /></button>
            <CharacterSidebar charactersNameArray={props.charactersNameArray} isCharacterSidebarOpen={isCharacterSidebarOpen} closeSidebar={closeSidebar} />
            <CharacterInfo characterData={props.characterData} />
        </div>
    )
}

//fetch API
export const getStaticPaths = async () => {
    const { data } = await axios.get('https://api.genshin.dev/characters')
    const paths = data.map(charactersName => {
        return {
            params: { characterNameParam: charactersName }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const response1 = await axios.get('https://api.genshin.dev/characters')
    const response2 = await axios.get(`https://api.genshin.dev/characters/${params.characterNameParam}`)

    const charactersNameArray = response1.data
    const characterData = response2.data

    return {
        props: {
            charactersNameArray,
            characterData
        },
        revalidate: 60
    }
}