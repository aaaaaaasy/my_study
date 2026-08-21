import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';
import styles from './ProfileSection.module.css';

const socialLabels = {
  github: 'GitHub',
  youtube: 'YouTube',
  linkedin: 'LinkedIn',
  blog: 'Blog',
};

function ProfileSection({ compact = false }) {
  const line1 = profile.headlineLine1 || 'Fullstack';
  const line2 = profile.headlineLine2 || 'Developer';

  return (
    <section
      className={`${styles.section} ${compact ? styles.compact : ''}`}
      aria-labelledby="intro-title"
    >
      <div className={styles.dots} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.hello}>
          Hello, I&apos;m <span className={styles.nameAccent}>{profile.name}</span>
        </p>
        <h1 id="intro-title" className={styles.headline}>
          {line1}
          <br />
          {line2}
        </h1>
        {!compact && <p className={styles.bio}>{profile.longBio}</p>}
        {compact && <p className={styles.bioShort}>{profile.bio}</p>}

        <div className={styles.actions}>
          <Link to="/favorites" className={styles.hireBtn}>
            MY FAVORITES 보기
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            문의하기
          </Link>
        </div>

        {!compact && profile.skills.length > 0 && (
          <div className={styles.skills} aria-label="주요 기술">
            {profile.skills.slice(0, 8).map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className={styles.social} aria-label="소셜 링크">
          {Object.entries(profile.social).map(([key, url]) =>
            url ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {socialLabels[key] || key}
              </a>
            ) : null
          )}
        </div>
      </div>

      <div className={styles.portraitColumn}>
        <div className={styles.photoWrap}>
          {profile.image ? (
            <img
              src={profile.image}
              alt={`${profile.name} 프로필 사진`}
              className={styles.photo}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className={styles.emblem} aria-hidden="true">
              <span className={styles.emblemIcon}>🎬</span>
              <span className={styles.emblemIcon}>🎵</span>
              <span className={styles.emblemIcon}>📺</span>
              <span className={styles.emblemIcon}>⚽</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
