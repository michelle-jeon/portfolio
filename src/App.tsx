import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold">포이 | 프론트엔드 개발자</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">안녕하세요 👋</h2>
        <p className="text-xl mb-6">사용자 경험을 고려한 웹 서비스를 만드는 프론트엔드 개발자입니다.</p>
        <div className="space-x-4">
          <Button>프로젝트 보러가기</Button>
          <Button variant="outline">이력서 보기</Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">급여 계산기</h3>
              <p className="text-sm text-gray-600">React와 TypeScript를 이용한 급여 계산 웹앱</p>
              <p className="text-sm mt-2">주요 기능: 실시간 계산, PDF 출력</p>
              <div className="mt-4 space-x-2">
                <a href="https://github.com/yourid/paycalc" className="text-blue-600 underline text-sm">GitHub</a>
                <a href="https://paycalc.vercel.app" className="text-blue-600 underline text-sm">Demo</a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">독서 모임 웹앱</h3>
              <p className="text-sm text-gray-600">Next.js 기반의 모임 관리 서비스</p>
              <p className="text-sm mt-2">주요 기능: 모임 일정, 회원 관리</p>
              <div className="mt-4 space-x-2">
                <a href="https://github.com/yourid/bookclub" className="text-blue-600 underline text-sm">GitHub</a>
                <a href="https://bookclub.vercel.app" className="text-blue-600 underline text-sm">Demo</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        <div className="space-y-4">
          <p>현직 프론트엔드 개발자 (2023~)</p>
          <p>사용 기술: JavaScript, TypeScript, React, Next.js, Git</p>
          <p>협업과 사용자 중심의 개발을 지향합니다.</p>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-8 text-center text-sm text-gray-500 border-t">
        Contact: your@email.com | <a href="https://github.com/yourid" className="underline">GitHub</a>
      </footer>
    </div>
  );
}
