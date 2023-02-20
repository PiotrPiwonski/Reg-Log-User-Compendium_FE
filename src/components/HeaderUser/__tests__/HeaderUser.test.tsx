import { screen } from '@testing-library/react';
import { render } from '../../../utils/customRender';
import { HeaderUser } from '../HeaderUser';

describe('HeaderUser', () => {
  beforeEach(() => {
    render(<HeaderUser id="test-id" email="test@gmail.com" role="User" />);
  });

  it('should render HeaderUser', () => {
    const component1 = screen.getByText('LogOut');
    console.log(component1);
    expect(component1).toBeInTheDocument();
    screen.getByRole('heading');
  });

  it('should render HeaderUser', () => {
    const component2 = screen.getByText('Settings');
    console.log(component2);
    expect(component2).toBeInTheDocument();
    screen.getByRole('heading');
  });

  // it('should render HeaderUser', () => {
  //   expect(screen.getByText('test-id')).toBeInTheDocument();
  // });

  // it('should render HeaderUser with provided info text', () => {
  //   expect(screen.getByText('test-id')).toHaveTextContent('test-id');
  // });
});
