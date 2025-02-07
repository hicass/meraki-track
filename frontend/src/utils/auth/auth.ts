import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleLogoutSuccess = (router: AppRouterInstance) => {
  // After successful logout, navigate to the homepage
  router.push('/');
};
