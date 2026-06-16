/**
 * 솔루나 외부 링크 + 임베드 설정 — 운영자가 여기만 고치면 전체 CTA가 바뀐다.
 *
 * UTM: 유입→전환 측정을 위해 아웃바운드 링크에 utm 파라미터를 붙인다.
 * 실제 URL/핸들은 운영자 확인 후 채울 것(현재는 placeholder).
 */

const UTM = '?utm_source=soluna-web&utm_medium=landing&utm_campaign=join'

export const LINKS = {
  /** 카카오톡 오픈채팅 — 메인 가입 경로 */
  kakao: `https://open.kakao.com/o/g99j0pzi`,
  /** 인스타그램 */
  instagram: `https://www.instagram.com/solluna_star`,
  /** 스레드 */
  threads: `https://threads.net/@REPLACE_ME`,
  ogotoClub: `https://ogoto.co/club/YiPpnX9hsZTDdTgCihNF`
} as const

/**
 * RSVP 서비스 임베드 설정.
 * type 'iframe'이면 src를, 'script'면 위젯 스니펫을 GalleryEmbed에서 사용.
 * fallbackUrl: 임베드 로드 실패/차단(카톡·인스타 인앱 브라우저) 시 보여줄 직링크.
 *
 * ⚠️ 임베드 방식은 RSVP 서비스 확정 후 결정. 인앱 브라우저 스파이크 필수.
 */
export const RSVP = {
  enabled: false, // 임베드 코드 확정 전까지 false → fallback 링크만 노출
  embedSrc: '', // iframe src 또는 위젯 URL
  fallbackUrl: 'https://REPLACE_ME-rsvp-service.com/soluna',
  fallbackLabel: '열려있는 모임 보러가기',
} as const
