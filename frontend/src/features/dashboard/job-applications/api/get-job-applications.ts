import sendRequest from '@/utils/api/send-request';

const BASE_URL = 'api/job-applications';

export function getJobApplications() {
  return sendRequest(`${BASE_URL}`, 'GET');
}
