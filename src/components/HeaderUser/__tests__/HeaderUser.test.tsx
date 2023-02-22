import { screen } from '@testing-library/react';
import { render } from '../../../utils/customRender';
import { HeaderUser } from '../HeaderUser';

describe('HeaderUser', () => {
  beforeEach(() => {
    render(<HeaderUser id="test-id" email="test@gmail.com" role="User" />);
  });

  it('should render id', () => {
    expect(screen.getByText('Twoje Id w systemie to: test-id')).toBeInTheDocument();
  });

  it('should render HeaderUser with id', () => {
    expect(screen.getByText('Twoje Id w systemie to: test-id')).toHaveTextContent('Twoje Id w systemie to: test-id');
  });

  it('should render email', () => {
    expect(screen.getByText('Witaj użytkowniku (email) test@gmail.com')).toBeInTheDocument();
  });

  it('should render HeaderUser with email', () => {
    expect(screen.getByText('Witaj użytkowniku (email) test@gmail.com')).toHaveTextContent(
      'Witaj użytkowniku (email) test@gmail.com',
    );
  });

  it('should render role', () => {
    expect(screen.getByText('Twoja rola w systemie to: User')).toBeInTheDocument();
  });

  it('should render HeaderUser with role', () => {
    expect(screen.getByText('Twoja rola w systemie to: User')).toHaveTextContent('Twoja rola w systemie to: User');
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
});
