import { useParams } from "react-router-dom";
import WorkDetailLayout from "../components/WorkDetail/WorkDetailLayout";

const workDetails = {
  salary: {
    title: "급여 서비스",
    period: "2024.08 - 2025.05",
    contribution: "Frontend 100%",
    apps: ["자사 프레임워크(Jnut) 기반 앱 및 어드민"],
    description: [
      "개인사업자 사장님이 정규직, 일용직, 프리랜서 등 다양한 고용형태의 직원을 등록하고 급여를 지급할 수 있도록 설계된 급여 자동화 서비스입니다.",
      "보험공단 스크래핑을 통해 정규직 직원을 자동 불러올 수 있으며, 등록된 계좌로 급여를 이체하고 급여명세서도 자동 발송됩니다.",
      "지급된 내역을 바탕으로 원천세 및 지방세 신고, 납부, 지급명세서 제출까지 지원합니다. 본 서비스는 클로즈드 베타 테스트까지 완료되었습니다.",
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
    gif: "/assets/work-detail/workDetailSalary.gif",
  },

  labor: {
    title: "인건비 서비스",
    period: "2023.07 - 2025.07",
    contribution: "Frontend 100%",
    apps: ["자사 프레임워크(Jnut) 기반 앱 및 어드민"],
    description: [
      "프리랜서에게 인건비를 지급하고, 해당 데이터를 기반으로 매월 세무 업무를 자동화하는 서비스입니다.",
      "사용자는 인건비 지급만 완료하면 매달 원천세 및 지방세 신고, 납부, 간이지급명세서 제출이 자동으로 처리되도록 구성되어 있습니다.",
      "2년간 실서비스 운영을 맡아 유지보수 및 신규 기능 개발을 담당했고, 실제 사용자 피드백을 기반으로 설문 기능, 신고 화면 개편, UI 리뉴얼 등 다양한 개선 작업을 수행했습니다.",
      "2025년 6월 기준 재결제율 평균 80%, 월매출 1,000만원 이상을 기록하고 있는 서비스입니다.",
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
        ],
      },
    ],
    gif: "/assets/work-detail/workDetailLabor.gif",
  },

  interview: {
    title: "면접자 관리 시스템",
    period: "2023.06",
    contribution: "Frontend 100%",
    apps: ["자사 프레임워크(Jnut) 기반 웹페이지 및 어드민"],
    description: [
      "면접 대상자들이 직접 온라인으로 코딩 테스트 일정을 예약할 수 있도록 구현한 사내용 예약 시스템입니다.",
      "기존에는 인사 담당자가 전화로 일정을 개별 조율했으나, 이 시스템을 통해 예약 프로세스를 자동화하여 업무 효율을 크게 개선했습니다.",
      "관리자는 어드민 화면에서 예약 현황을 실시간으로 확인하고, 일정 변경이나 상태 업데이트를 간편하게 처리할 수 있도록 구성되어 있습니다.",
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
