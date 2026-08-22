CHEONGJU 2000s TIME CAPSULE

CD 키링 + NFC용 모바일 웹페이지입니다.
NFC를 태그하면 CD 안에 저장된 2000년대 청주 원도심의 음악, 기록, 유행이 열리는 흐름입니다.

주요 기능
- CHEONGJU 2000s 첫 화면과 Y2K CD 플레이어 디자인
- PLAY > 로딩 > 랜덤 타임캡슐
- 2002~2009년 공식 YouTube 영상 8곡 중 1곡 랜덤
- 사용자가 누르는 15초 미리듣기와 정지
- 공식 영상 전체 보기 링크
- 실제 출처가 연결된 청주 원도심 기록 4개
- Y2K 유행 12개 중 3개 랜덤
- 오늘의 2000s 코스 랜덤 추천
- 다시 시간여행
- 전체 기록 보기
- 한국어/영어 전환

YouTube 재생 방식
1. 자동재생은 모바일 브라우저에서 자주 차단되므로 사용자가 '15초 미리듣기' 버튼을 직접 누르는 방식입니다.
2. 버튼을 누른 뒤 youtube-nocookie.com의 공식 임베드가 열리고 15초 뒤 자동으로 멈춥니다.
3. 영상 소유자가 임베드를 제한하거나 네트워크에서 YouTube가 차단되면 '공식 영상 전체 보기' 링크를 사용합니다.
4. file:// 주소로 index.html을 직접 열면 YouTube가 Error 153 등으로 재생을 막을 수 있습니다. GitHub Pages나 로컬 HTTP 서버에서 테스트하세요.
5. GitHub Pages 배포 뒤 iPhone Safari와 Android Chrome에서 각각 테스트하세요.

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
- 2000 성안길 apM 개점: 충청매일 회고 기사
  https://www.ccdn.co.kr/news/articleView.html?idxno=378129
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
- 페이지 안에 음원 파일을 복제하거나 배포하지 않고 YouTube 공식 영상 임베드와 링크만 사용합니다.
- 서비스 공개 전 영상 임베드 가능 여부와 콘텐츠 사용 조건을 다시 확인하세요.
- 기사 문장은 짧게 재서술했고 원문 출처 링크를 함께 제공합니다. 기사 사진을 직접 넣으려면 별도 사용 조건을 확인하세요.
