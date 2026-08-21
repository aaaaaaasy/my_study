import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <span className={styles.brandMark}>B</span>
          <div>
            <strong>My Favorites</strong>
            <p>내가 좋아하는 것들의 기록.</p>
          </div>
        </div>
        <div className={styles.meta}>
          <p>© {year} BSY. All rights reserved.</p>
          <Link to="/contact">새 프로젝트 문의하기 ↗</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
