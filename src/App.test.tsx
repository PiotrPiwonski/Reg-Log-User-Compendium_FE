import App from './App';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';

describe('App test', () => {
  it('should render App', () => {
    render(<App />);
    expect(screen.getByTestId('sign-in-test')).toBeInTheDocument();
  });
});
