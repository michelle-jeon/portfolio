import { useParams } from "react-router-dom";
import WorkDetailLayout from "../components/WorkDetail/WorkDetailLayout";

const workDetails = {
  salary: {
    title: "급여 서비스",
    period: "2024.08 - 2025.05",
    contribution: "Frontend 100%",
    apps: ["하이브리드 웹앱", "웹 어드민"],
    description: [
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
    ],
    steps: [
      {
        sectionTitle: "개발 타임라인",
        items: [
          { title: "기획", detail: "요구사항 수집 및 화면 설계" },
          { title: "직원 관리 개발", detail: "직원 등록/수정/삭제 화면 개발" },
          { title: "클로즈드 베타 테스트(CBT)", detail: "피드백 수집 및 버그 수정" },
          { title: "UI 개발", detail: "디자인 적용 및 스타일링" },
          { title: "앱 개발 완성", detail: "성능 최적화 및 UX 개선" },
          { title: "신고 테스트", detail: "신고 프로세스 시뮬레이션" },
          { title: "어드민 개발", detail: "관리자 페이지 개발" },
        ],
      },
    ],
    gif: "/assets/work-detail/workDetailSalaryDummy.jpg",
  },

  labor: {
    title: "인건비 서비스",
    period: "2023.07 - 2025.07",
    contribution: "Frontend 100%",
    apps: ["하이브리드 웹앱", "웹 어드민"],
    description: [
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
    ],
    steps: [
      {
        sectionTitle: "운영 및 유지보수",
        items: [
          { title: "신고 테스트 기능", detail: "신고 프로세스 시뮬레이션 및 테스트 기능 추가" },
          { title: "설문", detail: "사용자 설문 기능을 개발해 피드백을 수집" },
          { title: "UI 리뉴얼", detail: "사용자 경험 개선을 위한 UI 전면 리뉴얼" },
          { title: "은행 점검 추가", detail: "은행 점검 일정을 시스템에 연동" },
          { title: "신고 기간 모니터링", detail: "신고 기간 내 데이터 모니터링 기능 구현" },
          { title: "신고 화면 개편", detail: "신고 화면을 재설계하고 개발" },
          { title: "아.. 뭐쓸라했지", detail: "기록 누락된 작업 복기" },
        ],
      },
    ],
    gif: "/assets/work-detail/workDetailLaborDummy.jpg",
  },

  interview: {
    title: "면접자 관리 시스템",
    period: "2023.06",
    contribution: "Frontend 100%",
    apps: ["웹페이지","웹 어드민"],
    description: [
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
    ],
    steps: [
      {
        sectionTitle: "개발 내용",
        items: [
          { title: "사용자 화면", detail: "면접자 신청 및 상태 확인 화면 개발" },
          { title: "어드민 개발", detail: "면접 일정 관리 및 상태 변경 어드민 화면 개발" },
        ],
      },
      {
        sectionTitle: "개선",
        items: [
          { title: "엑셀로 붙여넣기", detail: "엑셀 데이터를 복사해 일괄 등록 가능하도록 개선" },
          { title: "마지막 문자 전송일 칼럼 추가", detail: "사용자 목록에 마지막 문자 전송일 표시 추가" },
          { title: "URL 보안 강화", detail: "URL 파라미터 보안 강화로 민감 정보 보호" },
        ],
      },
    ],
    gif: "/assets/work-detail/workDetailRms.gif",
  },
};


export default function WorkDetail() {
  const { id } = useParams();
  const detail = workDetails[id as keyof typeof workDetails];

  if (!detail) return <div>Not Found</div>;

  return <WorkDetailLayout {...detail} />;
}
