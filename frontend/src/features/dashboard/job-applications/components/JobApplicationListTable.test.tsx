import { render, screen } from '@testing-library/react';
import JobApplicationListTable from './JobApplicationListTable';
import { JobApplication } from 'types/jobApplication';

describe('JobApplicationListTable', () => {
  describe('When there are job applications', () => {
    const mockApplications: JobApplication[] = [
      { id: 1, companyName: 'Google' },
      { id: 2, companyName: 'Meta' },
    ];

    beforeEach(() => {
      render(<JobApplicationListTable applications={mockApplications} />);
    });

    it('should render a table with the correct number of rows', () => {
      const tableLength = mockApplications.length + 1;
      const rows = screen.getAllByRole('row');

      expect(rows).toHaveLength(tableLength);
    });

    it('should display the job application details correctly', () => {
      expect(screen.getByText('Google')).toBeInTheDocument();
      expect(screen.getByText('Meta')).toBeInTheDocument();
    });
  });

  describe('When there are no job applications', () => {
    beforeEach(() => {
      render(<JobApplicationListTable applications={[]} />);
    });

    it('should show an empty state message', () => {
      expect(
        screen.getByText('No job applications found.')
      ).toBeInTheDocument();
    });
  });
});
