/**
 * ============================================================
 * My Favorite 페이지 — 직접 편집하는 곳
 * ============================================================
 *
 * 【글 수정】
 *   title       : 제목 (필수)
 *   tagline     : 한 줄 소개 (카드에 짧게 표시)
 *   description : 자세한 설명 (선택, 카드 하단에 표시)
 *   year        : 연도 / 출시 정보 (선택)
 *   link        : 관련 링크 (선택, 예: 유튜브, 위키)
 *
 * 【이미지 넣는 방법】
 *   1. 이미지 파일을 아래 폴더에 넣습니다.
 *        public/images/favorites/movies/
 *        public/images/favorites/artists/
 *        public/images/favorites/dramas/
 *         *   2. image 값에 경로를 적습니다. (public 기준)
 *        예) '/images/favorites/movies/interstellar.jpg'
 *   3. 이미지가 없으면 image를 비우거나 삭제하면
 *      자동으로 예쁜 플레이스홀더가 나옵니다.
 *
 * 【개수】
 *   항목 개수는 자유롭게 늘리거나 줄여도 됩니다.
 *   id는 숫자로 서로 겹치지 않게만 맞춰 주세요.
 * ============================================================
 */

export const favoritesPageMeta = {
  title: 'My Favorite',
  description: '제가 좋아하는 영화, 가수, 드라마를 소개합니다.',
};

export const favoriteMovies = [
  {
    id: 1,
    title: 'Scarface',
    tagline: '욕망과 야망이 폭발하는 클래식 갱스터 영화',
    description: '브라이언 드 팔마가 연출하고 알 파치노가 주연한 1983년 범죄 영화. 토니 몬타나의 상승과 몰락을 강렬하게 그립니다.',
    year: '1983 · CRIME',
    image: '/images/favorites/movies/scarface.jpg',
    link: 'https://www.imdb.com/title/tt0086250/',
  },
  {
    id: 2,
    title: 'The Big Short',
    tagline: '월스트리트의 거대한 붕괴를 유쾌하고 날카롭게 파헤친 영화',
    description: '실화를 바탕으로 2008년 금융위기를 바라본 작품. 복잡한 금융 이야기를 빠르고 재치 있게 풀어낸 점이 인상적입니다.',
    year: '2015 · DRAMA',
    image: '/images/favorites/movies/the-big-short.jpg',
    link: 'https://www.paramountpictures.com/movies/the-big-short',
  },
  {
    id: 3,
    title: 'Home Alone',
    tagline: '어린 시절의 크리스마스를 떠올리게 하는 최고의 코미디',
    description: '가족 여행에서 혼자 남겨진 케빈이 집을 지키며 두 도둑을 상대하는 이야기. 지금도 다시 보고 싶은 크리스마스 클래식입니다.',
    year: '1990 · COMEDY',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg',
    link: 'https://www.disneyplus.com/en-kr/movies/home-alone/3v4vqKPG2jSr',
  },
  {
    id: 4,
    title: 'Iron Man',
    tagline: '마블 시네마틱 유니버스의 시작을 알린 아이언 히어로',
    description: '토니 스타크가 아이언맨으로 거듭나는 과정을 그린 2008년 슈퍼히어로 영화. 캐릭터와 유머, 액션의 균형이 뛰어납니다.',
    year: '2008 · ACTION',
    image: '/images/favorites/movies/iron-man.jpg',
    link: 'https://www.marvel.com/movies/iron-man',
  },
  {
    id: 6,
    title: 'Blood Diamond',
    tagline: '전쟁과 욕망, 그리고 다이아몬드를 둘러싼 인간의 선택',
    description: '시에라리온 내전을 배경으로 분쟁 다이아몬드의 비극을 다룬 작품. 액션과 사회적 메시지를 함께 담아낸 영화입니다.',
    year: '2006 · DRAMA',
    image: '/images/favorites/movies/blood-diamond.jpg',
    link: 'https://www.imdb.com/title/tt0450259/',
  },
  {
    id: 7,
    title: '8 Mile',
    tagline: '디트로이트 뒷골목에서 랩으로 자신을 증명해가는 청춘의 이야기',
    description: '에미넴이 주연을 맡은 2002년 영화로, 배틀 랩을 통해 자신의 삶과 정체성을 증명해가는 지미의 이야기를 그립니다.',
    year: '2002 · DRAMA',
    image: '/images/favorites/movies/8-mile.jpg',
    link: 'https://www.imdb.com/title/tt0298203/',
  },
  {
    id: 8,
    title: 'The Dark Knight Rises',
    tagline: '배트맨 3부작의 웅장한 완결편',
    description: '크리스토퍼 놀란 감독의 배트맨 3부작 마지막 작품. 고담을 위협하는 새로운 적 베인에 맞서는 배트맨의 마지막 여정을 그립니다.',
    year: '2012 · ACTION',
    image: '/images/favorites/movies/dark-knight-rises.jpg',
    link: 'https://www.imdb.com/title/tt1345836/',
  },
  {
    id: 9,
    title: '국가부도의 날',
    tagline: '1997년 외환위기, 그날의 선택들을 그린 이야기',
    description: 'IMF 외환위기 직전의 대한민국을 배경으로, 위기를 막으려는 사람들과 위기를 기회로 삼으려는 사람들의 시선을 교차해 보여주는 작품입니다.',
    year: '2018 · DRAMA',
    image: '/images/favorites/movies/default-day.jpg',
    link: 'https://www.imdb.com/title/tt8098920/',
  },
];

export const favoriteArtists = [
  {
    id: 1,
    title: 'JAY-Z',
    tagline: '힙합의 역사와 비즈니스를 함께 써 내려간 아이콘',
    description: 'Reasonable Doubt부터 The Blueprint, 4:44까지. 랩의 서사와 자신만의 스타일을 오래도록 구축해 온 아티스트입니다.',
    year: 'HIP-HOP · US',
    image: '/images/favorites/artists/jayz.webp',
    link: 'https://music.apple.com/ai/artist/jay-z/1352449404',
  },
  {
    id: 2,
    title: 'EMINEM',
    tagline: '압도적인 라이밍과 스토리텔링의 마스터',
    description: '빠르고 정교한 플로우, 강렬한 딜리버리, 그리고 자신의 이야기를 음악으로 풀어내는 힘이 인상적입니다.',
    year: 'HIP-HOP · US',
    image: '/images/favorites/artists/eminem.jpg',
    link: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR',
  },
  {
    id: 3,
    title: 'KANYE WEST',
    tagline: '힙합의 사운드와 패션, 비주얼을 확장한 아티스트',
    description: 'College Dropout부터 Yeezus까지 시대마다 새로운 사운드와 비주얼을 실험해 온 프로듀서이자 래퍼입니다.',
    year: 'HIP-HOP · US',
    image: '/images/favorites/artists/kanye.jpg',
    link: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x',
  },
  {
    id: 4,
    title: 'A$AP ROCKY',
    tagline: '음악과 패션, 영상미를 하나로 만드는 감각',
    description: '독특한 사운드와 패션 감각, 비주얼 디렉션까지 자신만의 미학으로 연결하는 멀티 크리에이터입니다.',
    year: 'HIP-HOP · US',
    image: '/images/favorites/artists/asap-rocky.jpg',
    link: 'https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca',
  },
  {
    id: 5,
    title: 'BIGBANG',
    tagline: 'K-POP의 시대를 바꾼 음악과 강렬한 무대',
    description: 'Lies, Haru Haru, Fantastic Baby, BANG BANG BANG 등 수많은 히트곡으로 K-POP의 글로벌 확장에 큰 영향을 준 그룹입니다.',
    year: 'K-POP · KR',
    image: '/images/favorites/artists/bigbang.jpg',
    link: 'https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX',
  },
  {
    id: 6,
    title: 'DRAKE',
    tagline: '랩과 멜로디 사이의 감정을 가장 잘 다루는 아티스트',
    description: '랩과 R&B를 자연스럽게 오가며 관계와 성공, 외로움 같은 감정을 대중적인 음악으로 만들어 냅니다.',
    year: 'HIP-HOP · CA',
    image: '/images/favorites/artists/drake.jpg',
    link: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4',
  },
  {
    id: 7,
    title: 'DR. DRE',
    tagline: '웨스트코스트 힙합 사운드를 설계한 프로듀서',
    description: 'N.W.A부터 The Chronic, 그리고 수많은 아티스트를 발굴한 프로듀싱까지, 힙합 사운드의 기틀을 세운 인물입니다.',
    year: 'HIP-HOP · US',
    image: '/images/favorites/artists/dr-dre.jpg',
    link: 'https://open.spotify.com/artist/2aaLAng2L2aWD2FClzwiep',
  },
  {
    id: 8,
    title: 'PHARRELL WILLIAMS',
    tagline: '장르를 넘나드는 프로듀싱과 사운드 감각',
    description: '프로듀서이자 아티스트로 힙합, 팝, 펑크를 넘나들며 독보적인 사운드를 만들어온 크리에이터입니다.',
    year: 'HIP-HOP · US',
    image: '/images/favorites/artists/pharrell.jpg',
    link: 'https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8',
  },
];

export const favoriteDramas = [
  {
    id: 1,
    title: 'Slow Horses',
    tagline: '실패한 첩보원들의 반격을 그린 영국식 첩보 스릴러',
    description: 'MI5의 좌천된 요원들이 예상치 못한 사건에 휘말리며 펼치는 긴장감 넘치는 이야기. 블랙코미디와 첩보극의 균형이 매력적입니다.',
    year: '2022 · S6 2026',
    image: '/images/favorites/dramas/slow-horses.jpg',
    link: 'https://tv.apple.com/kr/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o',
  },
  {
    id: 2,
    title: 'MobLand',
    tagline: '런던의 두 범죄 가문이 벌이는 치열한 권력 전쟁',
    description: '두 범죄 조직의 충돌과 배신, 그리고 그 사이에서 움직이는 해결사 해리의 이야기를 그린 범죄 드라마입니다.',
    year: '2025 · S2 2026',
    image: '/images/favorites/dramas/mobland.png',
    link: 'https://www.paramountplus.com/shows/mobland/',
  },
  {
    id: 3,
    title: 'Reacher',
    tagline: '거대한 음모에 맞서는 시원하고 묵직한 액션 스릴러',
    description: '전직 군 헌병 잭 리처가 우연히 마주친 사건을 끝까지 파고들며 거대한 범죄와 맞서는 이야기입니다.',
    year: '2022 · S4 2026',
    image: '/images/favorites/dramas/reacher.webp',
    link: 'https://www.primevideo.com/detail/0K16R3PLUFGC2JUE457C26O4OD',
  },
  {
    id: 4,
    title: 'The Playlist',
    tagline: '스포티파이 탄생 신화를 여러 인물의 시선으로 그린 드라마',
    description: '음악 스트리밍 서비스 스포티파이가 만들어지기까지의 과정을 창업자, 개발자, 음악가 등 다양한 인물의 관점으로 엮어낸 넷플릭스 시리즈입니다.',
    year: '2022 · SE',
    image: '/images/favorites/dramas/the-playlist.jpg',
    link: 'https://www.netflix.com/title/81257102',
  },
  {
    id: 5,
    title: '재벌집 막내아들',
    tagline: '죽음을 맞은 뒤 재벌가의 막내아들로 다시 태어난 남자의 인생 2회차',
    description: '순양가의 충직한 직원 윤현우가 죽음을 맞은 뒤 1987년의 진도준으로 다시 태어나, 자신의 운명과 재벌가의 권력을 바꾸어 가는 이야기입니다.',
    year: '2022 · KR',
    image: '/images/favorites/dramas/reborn-rich.jpg',
    link: 'https://tv.jtbc.co.kr/rebornrich',
  },
  {
    id: 6,
    title: '도망자 Plan B',
    tagline: '누명을 쓴 채 전 세계를 도망 다니며 진실을 쫓는 액션 스릴러',
    description: '억울한 누명을 쓰고 쫓기게 된 주인공이 진실을 밝히기 위해 사투를 벌이는 이야기를 그린 액션 드라마입니다.',
    year: '2010 · KR',
    image: '/images/favorites/dramas/fugitive-plan-b.jpg',
    link: '',
  },
];

export const favoriteSports = [
  {
    id: 1,
    title: 'EPL',
    tagline: '세계 최고의 축구 리그를 한눈에',
    description: '잉글랜드 20개 클럽이 경쟁하는 프리미어리그. 2026/27 시즌은 8월 21일 개막하며 총 380경기가 펼쳐집니다.',
    year: 'FOOTBALL · ENGLAND',
    image: '/images/favorites/sports/epl.jpg',
    link: 'https://www.premierleague.com/',
  },
  {
    id: 2,
    title: 'UFC',
    tagline: '최고의 파이터들이 맞붙는 종합격투기',
    description: 'MMA의 대표적인 글로벌 단체. 2026년 8월에는 상하이에서 Road to UFC 준결승과 UFC Fight Night가 연이어 열립니다.',
    year: 'MMA · GLOBAL',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg',
    link: 'https://www.ufc.com/',
  },
  {
    id: 3,
    title: 'NBA',
    tagline: '농구의 역사와 스타들이 모이는 최고의 무대',
    description: '미국과 캐나다 30개 팀이 경쟁하는 프로농구 리그. 2026/27 정규시즌은 10월 20일 시작됩니다.',
    year: 'BASKETBALL · USA',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg',
    link: 'https://www.nba.com/',
  },
  {
    id: 4,
    title: 'MLB',
    tagline: '야구의 전통과 데이터가 만나는 메이저리그',
    description: '미국·캐나다의 30개 구단이 경쟁하는 세계적인 프로야구 리그. 2026 정규시즌 일정과 경기 결과가 계속 업데이트되고 있습니다.',
    year: 'BASEBALL · USA',
    image: '/images/favorites/sports/mlb.jpg',
    link: 'https://www.mlb.com/',
  },
];

/* ---------- 섹션 구성 (이름 · 순서 · 표시 여부) ---------- */
/*
 * 이 배열의 순서가 곧 페이지에 나오는 순서입니다.
 * - 순서 바꾸기: 객체 위치만 위아래로 이동
 * - 이름 바꾸기: badge, title 수정
 * - 숨기기: 해당 줄 삭제 (또는 주석 처리)
 * - 추가하기: 새 항목 배열을 만든 뒤 여기에 객체 추가
 *
 * 예시 — 게임 섹션 추가:
 *   1) 위에 export const favoriteGames = [ ... ]; 작성
 *   2) 아래에 { id: 'games', badge: 'GAMES', title: '좋아하는 게임', items: favoriteGames } 추가
 */

export const favoriteSections = [
  {
    id: 'movies',
    badge: 'Movies',
    title: '좋아하는 영화',
    items: favoriteMovies,
  },
  {
    id: 'artists',
    badge: 'Artists',
    title: '좋아하는 가수',
    items: favoriteArtists,
    viewAll: 'https://open.spotify.com/',
  },
  {
    id: 'dramas',
    badge: 'TV Shows',
    title: '요즘 즐겨보는 드라마',
    items: favoriteDramas,
    viewAll: 'https://tv.jtbc.co.kr/rebornrich',
  },
  {
    id: 'sports',
    badge: 'Sports',
    title: '좋아하는 스포츠',
    items: favoriteSports,
    viewAll: 'https://www.espn.com/',
  },
];
