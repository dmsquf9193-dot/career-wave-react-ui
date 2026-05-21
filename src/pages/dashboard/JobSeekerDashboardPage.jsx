import {
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe2,
  Network,
  Share2,
  Sparkles,
  Target,
  Users,
  Wand2,
} from 'lucide-react';
import heroImage from '../../assets/career-analytics-hero.png';
import './DashboardPage.css';

const featureCards = [
  {
    icon: FileText,
    title: 'AI 서류 분석',
    text: '이력서와 포트폴리오를 AI가 정밀 분석하여 지원 트렌드에 맞는 최적의 보완점을 제안합니다.',
  },
  {
    icon: Users,
    title: '실시간 면접 코칭',
    text: '화상 모의면접부터 답변 구성까지 지원자별 상황에 맞춘 면접 전략을 함께 설계해 드립니다.',
  },
  {
    icon: Wand2,
    title: '스마트 채용 매칭',
    text: '단순 키워드가 아닌 역량과 선호 기업 문화를 종합해 가장 잘 맞는 포지션을 연결합니다.',
  },
];

const jobs = [
  {
    icon: BriefcaseBusiness,
    title: '시니어 프론트엔드 개발자',
    company: '네오테크 시스템즈 · 서울 강남구',
    tags: ['React', 'TypeScript', 'Tailwind'],
    match: '89% 매칭',
  },
  {
    icon: Network,
    title: 'Data Scientist (AI/ML)',
    company: '블루랩 테크놀로지 · 판교',
    tags: ['Python', 'PyTorch', 'SQL'],
    match: '92% 매칭',
  },
  {
    icon: Target,
    title: 'Product Designer',
    company: '소프트 디자인랩 · 서울 성수동',
    tags: ['Figma', 'UX/UI', 'B2B SaaS'],
    match: '82% 매칭',
  },
];

const matchRows = [
  ['기술 스택 적합도', 94],
  ['협업 및 직무 성향', 82],
  ['커리어 목표도', 76],
];

function JobSeekerDashboardPage() {
  return (
    <div className="cw-page cw-home">
      <section className="cw-home-hero">
        <div className="cw-home-hero__copy">
          <span>AI 기반 커리어 가속화 솔루션</span>
          <h1>
            <span>AI와 함께,</span>
            <span>당신의 커리어에 파도를 일으키세요</span>
          </h1>
          <p>
            수천 개의 데이터를 분석한 AI 코치가 당신의 역량을 진단하고, 최적의 IT 커리어
            경로와 매칭 기회를 실시간으로 제안합니다.
          </p>
        </div>

        <div className="cw-home-hero__media">
          <img src={heroImage} alt="AI career analytics dashboard on a tablet" />
        </div>
      </section>

      <section className="cw-home-quickstart">
        <h2>지금 바로 내 프로필로 매칭 시작하기</h2>
        <p>먼저 이력서와 경력을 등록하면 최적의 기업들을 한눈에 추천합니다.</p>
        <a href="/auth/register">내 프로필 업로드하고 시작하기</a>
      </section>

      <section className="cw-home-section cw-home-section--center">
        <h2>Career Wave의 특별함</h2>
        <p>단순한 매칭을 넘어 성공적인 커리어 변화를 돕습니다.</p>
        <div className="cw-home-feature-grid">
          {featureCards.map(({ icon: Icon, title, text }) => (
            <article className="cw-home-feature" key={title}>
              <span>
                <Icon size={19} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cw-home-jobs" id="jobs">
        <header>
          <div>
            <h2>추천 공고</h2>
            <p>사용자의 프로필과 80% 이상 일치하는 공고들입니다.</p>
          </div>
          <a href="/jobs">전체 보기</a>
        </header>

        <div className="cw-home-job-grid">
          {jobs.map(({ icon: Icon, title, company, tags, match }) => (
            <article className="cw-home-job" key={title}>
              <div className="cw-home-job__top">
                <span>
                  <Icon size={20} />
                </span>
                <small>{match}</small>
              </div>
              <h3>{title}</h3>
              <p>{company}</p>
              <div>
                {tags.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </div>
              <footer>
                <small>AI 분석 기반 추천</small>
                <a href="/jobs">상세보기</a>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="cw-home-matching" id="matching">
        <article className="cw-home-engine">
          <header>
            <strong>Career Wave Match Engine</strong>
            <small>실시간 분석 매칭률</small>
          </header>
          <div className="cw-home-bars">
            {matchRows.map(([label, value]) => (
              <div className="cw-home-bar" key={label}>
                <div>
                  <span>{label}</span>
                  <strong>{value}%</strong>
                </div>
                <i>
                  <b style={{ '--progress': `${value}%` }} />
                </i>
              </div>
            ))}
          </div>
          <div className="cw-home-engine__summary">
            <span>
              <small>추천 키워드</small>
              확장성 있는 아키텍처
            </span>
            <span>
              <small>보완 추천</small>
              클라우드 배포 경험
            </span>
          </div>
        </article>

        <div className="cw-home-matching__copy">
          <h2>
            데이터로 증명하는
            <br />
            가장 정확한 커리어 매칭
          </h2>
          <p>
            Career Wave의 AI는 단순히 키워드를 비교하지 않습니다. 당신의 이력서,
            포트폴리오, 그리고 그동안 쌓아온 이력을 다각도로 분석하여 기업이 실제로
            필요로 하는 역량과의 일치도를 계산합니다.
          </p>
          <ul>
            <li>
              <CheckCircle2 size={18} />
              <span>
                <strong>실전 기술 스택 분석</strong>
                프로젝트 경험과 직무 역량을 세밀하게 연결
              </span>
            </li>
            <li>
              <Sparkles size={18} />
              <span>
                <strong>성장 가능성 예측</strong>
                커리어 목표에 맞는 다음 단계까지 함께 제안
              </span>
            </li>
          </ul>
        </div>
      </section>

      <footer className="cw-home-footer">
        <div>
          <strong>Career Wave</strong>
          <p>AI로 여는 커리어의 새로운 흐름</p>
        </div>
        <nav>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </nav>
        <div className="cw-home-footer__bottom">
          <small>© 2024 Career Wave. All rights reserved.</small>
          <span>
            <Globe2 size={16} />
            <Share2 size={16} />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default JobSeekerDashboardPage;
