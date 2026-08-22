const $ = (id) => document.getElementById(id);

const ui = {
  ko: {
    languageButton: "ENGLISH", languageLabel: "Switch to English",
    homeSubtitle: "청주 원도심으로<br>시간여행", homeHint: "CD 안에 저장된 2000년대 청주를 열어보세요.",
    start: "▶ PLAY 2000s", loadingTitle: "2000년대로 접속 중...", loadingText: "청주 원도심의 기억을 불러오고 있습니다.",
    home: "← 처음으로", capsuleLabel: "TODAY'S TIME CAPSULE", contentTitle: "오늘 열어볼<br>2000년대 청주",
    musicLabel: "그때 그 노래", storyLabel: "그때 청주에서는", trendLabel: "그때 유행했던 것들",
    missionLabel: "TODAY'S 2000s COURSE", missionTitle: "오늘의 2000s 코스",
    previewReady: "재생 버튼을 누르면 공식 YouTube 영상이 15초간 재생됩니다.",
    previewPlay: "▶ 15초 미리듣기", previewStop: "■ 미리듣기 정지", previewPlaying: "공식 YouTube 영상 미리듣기 재생 중...",
    previewEnded: "15초 미리듣기가 끝났습니다. 다시 들을 수 있어요.",
    previewLocal: "로컬 파일에서는 YouTube 재생이 제한될 수 있습니다. GitHub Pages 주소에서 확인하거나 공식 영상을 열어주세요.",
    youtubeFull: "↗ 공식 영상 전체 보기", source: "기록 출처 보기 ↗", retry: "↻ 다시 시간여행", archive: "▦ 전체 기록 보기",
    archiveTitle: "CHEONGJU MEMORY ARCHIVE", archiveIntro: "2000년대 청주 원도심 기록을 연도별로 살펴보세요.",
    copyright: "기억과 기록을 바탕으로 만든 청주 원도심 타임캡슐입니다."
  },
  en: {
    languageButton: "한국어", languageLabel: "한국어로 전환",
    homeSubtitle: "Time travel to<br>Cheongju's old downtown", homeHint: "Open the Cheongju memories stored inside this CD.",
    start: "▶ PLAY 2000s", loadingTitle: "Connecting to the 2000s...", loadingText: "Loading memories from downtown Cheongju.",
    home: "← HOME", capsuleLabel: "TODAY'S TIME CAPSULE", contentTitle: "Today's glimpse of<br>Cheongju in the 2000s",
    musicLabel: "THE SONG BACK THEN", storyLabel: "CHEONGJU BACK THEN", trendLabel: "Y2K THINGS WE LOVED",
    missionLabel: "TODAY'S 2000s COURSE", missionTitle: "Your 2000s course",
    previewReady: "Press play for a 15-second preview from the official YouTube video.",
    previewPlay: "▶ PLAY 15 SEC", previewStop: "■ STOP PREVIEW", previewPlaying: "Playing the official YouTube preview...",
    previewEnded: "The 15-second preview has ended. You can play it again.",
    previewLocal: "YouTube playback can be restricted from local files. Test on GitHub Pages or open the official video.",
    youtubeFull: "↗ WATCH FULL OFFICIAL VIDEO", source: "View source ↗", retry: "↻ TIME TRAVEL AGAIN", archive: "▦ VIEW ALL RECORDS",
    archiveTitle: "CHEONGJU MEMORY ARCHIVE", archiveIntro: "Browse downtown Cheongju memories from the 2000s by year.",
    copyright: "A downtown Cheongju time capsule built from memories and documented records."
  }
};

const songs = [
  {year:"2002", title:"No.1", artist:"BoA", videoId:"ceZc-5p3g1w", start:45,
    copy:{ko:"CD 플레이어와 미니홈피 BGM이 일상이던 시절을 떠올리게 하는 2002년의 대표적인 댄스 팝.",en:"A landmark 2002 dance-pop track that evokes CD players and carefully chosen minihompy background music."}},
  {year:"2005", title:"Fly", artist:"Epik High", videoId:"AEdzLYKcYZY", start:34,
    copy:{ko:"MP3 플레이리스트와 노래방을 오가며 힘을 북돋아 주던 2005년의 곡.",en:"A 2005 anthem that moved between MP3 playlists and karaoke rooms, lifting listeners up."}},
  {year:"2007", title:"Tell Me", artist:"Wonder Girls", videoId:"BlHv3BbBv6A", start:53,
    copy:{ko:"따라 하기 쉬운 안무가 전국을 휩쓴 2007년의 댄스 열풍. 친구들과 포인트 춤을 맞춰보던 기억.",en:"The 2007 dance craze whose easy-to-follow choreography had friends learning every key move."}},
  {year:"2007", title:"거짓말 (LIES)", artist:"BIGBANG", videoId:"2Cv3phvP8Ro", start:49,
    copy:{ko:"거리 매장과 MP3 이어폰에서 끊임없이 흘러나오던 2007년의 감성 힙합 팝.",en:"Emotional hip-hop pop from 2007 that seemed to play everywhere, from street shops to MP3 earbuds."}},
  {year:"2008", title:"주문 - MIROTIC", artist:"TVXQ!", videoId:"HtJS32n6LNQ", start:52,
    copy:{ko:"강한 비트와 퍼포먼스로 2008년 음악방송과 팬 문화를 달군 곡.",en:"A performance-driven 2008 hit whose beat and choreography fueled music shows and fan culture."}},
  {year:"2009", title:"Gee", artist:"Girls' Generation", videoId:"U7mPqycQ0tQ", start:59,
    copy:{ko:"컬러 스키니진과 반복되는 후렴이 2009년 거리의 색과 리듬을 바꾼 곡.",en:"The 2009 hit whose colorful skinny jeans and repeating hook reshaped the look and rhythm of the street."}},
  {year:"2009", title:"미스터 (Mister)", artist:"KARA", videoId:"s2EQm6WPMHs", start:43,
    copy:{ko:"친구들과 포인트 안무를 따라 하게 만들었던 2009년의 밝고 경쾌한 댄스곡.",en:"A bright 2009 dance track that made groups of friends copy its signature choreography."}},
  {year:"2009", title:"Abracadabra", artist:"Brown Eyed Girls", videoId:"ofwFr8o8p0Y", start:52,
    copy:{ko:"전자음과 강렬한 퍼포먼스로 2009년 후반의 분위기를 선명하게 남긴 곡.",en:"Electronic production and striking performance captured the mood of late 2009."}}
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
window.addEventListener("pagehide", () => stopPreview());

applyLanguage();
