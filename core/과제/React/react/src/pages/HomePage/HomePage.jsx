import { Link } from 'react-router-dom';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import { favoriteSections } from '../../data/favorites';
import styles from './HomePage.module.css';

const totalItems = favoriteSections.reduce((sum, section) => sum + section.items.length, 0);

const highlights = [
  { value: String(totalItems), label: '기록해 둔 favorites' },
  { value: String(favoriteSections.length), label: '카테고리' },
  { value: '∞', label: '계속 늘어나는 중' },
];

// 홈 화면 미리보기용: 섹션별로 1개씩 골라서 보여줍니다.
const previewItems = favoriteSections
  .map((section) => ({ section, item: section.items[0] }))
  .filter(({ item }) => Boolean(item));

function HomePage() {
  return (
    <div className={styles.page}>
      <ProfileSection compact />

      <section className={styles.highlightStrip} aria-label="My Favorites 요약">
        {highlights.map((highlight) => (
          <div className={styles.highlight} key={highlight.label}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.section} aria-labelledby="preview-title">
        <div className={styles.sectionHeader}>
          <div>
            <p className="eyebrow">My Favorites</p>
            <h2 id="preview-title" className="section-title">
              제가 좋아하는 것들,<br />조금만 먼저 보여드릴게요.
            </h2>
          </div>
          <Link to="/favorites" className={styles.textLink}>
            전체 보기 <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="card-grid">
          {previewItems.map(({ section, item }, index) => (
            <FavoriteCard
              key={`${section.id}-${item.id}`}
              title={item.title}
              tagline={item.tagline}
              description={item.description}
              year={item.year}
              image={item.image}
              link={item.link}
              colorIndex={index}
              variant="poster"
            />
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <div>
          <p className={styles.ctaKicker}>KEEP EXPLORING</p>
          <h2 id="cta-title">
            더 많은 취향이 궁금하다면,<br /><em>My Favorites로.</em>
          </h2>
        </div>
        <Link to="/favorites" className={styles.ctaButton}>
          My Favorites 전체 보기 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
