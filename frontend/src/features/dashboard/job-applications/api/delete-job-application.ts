import sendRequest from "@/utils/api/send-request";

const BASE_URL = 'api/job-applications';

export function deleteJobApplication(jobApplicationId: number) {
  return sendRequest(`${BASE_URL}/${jobApplicationId}`, 'DELETE', {jobApplicationId: jobApplicationId});
}