import { FC } from 'react';

import { FormSubmitHandler, OnChangeHandler } from 'types/handlers';
import { JobApplication } from 'types/jobApplication';

interface JobApplicationFormProps extends JobApplication {
  handleFormChange: OnChangeHandler;
  handleFormSubmit: FormSubmitHandler;
}

const JobApplicationForm: FC<JobApplicationFormProps> = ({
  handleFormChange,
  handleFormSubmit,
  companyName,
}) => {
  return (
    <form
      className="flex flex-col gap-2 p-2 bg-white text-black"
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="companyName">Company Name:</label>
      <input
        id="companyName"
        type="text"
        name="companyName"
        value={companyName}
        onChange={handleFormChange}
        required
      />
      <button className="bg-gray-200 p-2 hover:bg-gray-300" type="submit">
        Submit
      </button>
    </form>
  );
};

export default JobApplicationForm;
