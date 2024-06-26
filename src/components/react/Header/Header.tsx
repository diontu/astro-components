import { useStore } from '@nanostores/react'
import { isMenuOpen } from './menuStore'
import styles from './Header.module.css'

export type NavigationType = {
    title: string
    href: string
    submenu?: NavigationType
}

interface Props {
    isTransparent?: boolean
    isFullWidth?: boolean
    nav: NavigationType[]
    children?: React.ReactNode
}

const Header = (props: Props): JSX.Element => {
    const $isMenuOpen = useStore(isMenuOpen)
    const menuHandler = (): void => {
        isMenuOpen.set(!$isMenuOpen)
    }
    return (
        <header
            className={`${styles.header} ${$isMenuOpen ? styles.mobileNavOpened : ''} ${props.isTransparent ? styles.transparentHeader : ''}`}
        >
            <nav
                className={`${styles.navigationWrapper} ${props.isFullWidth ? styles.navFullWidth : ''}`}
            >
                <div className={styles.navigation}>
                    {/* logo */}
                    {/* TODO: make it so that it's an image that has a fixed width and height */}
                    <label>DesignX</label>
                    {/* desktop menu */}
                    <div className={styles.desktopMenu}>
                        <ul className={styles.navList}>
                            {props.nav.map((menu) => (
                                <li key={menu.title}>
                                    <a
                                        className={styles.navLink}
                                        href={menu.href}
                                    >
                                        {menu.title}
                                    </a>
                                    {}
                                </li>
                            ))}
                        </ul>
                        {props.children}
                    </div>
                    {/* mobile menu icon */}
                    <img
                        onClick={menuHandler}
                        className={`${styles.image} ${$isMenuOpen ? styles.openedMenu : ''}`}
                        id="hamburger-menu"
                        src={
                            !$isMenuOpen
                                ? '/burger-menu.svg'
                                : '/icon-close.svg'
                        }
                        alt="hamburger-menu"
                    />
                </div>
                {/* mobile menu */}
                {$isMenuOpen && (
                    <div className={styles.mobileMenuContainer}>
                        <ul id="mobile-menu" className={styles.mobileMenu}>
                            {props.nav.map((menu) => (
                                <li
                                    key={menu.title}
                                    className={styles.mobileLinkWrapper}
                                >
                                    <a
                                        className={styles.mobileLinks}
                                        href={menu.href}
                                    >
                                        <div className={styles.mobileLinkBlock}>
                                            {menu.title}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {props.children}
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header
