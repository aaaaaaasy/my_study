import { Link } from 'react-router-dom';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import { favoriteSections } from '../../data/favorites';
import styles from './AboutPage.module.css';

const principles = [
  {
    title: '오래 남는 것만',
    desc: '한 번 보고 잊히는 것 말고, 시간이 지나도 다시 찾게 되는 것만 골라 담습니다.',
  },
  {
    title: '순위는 없어요',
    desc: '베스트 랭킹이 아니라 그냥 좋아하는 순서 없는 모음이에요. 우열을 가리지 않습니다.',
  },
  {
    title: '계속 업데이트',
    desc: '새로운 취향이 생기면 언제든 추가합니다. 이 페이지는 항상 현재진행형이에요.',
  },
];

function AboutPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>소개</h1>
      <ProfileSection />

      <section className={styles.snapshot} aria-labelledby="snapshot-title">
        <div className={styles.snapshotHeader}>
          <p className="eyebrow">지금까지 기록한 것들</p>
          <h2 id="snapshot-title" className="section-title">
            카테고리별로 이만큼<br />모아뒀어요.
          </h2>
        </div>
        <div className={styles.snapshotGrid}>
          {favoriteSections.map((section) => (
            <Link to="/favorites" key={section.id} className={styles.snapshotCard}>
              <span className={styles.snapshotBadge}>{section.badge}</span>
              <strong className={styles.snapshotCount}>{section.items.length}</strong>
              <span className={styles.snapshotLabel}>{section.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.principles} aria-labelledby="principles-title">
        <h2 id="principles-title" className="section-title">
          어떻게 고르냐면
        </h2>
        <div className={styles.principleGrid}>
          {principles.map((principle, index) => (
            <div className={styles.principleCard} key={principle.title}>
              <span className={styles.principleIndex}>{String(index + 1).padStart(2, '0')}</span>
              <strong>{principle.title}</strong>
              <p>{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
