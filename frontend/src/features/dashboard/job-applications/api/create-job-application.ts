import sendRequest from "@/utils/api/send-request";
import { NewJobApplication } from "types/jobApplication";

const BASE_URL = 'api/job-applications';

export function createJobApplication(newJobApplicationInfo: NewJobApplication) {
  return sendRequest(`${BASE_URL}/new`, 'POST', newJobApplicationInfo);
}
