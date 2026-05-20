import { Mic } from 'lucide-react';
import DomainShell from '../../components/common/DomainShell';
import { domainCards } from '../../constants/domainData';

function InterviewHomePage() {
  return (
    <DomainShell
      eyebrow="INTERVIEW"
      title="AI 모의면접 홈"
      description="텍스트 면접, 미디어 면접, 면접 리포트로 이동하는 면접 트레이닝 시작 화면입니다."
      cards={domainCards.interview}
      primaryAction="모의면접 시작"
      secondaryAction="리포트 보기"
      icon={Mic}
    />
  );
}

export default InterviewHomePage;
