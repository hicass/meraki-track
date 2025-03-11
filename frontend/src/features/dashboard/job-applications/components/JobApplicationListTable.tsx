import Button from '@/components/ui/Buttons/Button';
import { FC } from 'react';
import { JobApplication } from 'types/jobApplication';

interface JobApplicationListTableProps {
  jobApplications: JobApplication[];
  handleDeleteJobApplication: (id: number) => void;
}

const JobApplicationListTable: FC<JobApplicationListTableProps> = ({
  jobApplications,
  handleDeleteJobApplication,
}) => {
  const applicationElements = jobApplications.map((application) => (
    <tr key={application.id}>
      <td>
        <Button
          content="x"
          onClick={() => handleDeleteJobApplication(application.id)}
        />
      </td>
      <td className="border-r-white border-r-[0.5px] border-b-white border-b-[0.5px] p-2">
        {application.companyName}
      </td>
    </tr>
  ));

  if (!jobApplications.length) {
    return <p>No job applications found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className="border-r-white border-r-[0.5px] border-b-white border-b-[0.5px] p-2">
            Company Name
          </th>
        </tr>
      </thead>
      <tbody>{applicationElements}</tbody>
    </table>
  );
};

export default JobApplicationListTable;
