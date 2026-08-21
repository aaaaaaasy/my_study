import { socialBannerItems } from '../../data/socialBanner';
import styles from './SocialBanner.module.css';

function Icon({ id }) {
  switch (id) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
          <circle cx="12" cy="12" r="12" fill="#1877F2" />
          <path
            fill="#fff"
            d="M13.5 12.8h2.1l.3-2.3h-2.4V9.1c0-.7.2-1.1 1.2-1.1h1.3V5.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.2v1.5H8.6v2.3h2.3V18h2.6v-5.2z"
          />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
          <path
            fill="#fff"
            d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.7L5.3 22H2.2l7.3-8.3L1 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20z"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
          <defs>
            <radialGradient id="ig" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig)" />
          <rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="#fff" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.6" />
          <circle cx="16.4" cy="7.6" r="1" fill="#fff" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
          <circle cx="12" cy="12" r="12" fill="#FF0000" />
          <path fill="#fff" d="M10 8.5v7l6-3.5-6-3.5z" />
        </svg>
      );
    case 'snapchat':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
          <circle cx="12" cy="12" r="12" fill="#FFFC00" />
          <path
            fill="#000"
            d="M12 5.2c-2.4 0-3.8 1.6-3.8 3.6v1.3c0 .2-.1.6-.5.7-.3.1-.5 0-.6-.1-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7.4.3.8.5 1.2.7.1.1.2.3.1.5-.3 1.2-1.4 1.9-2.1 2.2-.3.1-.4.4-.3.7.1.2.3.4.6.4.1 0 .9-.1 1.6.3.5.3 1 .9 2 .9s1.5-.6 2-.9c.7-.4 1.5-.3 1.6-.3.3 0 .5-.2.6-.4.1-.3 0-.6-.3-.7-.7-.3-1.8-1-2.1-2.2 0-.2.1-.4.1-.5.4-.2.8-.4 1.2-.7.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0-.1.1-.3.2-.6.1-.4-.1-.5-.5-.5-.7V8.8c0-2 1.4-3.6 3.8-3.6z"
          />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
          <circle cx="12" cy="12" r="12" fill="#000" />
          <path
            fill="#fff"
            d="M16.5 8.2c-.8-.5-1.4-1.3-1.6-2.2h-2.1v9.1c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.2 0 .4 0 .6.1V10c-.2 0-.4-.1-.6-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V9.8c.9.7 2 1.1 3.2 1.1V8.8c-.6 0-1.2-.2-1.7-.6z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SocialBanner() {
  const items = socialBannerItems.filter((item) => item.url);

  if (items.length === 0) return null;

  return (
    <nav className={styles.banner} aria-label="소셜 미디어">
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              className={styles.item}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconWrap}>
                <Icon id={item.id} />
              </span>
              <span className={styles.label}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialBanner;
