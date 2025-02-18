import { FC } from 'react';
import { JobApplication } from 'types/jobApplication';

interface JobApplicationListTableProps {
  applications: JobApplication[];
}

const JobApplicationListTable: FC<JobApplicationListTableProps> = ({
  applications,
}) => {
  const applicationElements = applications.map((application) => (
    <tr key={application.id}>
      <td className='border-r-white border-r-[0.5px] border-b-white border-b-[0.5px] p-2'>{application.companyName}</td>
    </tr>
  ));

  if (!applications.length){
    return <p>No job applications found.</p>
  } 

  return (
    <table>
      <thead>
        <tr>
          <th className='border-r-white border-r-[0.5px] border-b-white border-b-[0.5px] p-2'>Company Name</th>
        </tr>
      </thead>
      <tbody>{applicationElements}</tbody>
    </table>
  );
};

export default JobApplicationListTable;
