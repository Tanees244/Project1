import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import CertificationPage from './CertificationPage';
import EducationPage from './EducationPage';
import ProjectsPage from './ProjectsPage';

describe('HomePage Component', () => {
  it('renders the component without crashing', () => {
    render(<HomePage />);
  });
});

describe('CertificationPage Component', () => {
  it('renders the component without crashing', () => {
    render(<CertificationPage />);
  });
});

describe('EducationPage Component', () => {
  it('renders the component without crashing', () => {
    render(<EducationPage />);
  });
});

describe('ProjectsPage Component', () => {
  it('renders the component without crashing', () => {
    render(<ProjectsPage />);
  });
});