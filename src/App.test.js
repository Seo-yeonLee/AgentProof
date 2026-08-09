// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AgentProofX title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AgentProofX/i);
    expect(titleElement).toBeInTheDocument();
});
