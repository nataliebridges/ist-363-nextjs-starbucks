import { useState } from 'react'

// next.js components
import Image from 'next/image'
import Link from 'next/link'

// custom components
import Container from './container'
import Row from './row'
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'

// styles
import styles from './header.module.scss'

export default function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <header className={styles.header}>

            <Container>
                <Row justifyContentSpaceBetween>

                <Link href="/">
                    <a>
                        <Image 
                            src="/images/starbucks-logo.svg"
                            width={100}
                            height={100}
                            alt="Starbucks logo"
                        />
                    </a>
                </Link>

                <ButtonUI
                    className={styles.menu_btn} 
                    icon="menu"
                    clickHandler={() => {setIsMenuVisible(true)}}
                />

                {
                    isMenuVisible && // state -- true/ false variable -- base state
                        <NavOverlay // component
                            closeClickHandler={() => {
                                setIsMenuVisible(false) // can be true or false
                            }} 
                        />
                }

                </Row>

            </Container>

        </header> // html element
    )
}