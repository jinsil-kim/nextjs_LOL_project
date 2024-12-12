export interface Item {
    name: string; // 아이템 이름
    description: string; // HTML 형식의 아이템 설명
    colloq: string; // 콜로퀴얼 이름(검색어)
    plaintext: string; // 간단한 설명
    into?: string[]; // 아이템 업그레이드 경로 (ID 배열)
    image: ItemImage; // 이미지 관련 정보
    gold: ItemGold; // 골드 관련 정보
    tags: string[]; // 아이템 태그 (예: Boots)
    maps: Record<string, boolean>; // 맵 사용 가능 여부
    stats: ItemStats; // 아이템 능력치
  }
  
  export interface ItemImage {
    full: string; // 이미지 파일 이름
    sprite: string; // 스프라이트 파일 이름
    group: string; // 이미지 그룹
    x: number; // 스프라이트 X 좌표
    y: number; // 스프라이트 Y 좌표
    w: number; // 스프라이트 너비
    h: number; // 스프라이트 높이
  }
  
  export interface ItemGold {
    base: number; // 기본 골드 비용
    purchasable: boolean; // 구매 가능 여부
    total: number; // 총 비용
    sell: number; // 판매 시 골드
  }
  
  export interface ItemStats {
    FlatMovementSpeedMod?: number; // 평면 이동 속도 증가량
  }