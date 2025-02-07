import sendRequest from "@/utils/api/send-request";
import { JobApplication } from "types/jobApplication";

const BASE_URL = 'api/job-applications';

export function createJobApplication(newJobApplicationInfo: JobApplication) {
  return sendRequest(`${BASE_URL}/new`, 'POST', newJobApplicationInfo);
}
