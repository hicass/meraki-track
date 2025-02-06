import { JobApplication } from '@/types/jobApplication';
import sendRequest from '@/utils/api/send-request';

const BASE_URL = 'api/job-applications';

export function createJobApp(newJobAppInfo: JobApplication) {
  console.log('REQUEST CONTENTS', newJobAppInfo);
  return sendRequest(`${BASE_URL}/new`, 'POST', newJobAppInfo);
}
