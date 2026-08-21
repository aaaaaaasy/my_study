import { useState } from 'react';
import styles from './FavoriteCard.module.css';

const PLACEHOLDER_GRADIENTS = [
  'linear-gradient(145deg, #1e3a5f 0%, #0f172a 100%)',
  'linear-gradient(145deg, #1e293b 0%, #0a0f1a 100%)',
  'linear-gradient(145deg, #1e3a8a 0%, #111827 100%)',
  'linear-gradient(145deg, #312e81 0%, #0f172a 100%)',
  'linear-gradient(145deg, #0e7490 0%, #0a0f1a 100%)',
];

const PRODUCT_BG_COUNT = 5;

// 카드 스타일 변형:
// 'poster'  = 가수/드라마의 포스터형 레이아웃 (어두운 배경 위 포스터, 캡션은 아래)
// 'product' = (선택) 제품 사진형 레이아웃 (베이지 스튜디오 배경 + 포스터에 라벨이 붙은 형태)
// 'sports'  = 스포츠 카드
// 'default' = 별도 클래스 없이 기본 .card/.media/.body 스타일
const VARIANT_CLASSES = {
  poster: { card: styles.posterCard, media: styles.posterMedia, body: styles.posterBody },
  product: { card: styles.posterCard, media: styles.productMedia, body: styles.posterBody },
  sports: { card: styles.sportsCard, media: styles.sportsMedia, body: styles.sportsBody },
};

function FavoriteCard({
  title,
  tagline,
  description,
  year,
  image,
  link,
  colorIndex = 0,
  variant = 'default',
}) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(image) && !imgError;
  const placeholderBg = PLACEHOLDER_GRADIENTS[colorIndex % PLACEHOLDER_GRADIENTS.length];
  const productBgClass = styles[`productBg${colorIndex % PRODUCT_BG_COUNT}`];
  const v = VARIANT_CLASSES[variant] || {};
  const isProduct = variant === 'product';

  const cardClass = [styles.card, v.card].filter(Boolean).join(' ');
  const mediaClass = [styles.media, v.media, isProduct && productBgClass].filter(Boolean).join(' ');
  const bodyClass = [styles.body, v.body].filter(Boolean).join(' ');

  const body = (
    <>
      <div className={mediaClass}>
        {isProduct ? (
          <div className={styles.productStage}>
            <span className={styles.productShadow} aria-hidden="true" />
            {showImage ? (
              <img
                src={image}
                alt={title}
                className={styles.productPoster}
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={styles.productPlaceholder} aria-hidden="true">
                <span className={styles.placeholderMark}>{(title && title[0]) || '?'}</span>
              </div>
            )}
            <div className={styles.productLabel}>
              <h3 className={styles.title}>{title || '제목 없음'}</h3>
            </div>
          </div>
        ) : showImage ? (
          <img
            src={image}
            alt={title}
            className={styles.image}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={styles.placeholder}
            style={{ background: placeholderBg }}
            aria-hidden="true"
          >
            <span className={styles.placeholderMark}>
              {(title && title[0]) || '?'}
            </span>
          </div>
        )}
        {year ? <span className={styles.year}>{year}</span> : null}
      </div>

      <div className={bodyClass}>
        {!isProduct && <h3 className={styles.title}>{title || '제목 없음'}</h3>}
        {tagline ? <p className={styles.tagline}>{tagline}</p> : null}
        {description ? <p className={styles.description}>{description}</p> : null}
        {link ? (
          <span className={styles.linkHint}>
            자세히 보기 <span aria-hidden="true">↗</span>
          </span>
        ) : null}
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} className={cardClass} target="_blank" rel="noopener noreferrer">
        {body}
      </a>
    );
  }

  return <article className={cardClass}>{body}</article>;
}

export default FavoriteCard;
