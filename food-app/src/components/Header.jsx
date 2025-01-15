import React from 'react';
import styles from './Header.module.css'; // Импортируем CSS модуль

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>FoodApp</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/" className={styles.navLink}>Home</a></li>
          <li className={styles.navItem}><a href="/about" className={styles.navLink}>About</a></li>
          <li className={styles.navItem}><a href="/recipes" className={styles.navLink}>Recipes</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
