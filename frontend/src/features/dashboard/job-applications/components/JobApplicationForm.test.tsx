import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JobApplicationForm from './JobApplicationForm';

describe('JobApplicationForm', () => {
  const mockHandleFormChange = jest.fn();
  const mockHandleFormSubmit = jest.fn((e) => e.preventDefault());
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <JobApplicationForm
        companyName="Test Corp"
        handleFormChange={mockHandleFormChange}
        handleFormSubmit={mockHandleFormSubmit}
      />
    );
  });

  it('should render the form with the correct fields', () => {
    expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /company name/i })).toHaveValue(
      'Test Corp'
    );
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should call handleFormChange when the input value changes', async () => {
    const companyName = 'New Company';
    const input = screen.getByRole('textbox', { name: /company name/i });

    await user.type(input, companyName);

    expect(mockHandleFormChange).toHaveBeenCalledTimes(companyName.length);
  });

  it('should call handleFormSubmit on form submission', async () => {
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await user.click(submitButton);

    expect(mockHandleFormSubmit).toHaveBeenCalledTimes(1);
  });
});
