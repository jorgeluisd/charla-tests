// Button.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import CustomerButton from "./index";

test('Button displays correct label', () => {
  const { getByText } = render(<CustomerButton label="Click me"  onClick={() => {}}/>);
  const buttonElement = getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
