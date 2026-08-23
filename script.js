const $ = (id) => document.getElementById(id);

const ui = {
  ko: {
    languageButton: "ENGLISH", languageLabel: "Switch to English",
    homeSubtitle: "청주 원도심으로<br>시간여행", homeHint: "CD 안에 저장된 2000년대 청주를 열어보세요.",
    start: "▶ PLAY 2000s", loadingTitle: "2000년대로 접속 중...", loadingText: "청주 원도심의 기억을 불러오고 있습니다.",
    home: "← 처음으로", capsuleLabel: "TODAY'S TIME CAPSULE", contentTitle: "오늘 열어볼<br>2000년대 청주",
    musicLabel: "그때 그 노래", storyLabel: "그때 청주에서는", trendLabel: "그때 유행했던 것들",
    photoLabel: "성안길 옛 사진", photoIntro: "작은 사진을 누르면 공식 성안길 갤러리의 원본 기록으로 이동합니다.",
    photoSource: "사진 출처: 청주성안길 상점가상인회 공식 갤러리 ↗", photoAlt: "성안길 옛 거리 사진",
    missionLabel: "TODAY'S 2000s COURSE", missionTitle: "오늘의 2000s 코스",
    previewReady: "재생 버튼을 누르면 공식 YouTube 영상이 15초간 재생됩니다.",
    previewPlay: "▶ 15초 미리듣기", previewStop: "■ 미리듣기 정지", previewPlaying: "공식 YouTube 영상 미리듣기 재생 중...",
    previewEnded: "15초 미리듣기가 끝났습니다. 다시 들을 수 있어요.",
    previewLocal: "로컬 파일에서는 YouTube 재생이 제한될 수 있습니다. GitHub Pages 주소에서 확인하거나 공식 영상을 열어주세요.",
    youtubeFull: "↗ 공식 영상 전체 보기", source: "기록 출처 보기 ↗", retry: "↻ 다시 시간여행", archive: "▦ 전체 기록 보기",
    archiveTitle: "CHEONGJU MEMORY ARCHIVE", archiveIntro: "2000년대 청주 원도심 기록을 연도별로 살펴보세요.",
    creatorButton: "☻ 제작자 두더지상회", creatorHome: "제작자 두더지상회", creatorWindowTitle: "CREATOR_DUDEOJI.exe", closeLabel: "닫기",
    creatorEyebrow: "MADE IN CHEONGJU", creatorTitle: "두더지상회", creatorTagline: "청주의 오래된 기억을 오늘의 물건과 디지털 경험으로 연결합니다.",
    creatorProjectText: "CD 키링과 NFC 태그를 통해 성안길의 음악, 기록, 유행을 다시 꺼내 보는 로컬 타임캡슐 프로젝트입니다.", creatorCredit: "기획 · 디자인 · 제작",
    copyright: "기억과 기록을 바탕으로 만든 청주 원도심 타임캡슐입니다."
  },
  en: {
    languageButton: "한국어", languageLabel: "한국어로 전환",
    homeSubtitle: "Time travel to<br>Cheongju's old downtown", homeHint: "Open the Cheongju memories stored inside this CD.",
    start: "▶ PLAY 2000s", loadingTitle: "Connecting to the 2000s...", loadingText: "Loading memories from downtown Cheongju.",
    home: "← HOME", capsuleLabel: "TODAY'S TIME CAPSULE", contentTitle: "Today's glimpse of<br>Cheongju in the 2000s",
    musicLabel: "THE SONG BACK THEN", storyLabel: "CHEONGJU BACK THEN", trendLabel: "Y2K THINGS WE LOVED",
    photoLabel: "OLD SEONGAN-GIL PHOTOS", photoIntro: "Tap a small photo to open the original record in the official Seongan-gil gallery.",
    photoSource: "Photo source: Cheongju Seongan-gil Merchants Association ↗", photoAlt: "Historic Seongan-gil street photo",
    missionLabel: "TODAY'S 2000s COURSE", missionTitle: "Your 2000s course",
    previewReady: "Press play for a 15-second preview from the official YouTube video.",
    previewPlay: "▶ PLAY 15 SEC", previewStop: "■ STOP PREVIEW", previewPlaying: "Playing the official YouTube preview...",
    previewEnded: "The 15-second preview has ended. You can play it again.",
    previewLocal: "YouTube playback can be restricted from local files. Test on GitHub Pages or open the official video.",
    youtubeFull: "↗ WATCH FULL OFFICIAL VIDEO", source: "View source ↗", retry: "↻ TIME TRAVEL AGAIN", archive: "▦ VIEW ALL RECORDS",
    archiveTitle: "CHEONGJU MEMORY ARCHIVE", archiveIntro: "Browse downtown Cheongju memories from the 2000s by year.",
    creatorButton: "☻ CREATOR: DUDEOJI SHOP", creatorHome: "CREATOR: DUDEOJI SHOP", creatorWindowTitle: "CREATOR_DUDEOJI.exe", closeLabel: "Close",
    creatorEyebrow: "MADE IN CHEONGJU", creatorTitle: "Dudeoji Shop", creatorTagline: "Connecting Cheongju's old memories with objects and digital experiences for today.",
    creatorProjectText: "A local time-capsule project that reopens Seongan-gil's music, records and trends through a CD keyring and NFC tag.", creatorCredit: "PLANNING · DESIGN · PRODUCTION",
    copyright: "A downtown Cheongju time capsule built from memories and documented records."
  }
};

const songs = [
  {year:"1996", title:"캔디 (Candy)", artist:"H.O.T.", videoId:"3NUaXU1d-NY", start:45,
    copy:{ko:"알록달록한 무대 의상과 쉬운 포인트 안무로 1세대 아이돌 시대를 연 대표곡.",en:"A defining first-generation idol hit remembered for colorful outfits and instantly recognizable choreography."}},
  {year:"1997", title:"행복", artist:"H.O.T.", videoId:"h1y1PjPVcCg", start:45,
    copy:{ko:"밝은 멜로디와 풍성한 무대 의상으로 1997년의 낙천적인 아이돌 감성을 보여준 곡.",en:"Bright melodies and playful stage outfits captured the optimistic idol spirit of 1997."}},
  {year:"1997", title:"We Are The Future", artist:"H.O.T.", videoId:"quBARk6E_84", start:36,
    copy:{ko:"강한 전자음과 군무로 당시 청소년 문화의 에너지를 선명하게 보여준 무대.",en:"Hard electronic beats and synchronized dance captured the energy of late-1990s youth culture."}},
  {year:"1997", title:"('Cause) I'm Your Girl", artist:"S.E.S.", videoId:"fBge8oUfFwU", start:40,
    copy:{ko:"부드러운 화음과 풋풋한 분위기로 1세대 걸그룹의 시작을 알린 데뷔곡.",en:"Soft harmonies and a youthful mood introduced a defining first-generation girl group."}},
  {year:"1998", title:"Dreams Come True", artist:"S.E.S.", videoId:"8uiR4SrDGZk", start:52,
    copy:{ko:"몽환적인 전자음과 세기말 분위기가 어우러진 1998년의 대표적인 걸그룹 곡.",en:"Dreamy electronic sounds and a late-1990s atmosphere shaped this signature girl-group track."}},
  {year:"1998", title:"너를 사랑해", artist:"S.E.S.", videoId:"Sn1lBRxonq8", start:45,
    copy:{ko:"통통 튀는 후렴과 사랑스러운 안무가 돋보인 1998년의 밝은 겨울 노래.",en:"A bubbly chorus and charming choreography made this a bright winter favorite in 1998."}},
  {year:"1998", title:"내 남자 친구에게", artist:"Fin.K.L", videoId:"sEWWvHKG8_s", start:44,
    copy:{ko:"발랄한 멜로디와 의상이 친구들 사이에서 따라 하기 열풍을 만든 곡.",en:"Its lively melody and styling sparked countless sing-alongs and dance imitations."}},
  {year:"1998", title:"Road Fighter", artist:"SECHSKIES", videoId:"j5CL0Vck6A8", start:34,
    copy:{ko:"빠른 비트와 힘 있는 군무로 1세대 보이그룹 경쟁 시대를 상징한 곡.",en:"Fast beats and forceful choreography embodied the competitive first-generation boy-group era."}},
  {year:"1998", title:"커플", artist:"SECHSKIES", videoId:"qqkavNXs5u4", start:55,
    copy:{ko:"겨울 거리와 노래방에서 꾸준히 불린 젝스키스의 따뜻한 대표곡.",en:"A warm Sechskies classic that remained a winter street and karaoke favorite."}},
  {year:"1999", title:"영원한 사랑", artist:"Fin.K.L", videoId:"CRR9Wsqf8Ls", start:52,
    copy:{ko:"친구들과 후렴구를 따라 부르고 손동작까지 맞춰보던 1999년의 밝은 아이돌 팝.",en:"Bright 1999 idol pop whose chorus and hand choreography invited everyone to join in."}},
  {year:"1999", title:"T.O.P.", artist:"SHINHWA", videoId:"tosQj7d58SU", start:35,
    copy:{ko:"클래식 선율을 강한 비트와 군무로 재해석하며 신화의 색을 각인시킨 곡.",en:"Shinhwa fused a classical motif with strong beats and synchronized choreography to define their early sound."}},
  {year:"1999", title:"Friday Night", artist:"g.o.d", videoId:"MBiIeiAJlDQ", start:38,
    copy:{ko:"주말 밤의 설렘을 친근한 랩과 춤으로 풀어낸 1세대 국민 아이돌의 무대.",en:"Friendly rap and dance captured the excitement of a weekend night."}},
  {year:"1999", title:"Get Up", artist:"Baby V.O.X", videoId:"UomlsR06sHQ", start:28,
    copy:{ko:"강렬한 스타일과 당당한 퍼포먼스로 걸그룹의 새로운 이미지를 보여준 곡.",en:"Bold styling and confident performance presented a tougher new girl-group image."}},
  {year:"2000", title:"Now", artist:"Fin.K.L", videoId:"oVZN84cEPac", start:42,
    copy:{ko:"성숙한 이미지와 세련된 전자음으로 핑클의 변화를 보여준 2000년 대표곡.",en:"A sleek electronic sound and mature image marked Fin.K.L's transformation in 2000."}},
  {year:"2000", title:"거짓말", artist:"g.o.d", videoId:"I3FHA_qASro", start:70,
    copy:{ko:"대사처럼 이어지는 랩과 애절한 후렴으로 온 세대가 함께 부른 국민가요.",en:"Conversational rap and an emotional chorus turned this into a song sung across generations."}},
  {year:"2000", title:"촛불하나", artist:"g.o.d", videoId:"jPry6wnwyqU", start:40,
    copy:{ko:"힘든 순간을 함께 버티자는 따뜻한 메시지가 오래 사랑받은 응원가.",en:"Its warm message about enduring hard times together made it a lasting anthem of encouragement."}},
  {year:"2000", title:"Hey U", artist:"Chakra", videoId:"cqQrqjZH3Fk", start:41,
    copy:{ko:"독특한 콘셉트와 경쾌한 리듬으로 세기 전환기의 음악방송을 채운 곡.",en:"A distinctive concept and lively rhythm filled music shows at the turn of the millennium."}},
  {year:"2001", title:"백전무패", artist:"Click-B", videoId:"G9tjIAas2hs", start:43,
    copy:{ko:"밴드 사운드와 아이돌 퍼포먼스를 함께 보여준 클릭비의 강렬한 대표곡.",en:"Click-B's forceful signature track combined live-band energy with idol performance."}},
  {year:"2001", title:"Wild Eyes", artist:"SHINHWA", videoId:"0eafnEBd05w", start:38,
    copy:{ko:"의자를 활용한 절도 있는 안무로 음악방송 무대에 강한 인상을 남긴 곡.",en:"Sharp chair choreography made this one of the era's most memorable music-show performances."}},
  {year:"2002", title:"우연", artist:"Baby V.O.X", videoId:"JBXbo4to8PM", start:39,
    copy:{ko:"익숙한 멜로디와 시원한 댄스 비트로 2002년 여름을 달군 곡.",en:"A familiar melody and refreshing dance beat made it a defining song of summer 2002."}},
  {year:"2002", title:"Perfect Man", artist:"SHINHWA", videoId:"Lxe9yXVa24Q", start:50,
    copy:{ko:"세련된 멜로디와 정교한 군무로 신화의 전성기를 대표하는 곡.",en:"A polished melody and precise choreography represented Shinhwa at their peak."}},
  {year:"2002", title:"No.1", artist:"BoA", videoId:"ceZc-5p3g1w", start:45,
    copy:{ko:"CD 플레이어와 미니홈피 BGM이 일상이던 시절을 떠올리게 하는 2002년의 댄스 팝.",en:"A landmark 2002 dance-pop track that evokes CD players and carefully chosen minihompy background music."}},
  {year:"2003", title:"Cowboy", artist:"Click-B", videoId:"WNYbJy334bc", start:37,
    copy:{ko:"록 기타와 거친 분위기로 클릭비의 밴드 색깔을 다시 강조한 곡.",en:"Rock guitar and rugged styling brought Click-B's band identity back to the foreground."}},
  {year:"2003", title:"Hit Song", artist:"NRG", videoId:"L0qK9XfiToo", start:43,
    copy:{ko:"유쾌한 안무와 중독성 있는 후렴으로 2003년 예능과 무대를 누빈 곡.",en:"Playful choreography and an addictive chorus made this a 2003 variety-show and stage favorite."}},
  {year:"2003", title:"니가 참 좋아", artist:"Jewelry", videoId:"Qm5XKGEXr-o", start:47,
    copy:{ko:"밝고 솔직한 가사와 쉽게 따라 부르는 후렴으로 사랑받은 걸그룹 팝.",en:"Bright, candid lyrics and an easy chorus made this girl-group pop instantly lovable."}},
  {year:"2003", title:"아틀란티스 소녀", artist:"BoA", videoId:"skbnuIhVQUA", start:58,
    copy:{ko:"맑고 신비로운 분위기로 2003년 여름과 그 시절 청춘의 감각을 떠올리게 하는 곡.",en:"Its bright, mysterious mood evokes the summer of 2003 and the youthful optimism of the era."}},
  {year:"2003", title:"Milky Way", artist:"BoA", videoId:"M48JMEkiu3Q", start:43,
    copy:{ko:"청량한 멜로디와 희망적인 분위기가 아틀란티스 소녀와 함께 여름을 채운 곡.",en:"A refreshing melody and hopeful mood made it a perfect companion to Atlantis Princess."}},
  {year:"2004", title:"Hug (포옹)", artist:"TVXQ!", videoId:"xQ635vE2RQI", start:45,
    copy:{ko:"부드러운 화음과 풋풋한 이미지로 2000년대 초반 아이돌 감성을 보여준 데뷔곡.",en:"Soft harmonies and a youthful image captured early-2000s idol sentiment in TVXQ!'s debut."}},
  {year:"2005", title:"Rising Sun (순수)", artist:"TVXQ!", videoId:"2ZxK60hbX-s", start:55,
    copy:{ko:"대형 군무와 극적인 구성이 2005년 아이돌 퍼포먼스의 기준을 높인 곡.",en:"Large-scale choreography and dramatic structure raised the bar for idol performance in 2005."}},
  {year:"2007", title:"Tell Me", artist:"Wonder Girls", videoId:"BlHv3BbBv6A", start:53,
    copy:{ko:"따라 하기 쉬운 안무가 전국을 휩쓴 2007년의 댄스 열풍. 친구들과 포인트 춤을 맞춰보던 기억.",en:"The 2007 dance craze whose easy-to-follow choreography had friends learning every key move."}}
].map(song => ({...song, youtube:`https://www.youtube.com/watch?v=${song.videoId}`}));

const cheongjuStories = [
  {year:"2000", title:{ko:"성안길에 문을 연 apM",en:"apM opens on Seongan-gil"},
    text:{ko:"2000년 6월, 의류점과 게임장·식당 등 약 250개 점포를 갖춘 복합쇼핑몰 apM이 문을 열었습니다. 당시 성안길이 쇼핑과 만남의 중심지였던 풍경을 보여줍니다.",en:"In June 2000, the apM shopping complex opened with roughly 250 fashion shops, an arcade and restaurants, reflecting Seongan-gil's role as a major shopping and meeting place."},
    source:"https://www.ccdn.co.kr/news/articleView.html?idxno=378129"},
  {year:"2005", title:{ko:"거리가 무대가 된 성안길축제",en:"Seongan-gil becomes a festival stage"},
    text:{ko:"2005년 5월 27일부터 29일까지 성안길에서 퍼레이드, 공연, 거리미술, 청소년 프로그램이 펼쳐졌습니다. 쇼핑 거리 전체가 시민과 예술가의 무대로 변했습니다.",en:"From May 27 to 29, 2005, Seongan-gil hosted a parade, performances, street art and youth programs, turning the shopping district into a stage for citizens and artists."},
    source:"https://okcb.net/11544"},
  {year:"2007", title:{ko:"원도심에 등장한 멀티플렉스",en:"A multiplex arrives downtown"},
    text:{ko:"2007년 10월 CGV청주가 문을 열며 성안길 일대의 영화 관람 문화가 대형 멀티플렉스 중심으로 재편됐습니다. 영화 약속 뒤 시내를 걷는 코스가 자연스럽게 이어졌습니다.",en:"CGV Cheongju opened in October 2007, shifting local cinema culture toward a large multiplex and reinforcing the familiar movie-and-downtown-walk outing."},
    source:"https://www.cctoday.co.kr/news/articleView.html?idxno=245642"},
  {year:"2008", title:{ko:"전국 문화의 달, 청주에서",en:"Korea's Culture Month comes to Cheongju"},
    text:{ko:"2008년 10월 17일부터 19일까지 문화의 달 행사가 청주에서 열렸습니다. 공연, 전시, 광장문화제와 청주 줄다리기 재현 등 도시 곳곳이 문화 프로그램으로 연결됐습니다.",en:"From October 17 to 19, 2008, Cheongju hosted the national Culture Month program, linking performances, exhibitions, a plaza festival and a revival of Cheongju tug-of-war."},
    source:"https://www.korea.kr/news/policyNewsView.do?newsId=148658019"}
];

const trends = [
  {icon:"FLIP", title:{ko:"폴더폰",en:"Flip phones"}, text:{ko:"찰칵 닫는 손맛, 문자메시지, 컬러링과 휴대폰 줄 꾸미기가 일상이었습니다.",en:"The snap of closing a phone, SMS, ringback tones and phone charms were part of everyday life."}},
  {icon:"CY", title:{ko:"싸이월드 미니홈피",en:"Cyworld minihompy"}, text:{ko:"도토리로 스킨과 BGM을 사고 일촌평과 사진첩으로 하루를 기록했습니다.",en:"Acorns bought skins and BGM, while guestbook notes and photo albums documented daily life."}},
  {icon:"MP3", title:{ko:"MP3 플레이어",en:"MP3 players"}, text:{ko:"용량을 계산하며 좋아하는 곡만 골라 넣고 이어폰 한쪽을 친구와 나눴습니다.",en:"We counted storage, loaded only favorite tracks and shared one earbud with a friend."}},
  {icon:"BUD", title:{ko:"버디버디",en:"BuddyBuddy"}, text:{ko:"컴퓨터를 켜고 친구의 접속 알림을 기다리던 메신저 문화가 있었습니다.",en:"We turned on the computer and waited for a friend's messenger login alert."}},
  {icon:"PIC", title:{ko:"스티커사진",en:"Sticker photos"}, text:{ko:"좁은 부스에 모여 사진을 찍고 낙서와 스티커를 더해 한 장씩 나눴습니다.",en:"Friends squeezed into a booth, decorated photos with doodles and divided the printouts."}},
  {icon:"DDR", title:{ko:"DDR과 펌프",en:"DDR and Pump"}, text:{ko:"오락실 발판 위에서 박자에 맞춰 움직이며 구경꾼까지 모으던 리듬게임.",en:"Rhythm games turned arcade dance pads into stages that drew spectators."}},
  {icon:"80B", title:{ko:"문자 80바이트",en:"80-byte texts"}, text:{ko:"짧은 글자 수 안에 마음을 담고 특수문자로 이모티콘을 만들었습니다.",en:"Feelings had to fit inside a tiny character limit, often with handmade text emoticons."}},
  {icon:"RING", title:{ko:"컬러링",en:"Ringback tones"}, text:{ko:"전화를 건 사람에게 들려줄 노래가 취향과 기분을 보여주는 프로필이었습니다.",en:"The song callers heard before pickup became an audible profile of taste and mood."}},
  {icon:"CAM", title:{ko:"디지털카메라",en:"Digital cameras"}, text:{ko:"플래시를 터뜨려 찍은 사진을 PC로 옮겨 미니홈피에 올렸습니다.",en:"Flash-lit photos moved from compact cameras to a PC and then onto a minihompy."}},
  {icon:"CAN", title:{ko:"캔모아와 생크림 토스트",en:"Dessert cafés"}, text:{ko:"친구와 오래 이야기하며 과일빙수와 생크림 토스트를 나눠 먹던 약속 장소.",en:"Fruit shaved ice and cream toast accompanied long conversations at favorite meeting spots."}},
  {icon:"ULZZ", title:{ko:"얼짱 문화",en:"Ulzzang culture"}, text:{ko:"큰 눈 화장, 셀카 각도, 사진 보정법이 온라인에서 빠르게 퍼졌습니다.",en:"Eye makeup, selfie angles and photo-editing tricks spread quickly online."}},
  {icon:"GAME", title:{ko:"오락실과 PC방",en:"Arcades and PC bangs"}, text:{ko:"시내에서 만나 게임 한 판을 하고 다음 장소로 이동하는 코스가 익숙했습니다.",en:"Meeting downtown often began with a game before the group moved to its next stop."}}
];

const missions = [
  {ko:"성안길을 걷다가 스티커사진 느낌의 사진을 찍고, 오늘 나온 곡을 들으며 원도심의 오래된 간판을 찾아보세요.",en:"Walk Seongan-gil, take a sticker-photo-style picture, then listen to today's track while spotting an old downtown sign."},
  {ko:"철당간에서 성안길을 지나 중앙동까지 걸으며 2000년대에 있었을 법한 약속 장소를 하나 골라보세요.",en:"Walk from the Iron Flagpole through Seongan-gil to Jungang-dong and choose a spot that could have been your 2000s meeting place."},
  {ko:"CD 키링과 함께 원도심 풍경을 찍고, 문자 80바이트 안에 오늘의 청주를 설명해 보세요.",en:"Photograph the CD keyring downtown, then describe today's Cheongju within an old-school 80-byte text limit."},
  {ko:"육거리시장까지 천천히 걸으며 지금도 남아 있는 2000년대의 색, 글씨, 소리를 세 가지 찾아보세요.",en:"Walk toward Yukgeori Market and find three surviving colors, letterforms or sounds that remind you of the 2000s."},
  {ko:"친구와 이어폰을 한쪽씩 나눠 낀 기분으로 추천곡을 듣고, 서로의 미니홈피 BGM을 한 곡씩 골라보세요.",en:"Imagine sharing earbuds with a friend, listen to the track and each choose one song for your imaginary minihompy BGM."}
];

let language = localStorage.getItem("cheongju2000s-language") || "ko";
let currentCapsule = null;
let previewTimer = null;
let previewActive = false;

function pick(array){ return array[Math.floor(Math.random() * array.length)]; }
function sample(array, count){
  const pool = [...array];
  const result = [];
  while(result.length < count && pool.length){ result.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]); }
  return result;
}
function localized(value){ return typeof value === "string" ? value : value[language]; }

function applyLanguage(){
  const t = ui[language];
  document.documentElement.lang = language;
  $("languageButton").textContent = t.languageButton;
  $("languageButton").setAttribute("aria-label", t.languageLabel);
  $("homeSubtitle").innerHTML = t.homeSubtitle;
  $("homeHint").textContent = t.homeHint;
  $("startButton").textContent = t.start;
  $("loadingTitle").textContent = t.loadingTitle;
  $("loadingText").textContent = t.loadingText;
  $("homeButton").textContent = t.home;
  $("capsuleLabel").textContent = t.capsuleLabel;
  $("contentTitle").innerHTML = t.contentTitle;
  $("musicSectionLabel").textContent = t.musicLabel;
  $("storySectionLabel").textContent = t.storyLabel;
  $("trendSectionLabel").textContent = t.trendLabel;
  $("photoSectionLabel").textContent = t.photoLabel;
  $("photoIntro").textContent = t.photoIntro;
  $("photoSource").textContent = t.photoSource;
  document.querySelectorAll(".old-photo").forEach((image, index) => { image.alt = `${t.photoAlt} ${index + 1}`; });
  $("missionLabel").textContent = t.missionLabel;
  $("missionHeading").textContent = t.missionTitle;
  $("previewButton").textContent = previewActive ? t.previewStop : t.previewPlay;
  if(!previewActive) $("previewStatus").textContent = t.previewReady;
  $("youtubeButton").textContent = t.youtubeFull;
  $("storySource").textContent = t.source;
  $("retryButton").textContent = t.retry;
  $("archiveButton").textContent = t.archive;
  $("archiveTitle").textContent = t.archiveTitle;
  $("archiveIntro").textContent = t.archiveIntro;
  $("homeCreatorButton").textContent = t.creatorHome;
  $("creatorButton").textContent = t.creatorButton;
  $("creatorWindowTitle").textContent = t.creatorWindowTitle;
  $("creatorCloseButton").setAttribute("aria-label", t.closeLabel);
  $("creatorEyebrow").textContent = t.creatorEyebrow;
  $("creatorTitle").textContent = t.creatorTitle;
  $("creatorTagline").textContent = t.creatorTagline;
  $("creatorProjectText").textContent = t.creatorProjectText;
  $("creatorCredit").textContent = t.creatorCredit;
  $("copyrightText").textContent = t.copyright;
  if(currentCapsule) renderCapsule(currentCapsule, false);
  renderArchive();
}

function stopPreview(messageKey = null){
  clearTimeout(previewTimer);
  previewTimer = null;
  previewActive = false;
  $("youtubeFrame").src = "about:blank";
  $("youtubeFrame").classList.add("hidden");
  $("youtubePoster").classList.remove("hidden");
  $("previewButton").textContent = ui[language].previewPlay;
  $("previewButton").setAttribute("aria-pressed", "false");
  if(messageKey) $("previewStatus").textContent = ui[language][messageKey];
}

function startPreview(){
  if(!currentCapsule) return;
  if(previewActive){ stopPreview("previewReady"); return; }
  const song = currentCapsule.song;
  if(!["http:", "https:"].includes(location.protocol)){
    $("previewStatus").textContent = ui[language].previewLocal;
    return;
  }
  const start = song.start || 0;
  const end = start + 15;
  const params = new URLSearchParams({autoplay:"1", start:String(start), end:String(end), playsinline:"1", rel:"0", modestbranding:"1", iv_load_policy:"3"});
  $("youtubeFrame").src = `https://www.youtube-nocookie.com/embed/${song.videoId}?${params}`;
  $("youtubePoster").classList.add("hidden");
  $("youtubeFrame").classList.remove("hidden");
  previewActive = true;
  $("previewButton").textContent = ui[language].previewStop;
  $("previewButton").setAttribute("aria-pressed", "true");
  $("previewStatus").textContent = ui[language].previewPlaying;
  previewTimer = setTimeout(() => stopPreview("previewEnded"), 16000);
}

function renderCapsule(capsule, resetPreview = true){
  if(resetPreview) stopPreview();
  currentCapsule = capsule;
  const {song, story, selectedTrends, mission, number} = capsule;
  $("capsuleNumber").textContent = `CAPSULE NO. ${number}`;
  $("songYear").textContent = song.year;
  $("songTitle").textContent = song.title;
  $("songArtist").textContent = song.artist;
  $("songCopy").textContent = localized(song.copy);
  $("youtubeButton").href = song.youtube;
  $("youtubePoster").src = `https://i.ytimg.com/vi/${song.videoId}/hqdefault.jpg`;
  $("youtubePoster").alt = `${song.artist} ${song.title} YouTube thumbnail`;
  $("storyYear").textContent = story.year;
  $("storyTitle").textContent = localized(story.title);
  $("storyText").textContent = localized(story.text);
  $("storySource").href = story.source;
  $("trendList").replaceChildren(...selectedTrends.map(trend => {
    const item = document.createElement("article");
    item.className = "trend-item";
    const icon = document.createElement("span");
    icon.className = "trend-icon";
    icon.textContent = trend.icon;
    const copy = document.createElement("div");
    const strong = document.createElement("strong");
    strong.textContent = localized(trend.title);
    const p = document.createElement("p");
    p.textContent = localized(trend.text);
    copy.append(strong, p);
    item.append(icon, copy);
    return item;
  }));
  $("missionText").textContent = localized(mission);
}

function makeCapsule(){
  return {
    song: pick(songs),
    story: pick(cheongjuStories),
    selectedTrends: sample(trends, 3),
    mission: pick(missions),
    number: String(Math.floor(1000 + Math.random() * 9000))
  };
}

function renderArchive(){
  $("archiveList").replaceChildren(...cheongjuStories.map(story => {
    const article = document.createElement("article");
    article.className = "archive-item";
    const year = document.createElement("span");
    year.textContent = story.year;
    const body = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = localized(story.title);
    const text = document.createElement("p");
    text.textContent = localized(story.text);
    const link = document.createElement("a");
    link.href = story.source;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = ui[language].source;
    body.append(title, text, link);
    article.append(year, body);
    return article;
  }));
}

async function startTimeTravel(delay = 1050){
  stopPreview();
  $("homeScreen").classList.add("hidden");
  $("contentScreen").classList.add("hidden");
  $("loadingScreen").classList.remove("hidden");
  await new Promise(resolve => setTimeout(resolve, delay));
  renderCapsule(makeCapsule());
  $("loadingScreen").classList.add("hidden");
  $("contentScreen").classList.remove("hidden");
  window.scrollTo({top:0, behavior:"instant"});
}

$("languageButton").addEventListener("click", () => {
  language = language === "ko" ? "en" : "ko";
  localStorage.setItem("cheongju2000s-language", language);
  applyLanguage();
});
$("startButton").addEventListener("click", () => startTimeTravel());
$("retryButton").addEventListener("click", () => startTimeTravel(650));
$("previewButton").addEventListener("click", startPreview);
$("homeButton").addEventListener("click", () => {
  stopPreview();
  $("contentScreen").classList.add("hidden");
  $("loadingScreen").classList.add("hidden");
  $("homeScreen").classList.remove("hidden");
  window.scrollTo({top:0, behavior:"instant"});
});
$("archiveButton").addEventListener("click", () => {
  renderArchive();
  const dialog = $("archiveDialog");
  if(typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
});
$("archiveCloseButton").addEventListener("click", () => $("archiveDialog").close());
$("archiveDialog").addEventListener("click", (event) => {
  if(event.target === $("archiveDialog")) $("archiveDialog").close();
});
function openCreator(){
  const dialog = $("creatorDialog");
  if(typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
}
$("homeCreatorButton").addEventListener("click", openCreator);
$("creatorButton").addEventListener("click", openCreator);
$("creatorCloseButton").addEventListener("click", () => $("creatorDialog").close());
$("creatorDialog").addEventListener("click", (event) => {
  if(event.target === $("creatorDialog")) $("creatorDialog").close();
});
window.addEventListener("pagehide", () => stopPreview());

applyLanguage();
