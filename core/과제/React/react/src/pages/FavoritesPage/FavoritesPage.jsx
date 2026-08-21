import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import { favoritesPageMeta, favoriteSections } from '../../data/favorites';
import styles from './FavoritesPage.module.css';

// 섹션별 레이아웃/카드 스타일. favoriteSections에 없는 새 섹션을 추가하면
// 여기 없어도 기본 그리드 스타일로 자동 표시됩니다.
const SECTION_LAYOUT = {
  movies: { panel: 'editorialPanel', row: 'posterRow', cardVariant: 'poster' },
  artists: { panel: 'editorialPanel', row: 'posterRow', cardVariant: 'poster' },
  dramas: { panel: 'editorialPanel', row: 'posterRow', cardVariant: 'poster' },
  sports: { panel: 'editorialPanel', row: 'sportsRow', cardVariant: 'sports' },
};
const DEFAULT_LAYOUT = { panel: null, row: null, cardVariant: 'default' };

function FavoritesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>{favoritesPageMeta.title}</h1>
        <p className={styles.desc}>{favoritesPageMeta.description}</p>
      </header>

      {favoriteSections.map((section, sectionIndex) => {
        const layout = SECTION_LAYOUT[section.id] || DEFAULT_LAYOUT;
        const panelClass = [styles.panel, layout.panel && styles[layout.panel]]
          .filter(Boolean)
          .join(' ');
        const rowClass = [styles.row, layout.row && styles[layout.row]]
          .filter(Boolean)
          .join(' ');

        return (
          <section key={section.id} className={panelClass} aria-labelledby={`${section.id}-title`}>
            <div className={styles.panelHeader}>
              <div className={styles.panelHeading}>
                <span className={styles.badge}>{section.badge}</span>
                <h2 id={`${section.id}-title`} className={styles.panelTitle}>
                  {section.title}
                  <span className={styles.count}>{section.items.length}</span>
                </h2>
              </div>
              {section.viewAll ? (
                <a
                  className={styles.viewAll}
                  href={section.viewAll}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW ALL <span aria-hidden="true">›</span>
                </a>
              ) : null}
            </div>

            <div className={rowClass}>
              {section.items.map((item, itemIndex) => (
                <FavoriteCard
                  key={item.id}
                  title={item.title}
                  tagline={item.tagline}
                  description={item.description}
                  year={item.year}
                  image={item.image}
                  link={item.link}
                  colorIndex={sectionIndex * 5 + itemIndex}
                  variant={layout.cardVariant}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default FavoritesPage;
