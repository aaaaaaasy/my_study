import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/nav';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu} aria-label="My Favorites 홈으로 이동">
          <span className={styles.logoMark}>B</span>
          <span>My Favorites</span>
        </NavLink>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`} aria-label="주요 메뉴">
          <ul className={styles.menu}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className={styles.contactLink} onClick={closeMenu}>
            프로젝트 문의 <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
