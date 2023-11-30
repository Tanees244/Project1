import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  it('renders the component without crashing', () => {
    render(<HomePage />);
  });

  it('displays welcome message', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Welcome To My Portfolio !')).toBeInTheDocument();
  });

  it('displays about me information', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText("Hello, my name is Syed Tanees. I'm a passionate developer with a keen interest in technology.")).toBeInTheDocument();
  });

  it('checks if image is rendered with alt text', () => {
    const { getByAltText } = render(<HomePage />);
    expect(getByAltText('Your Image')).toBeInTheDocument();
  });

  it('verifies fade-in animation class after initial render', () => {
    const { container } = render(<HomePage />);
    const homePageElement = container.querySelector('.home-page');
    expect(homePageElement).toHaveClass('fade-in');
  });
});
