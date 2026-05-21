import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import JobSeekerDashboardPage from '../pages/dashboard/JobSeekerDashboardPage';
import CompanyDashboardPage from '../pages/dashboard/CompanyDashboardPage';

import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import RegisterVerifyPage from '../pages/auth/RegisterVerifyPage';
import ProfilePage from '../pages/auth/ProfilePage';

import CompanyProfilePage from '../pages/company/CompanyProfilePage';
import HrManagerPage from '../pages/company/HrManagerPage';

import JobNoticeListPage from '../pages/jobNotice/JobNoticeListPage';
import JobNoticeDetailPage from '../pages/jobNotice/JobNoticeDetailPage';
import JobNoticeCreatePage from '../pages/jobNotice/JobNoticeCreatePage';
import JobScrapingPage from '../pages/jobNotice/JobScrapingPage';

import ApplicationStatusPage from '../pages/application/ApplicationStatusPage';
import ApplicantManagementPage from '../pages/application/ApplicantManagementPage';
import ApplyPage from '../pages/application/ApplyPage';

import ResumeAnalysisPage from '../pages/documentAnalysis/ResumeAnalysisPage';
import CoverLetterAnalysisPage from '../pages/documentAnalysis/CoverLetterAnalysisPage';

import InterviewHomePage from '../pages/interview/InterviewHomePage';
import TextInterviewPage from '../pages/interview/TextInterviewPage';
import MediaInterviewPage from '../pages/interview/MediaInterviewPage';
import InterviewReportPage from '../pages/interview/InterviewReportPage';

import CommunityPage from '../pages/community/CommunityPage';
import PostDetailPage from '../pages/community/PostDetailPage';
import MentorPage from '../pages/community/MentorPage';

import PricingPage from '../pages/billing/PricingPage';
import PaymentPage from '../pages/billing/PaymentPage';
import CompanyProductPage from '../pages/billing/CompanyProductPage';

import NotFoundPage from '../pages/common/NotFoundPage';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<JobSeekerDashboardPage />} />
        <Route path="dashboard/company" element={<CompanyDashboardPage />} />

        <Route path="auth">
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="register/verify" element={<RegisterVerifyPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="company">
          <Route index element={<Navigate to="/company/profile" replace />} />
          <Route path="profile" element={<CompanyProfilePage />} />
          <Route path="hr-managers" element={<HrManagerPage />} />
        </Route>

        <Route path="jobs">
          <Route index element={<JobNoticeListPage />} />
          <Route path="create" element={<JobNoticeCreatePage />} />
          <Route path="scraping" element={<JobScrapingPage />} />
          <Route path=":jobId" element={<JobNoticeDetailPage />} />
        </Route>

        <Route path="applications">
          <Route index element={<Navigate to="/applications/status" replace />} />
          <Route path="status" element={<ApplicationStatusPage />} />
          <Route path="applicants" element={<ApplicantManagementPage />} />
          <Route path="apply" element={<ApplyPage />} />
        </Route>

        <Route path="documents">
          <Route index element={<Navigate to="/documents/resume" replace />} />
          <Route path="resume" element={<ResumeAnalysisPage />} />
          <Route path="cover-letter" element={<CoverLetterAnalysisPage />} />
        </Route>

        <Route path="interview">
          <Route index element={<InterviewHomePage />} />
          <Route path="text" element={<TextInterviewPage />} />
          <Route path="media" element={<MediaInterviewPage />} />
          <Route path="report" element={<InterviewReportPage />} />
        </Route>

        <Route path="community">
          <Route index element={<CommunityPage />} />
          <Route path="posts/:postId" element={<PostDetailPage />} />
          <Route path="mentor" element={<MentorPage />} />
        </Route>

        <Route path="billing">
          <Route index element={<Navigate to="/billing/pricing" replace />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="company-products" element={<CompanyProductPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
