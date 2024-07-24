import {render, screen} from '@testing-library/react';
import App from './App';

describe('List of Posts', () => {
    it('should render a list of posts', () => {
        render(<App />);
        const posts = screen.getAllByRole('listitem');
        expect(posts.length).toBeGreaterThan(0);
    });
});