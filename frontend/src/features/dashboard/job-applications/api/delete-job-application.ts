import sendRequest from "@/utils/api/send-request";

const BASE_URL = 'api/job-applications';

export function deleteJobApplication(postId: number) {
  console.log(postId)
  return sendRequest(`${BASE_URL}/${postId}`, 'DELETE');
}