import { screen } from '@testing-library/react';
import { Home } from '../Home';
import { render } from '../../../utils/customRender';

describe('Home test', () => {
  it('should render Home', () => {
    render(<Home />);
    expect(screen.getByTestId('home-test')).toBeInTheDocument();
  });
});
