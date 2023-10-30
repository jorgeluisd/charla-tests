import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('Clicking button shows the message component', () => {
  const { getByText, queryByText } = render(<App />);

  // Al inicio, el mensaje no debe estar presente
  expect(queryByText("Hello from the message component!")).toBeNull();

  const buttonElement = getByText(/show message/i);
  fireEvent.click(buttonElement);

  // Después de hacer clic en el botón, el mensaje debe mostrarse
  expect(getByText("Hello from the message component!")).toBeInTheDocument();
});
