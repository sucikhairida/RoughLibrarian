// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughLibrarian title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughLibrarian/i);
    expect(titleElement).toBeInTheDocument();
});
