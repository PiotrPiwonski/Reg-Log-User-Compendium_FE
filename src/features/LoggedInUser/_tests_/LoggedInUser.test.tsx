import { render } from '../../../utils/customRender';
import { LoggedInUser } from '../LoggedInUser';
import { screen } from '@testing-library/react';

describe('LoggedInUser', () => {
  it('should render LoggedInUser', () => {
    render(<LoggedInUser />);
    const component = screen.getByText('Test LoggedInUser');
    console.log(component);
    expect(component).toBeInTheDocument();
  });
});
