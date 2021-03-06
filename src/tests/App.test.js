import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

afterEach(cleanup)

test('It works', async () => {
  const { getByText, getByRole } = render(<App />);
  const Title = getByText('Testing with React Testing Library');
  expect(Title).toBeInTheDocument();

  const PrevTitle = getByText('Nothing to see here.');
  expect(PrevTitle).toBeInTheDocument();

  const Button = getByRole('button', {name: 'Click'});
  expect(Button).toBeInTheDocument();
  fireEvent.click(Button);

  const FetchTitle = await waitFor(() => getByText('quis ut nam facilis et officia qui') )

  expect(FetchTitle).toBeInTheDocument();

  fireEvent.click(Button);
  expect(PrevTitle).toBeInTheDocument();
  
});
