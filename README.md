CHEONGJU 2000s TIME CAPSULE

CD 키링 + NFC용 모바일 웹페이지입니다.
NFC를 태그하면 CD 안에 저장된 2000년대 청주 원도심의 음악, 기록, 유행이 열리는 흐름입니다.

주요 기능
- CHEONGJU 2000s 첫 화면과 Y2K CD 플레이어 디자인
- PLAY > 로딩 > 랜덤 타임캡슐
- 1996~2007년 아이돌 30곡 중 1곡 랜덤
- H.O.T., S.E.S., Fin.K.L, SECHSKIES, SHINHWA, g.o.d, Baby V.O.X, Chakra, Click-B, NRG, Jewelry, BoA, TVXQ!, Wonder Girls 수록
- 30곡 중 29곡을 2005년 이전 노래로 구성
- Apple Music 공식 오디오를 이용한 영상 없는 15초 음악 미리듣기와 정지
- Apple Music 전체 듣기와 공식 YouTube 영상 전체 보기 링크
- 실제 출처가 연결된 1997~2008년 청주 지역 기록 16개
- 청주시 사진DB의 2001년 3월 22일 `성안길 대청소` 사진 16장 미니 갤러리
- 앱 안에서 열리는 제작자 `두더지상회` 소개 페이지
- Y2K 유행 12개 중 3개 랜덤
- 오늘의 2000s 코스 랜덤 추천
- 다시 시간여행
- 전체 기록 보기
- 한국어/영어 전환

오디오 미리듣기 방식
1. 영상 없이 음악만 들을 수 있도록 iTunes Search API에서 Apple Music의 공식 미리듣기 주소를 불러옵니다.
2. 곡 카드가 열리면 공식 미리듣기를 준비하고, 사용자가 '15초 음악 미리듣기' 버튼을 직접 누를 때만 재생합니다.
3. 재생은 15초 뒤 자동으로 멈추며 같은 버튼으로 중간에 정지할 수 있습니다.
4. 전체 음원은 Apple Music 링크, 전체 영상은 공식 YouTube 링크를 사용합니다.
5. 미리듣기 제공 여부는 국가·유통사 정책에 따라 바뀔 수 있으므로 공개 사이트에서 정기적으로 확인하세요.
6. GitHub Pages 배포 뒤 iPhone Safari와 Android Chrome에서 각각 테스트하세요.

간단한 로컬 테스트
- VS Code Live Server를 사용하거나 정적 HTTP 서버로 이 폴더를 여세요.
- index.html을 Finder에서 직접 더블클릭하는 방식은 최종 재생 테스트로 사용하지 마세요.

콘텐츠 수정 위치
- 노래: script.js의 songs
- 청주 기록과 출처: script.js의 cheongjuStories
- Y2K 유행: script.js의 trends
- 오늘의 코스: script.js의 missions
- 한영 UI 문구: script.js의 ui
- 디자인: style.css

노래 데이터 형식
{
  year: "2009",
  title: "곡명",
  artist: "가수명",
  videoId: "YouTube 영상 ID",
  start: 45,
  copy: {ko:"한국어 소개", en:"English copy"}
}

videoId는 https://www.youtube.com/watch?v=VIDEO_ID 의 VIDEO_ID 부분입니다.
start는 15초 미리듣기를 시작할 초 단위 위치입니다.
공식 아티스트·기획사·방송사 채널의 영상 사용을 권장합니다.

청주 기록 출처
- 2001년 3월 22일 `성안길 대청소` 사진 16장: 청주시 사진DB
  https://photo.cheongju.go.kr/photo/selectPhotoInfoWebView.do?key=189&ctgryNo=32&photoInfoNo=17833
  사진 파일을 저장소에 복제하지 않고 공식 사진DB의 미리보기 이미지를 불러옵니다. 사진DB 표기 조건은 공공누리 제2유형(출처표시·비상업적 이용)이며, 초상권에 주의해야 합니다.
- 1997 청주국제공항 개항: 한국공항공사
  https://www.airport.co.kr/cheongju/cms/frCon/index.do?MENU_ID=330
- 1997 청주동물원 개장: 대한민국 정책브리핑
  https://m.korea.kr/news/reporterView.do?newsId=148948788
- 1999 초롱이네도서관 개관: 문화체육관광부 작은도서관
  https://www.mcst.go.kr/slibrary/program/bestPractice/265?&libraryName=&currentPage=51
- 1999 청주시외버스터미널 개장: 연합뉴스
  https://www.yna.co.kr/view/AKR20160105076000064
- 1999 제1회 청주국제공예비엔날레: Google Arts & Culture
  https://artsandculture.google.com/asset/the-rise-of-the-cheongju-craft-biennale/UwFgm8Nn4Y_3_Q?hl=ko
- 2000 성안길 apM 개점: 충청매일 회고 기사
  https://www.ccdn.co.kr/news/articleView.html?idxno=378129
- 2000 망선루 중앙공원 이전·복원: 중부매일
  https://www.jbnews.com/news/articleView.html?idxno=28063
- 2001 청주시한국공예관 개관: 청주시문화산업진흥재단
  https://www.cjculture.org/sub.php?code=65&mode=view&no=33
- 2001 청주백제유물전시관 개관: 청주시
  https://cjyu.cheongju.go.kr/home/sub.do?menukey=7104&mode=view&sn=662&code1=apply1
- 2003 청남대 국민 개방: 충청북도 청남대
  https://www.chungbuk.go.kr/chnam/content.do?key=2004065344327
- 2003 청주시립도서관 개관: 충청매일
  https://www.ccdn.co.kr/news/articleView.html?idxno=983871
- 2004 청주기적의도서관 개관: 중앙일보
  https://www.joongang.co.kr/article/363644
- 2004 국립청주박물관 청명관 개관: 한국민족문화대백과사전
  https://encykorea.aks.ac.kr/Article/E0006255
- 2005 성안길축제: 충북넷
  https://okcb.net/11544
- 2007 CGV청주 개장: 충청투데이
  https://www.cctoday.co.kr/news/articleView.html?idxno=245642
- 2008 문화의 달 청주: 대한민국 정책브리핑
  https://www.korea.kr/news/policyNewsView.do?newsId=148658019

폰트
- style.css는 fonts/Y2KHand.otf를 먼저 찾습니다.
- 현재 첨부물에는 실제 폰트 파일이 없으므로 사용하려면 fonts 폴더를 만들고 Y2KHand.otf를 넣으세요.
- 폰트 파일을 웹에 올리기 전 웹폰트 사용 허가를 확인하세요.

GitHub Pages
1. 새 저장소 최상단에 index.html, style.css, script.js, README.txt를 올립니다.
2. Settings > Pages > Deploy from a branch를 선택합니다.
3. main 브랜치와 /(root)를 선택합니다.
4. 생성된 HTTPS 주소를 NFC 태그에 기록합니다.
5. 최종 주소가 확정되기 전에는 NFC 태그를 읽기 전용으로 잠그지 마세요.

저작권 주의
- 페이지 안에 음원 파일을 복제하거나 배포하지 않고 Apple Music 공식 미리듣기 스트림과 스토어 링크를 사용합니다.
- YouTube는 영상 전체 보기 링크로만 제공하며, 영상을 숨기고 소리만 재생하는 방식은 사용하지 않습니다.
- Apple Music 미리듣기 및 사진DB 자료의 사용 조건을 서비스 공개 전에 다시 확인하세요.
- 기사 문장은 짧게 재서술했고 원문 출처 링크를 함께 제공합니다. 기사 사진을 직접 넣으려면 별도 사용 조건을 확인하세요.
