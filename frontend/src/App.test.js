import { render, screen } from 'git@github.com:wahyu9kdl/wahyu9kdl.github.io.git';
import App from './wahyu9kdl.github.io';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/wahyu9kdl.github.io/DASHBOARD/TOOLS/CodeSandbox.html);
  expect(linkElement).toBeInTheDocument();
});
