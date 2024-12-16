export interface Champion {
  version: string; // 데이터 버전
  id: string; // 챔피언 ID
  key: string; // 챔피언 고유 키 (숫자 형식 문자열)
  name: string; // 챔피언 이름
  title: string; // 챔피언 직함
  blurb: string; // 챔피언 요약 설명
  info: ChampionInfo; // 공격/방어/마법/난이도 관련 정보
  image: ChampionImage; // 이미지 관련 정보
  tags: string[]; // 챔피언 태그 (예: Fighter, Mage 등)
  partype: string; // 자원 유형 (예: Blood Well, Mana 등)
  stats: ChampionStats; // 스탯 정보
}

export interface ChampionInfo {
  attack: number; // 공격 능력치
  defense: number; // 방어 능력치
  magic: number; // 마법 능력치
  difficulty: number; // 난이도
}

export interface ChampionImage {
  full: string; // 이미지 파일 이름 (예: "Aatrox.png")
  sprite: string; // 스프라이트 파일 이름 (예: "champion0.png")
  group: string; // 이미지 그룹 (예: "champion")
  x: number; // 스프라이트 X 좌표
  y: number; // 스프라이트 Y 좌표
  w: number; // 스프라이트 너비
  h: number; // 스프라이트 높이
}

export interface ChampionStats {
  hp: number; // 기본 체력
  hpperlevel: number; // 레벨 당 체력 증가량
  mp: number; // 기본 마나
  mpperlevel: number; // 레벨 당 마나 증가량
  movespeed: number; // 이동 속도
  armor: number; // 기본 방어력
  armorperlevel: number; // 레벨 당 방어력 증가량
  spellblock: number; // 기본 마법 저항력
  spellblockperlevel: number; // 레벨 당 마법 저항력 증가량
  attackrange: number; // 공격 사거리
  hpregen: number; // 기본 체력 재생량
  hpregenperlevel: number; // 레벨 당 체력 재생량 증가량
  mpregen: number; // 기본 마나 재생량
  mpregenperlevel: number; // 레벨 당 마나 재생량 증가량
  crit: number; // 기본 치명타 확률
  critperlevel: number; // 레벨 당 치명타 확률 증가량
  attackdamage: number; // 기본 공격력
  attackdamageperlevel: number; // 레벨 당 공격력 증가량
  attackspeed: number; // 기본 공격 속도
  attackspeedperlevel: number; // 레벨 당 공격 속도 증가량
}

export interface ChampionDetail {
  [key: string]: {
    name: string;
    title: string;
    info: ChampionInfo;
    blurb: string;
    image: ChampionImage;
  };
}
