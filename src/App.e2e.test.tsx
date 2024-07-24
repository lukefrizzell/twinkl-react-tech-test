import {render, screen} from '@testing-library/react';
import App from './App';

describe('List of Posts', () => {
    it('should render a loading state', () => {
        render(<App />);
        const loading = screen.getByText('Loading...');
        expect(loading).toBeInTheDocument();
    });

    it('should render a list of posts', async () => {
        render(<App />);
        const posts = await screen.findAllByRole('listitem');
        expect(posts.length).toBeGreaterThan(0);
    });
});