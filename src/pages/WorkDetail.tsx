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
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
    ],
    steps: [
      { title: "기획", detail: "요구사항 수집 및 화면 설계" },
      { title: "직원 관리 개발", detail: "직원 등록/수정/삭제 화면 개발" },
      { title: "클로즈드 베타 테스트(CBT)", detail: "피드백 수집 및 버그 수정" },
      { title: "UI 개발", detail: "디자인 적용 및 스타일링" },
      { title: "앱 개선", detail: "성능 최적화 및 UX 개선" },
      { title: "신고 테스트", detail: "신고 프로세스 시뮬레이션" },
      { title: "어드민 개발", detail: "관리자 페이지 개발" },
    ],
    gif: "/assets/work/salary.gif",
  },
  labor: {
    title: "인건비 서비스",
    period: "2023.07 - 2025.07",
    contribution: "Frontend 100%",
    apps: ["하이브리드 웹앱", "웹 어드민"],
    description: [
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
      "사용한 기술 트러블슈팅한 것 정리 블라블라",
    ],
    steps: [
      { title: "기획", detail: "요구사항 수집 및 화면 설계" },
      { title: "직원 관리 개발", detail: "직원 등록/수정/삭제 화면 개발" },
      { title: "클로즈드 베타 테스트(CBT)", detail: "피드백 수집 및 버그 수정" },
      { title: "UI 개발", detail: "디자인 적용 및 스타일링" },
      { title: "앱 개선", detail: "성능 최적화 및 UX 개선" },
      { title: "신고 테스트", detail: "신고 프로세스 시뮬레이션" },
      { title: "어드민 개발", detail: "관리자 페이지 개발" },
    ],
    gif: "/assets/work/labor.gif",
  },
};

export default function WorkDetail() {
  const { id } = useParams();
  const detail = workDetails[id as keyof typeof workDetails];

  if (!detail) return <div>Not Found</div>;

  return <WorkDetailLayout {...detail} />;
}
