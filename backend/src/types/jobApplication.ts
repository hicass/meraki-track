export type NewJobApplication = {
  companyName: string;
};

export type JobApplication = NewJobApplication & {
  id: number;
};
