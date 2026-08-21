# My Favorites

React + Vite 기반으로 만든 개인 "My Favorites" 웹사이트입니다.
제가 좋아하는 영화, 아티스트, 드라마, 스포츠를 한곳에 모아 기록합니다.

## 페이지 구성

- 홈 — 소개 + My Favorites 미리보기
- 소개 — 자기소개
- My Favorites — 영화 / 아티스트 / 드라마 / 스포츠 전체 목록
- 문의 — 연락 폼

## 폴더 구조

```
src
├── components   # 재사용 UI (Header, Footer, FavoriteCard, ProfileSection 등)
├── data         # 배열/객체 데이터 (나중에 API로 교체 가능)
├── pages        # 페이지 컴포넌트
├── styles       # 전역 CSS
├── App.jsx      # 라우팅
└── main.jsx     # 진입점
```

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 데이터 수정 방법

`src/data/` 폴더의 파일을 직접 수정하면 됩니다.

| 파일 | 내용 |
|------|------|
| `profile.js` | 이름, 소개, 이미지, 소셜 링크 |
| `favorites.js` | My Favorites 페이지의 영화 / 아티스트 / 드라마 / 스포츠 목록 |
| `socialBanner.js` | 소개 페이지 하단 소셜 아이콘 |
| `nav.js` | 메뉴 항목 |

## My Favorites 페이지 편집 방법

모두 `src/data/favorites.js` 한 파일에서 수정합니다.

### 1. 섹션 이름 · 순서 커스텀
파일 하단의 `favoriteSections` 배열을 편집합니다.

```js
export const favoriteSections = [
  { id: 'movies',  badge: 'Movies',  title: '좋아하는 영화', items: favoriteMovies },
  { id: 'artists', badge: 'Artists', title: '좋아하는 가수', items: favoriteArtists },
  // 순서를 바꾸면 화면 순서도 바뀝니다.
  // 섹션을 지우려면 해당 줄을 삭제하세요.
];
```

- **이름 변경**: `badge`, `title`만 수정
- **순서 변경**: 객체 위치를 위아래로 이동
- **섹션 추가**: 새 배열(예: `favoriteGames`)을 만들고 `favoriteSections`에 객체 추가
- **섹션 삭제**: 해당 객체를 배열에서 제거

### 2. 글 수정
각 항목의 `title`, `tagline`, `description`, `year`, `link`, `image`를 수정합니다.
항목 개수는 자유롭게 늘리거나 줄여도 됩니다.

### 3. 이미지 추가
이미지를 아래 폴더에 넣은 뒤 `image` 경로를 적습니다.

```
public/images/favorites/movies/
public/images/favorites/artists/
public/images/favorites/dramas/
public/images/favorites/sports/
```

예: `image: '/images/favorites/movies/interstellar.jpg'`

## 기술 스택

- React 18
- React Router 6
- Vite 5
- CSS Modules
