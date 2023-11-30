import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../components/HomePage';
import CertificationPage from '../components/CertificationPage';
import EducationPage from '../components/EducationPage';
import Navbar from '../components/Navbar';
import ProjectsPage from '../components/ProjectsPage';

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

describe('Navbar Component', () => {
  it('renders the component without crashing', () => {
    render(<Navbar />);
  });
});


describe('ProjectsPage Component', () => {
  it('renders the component without crashing', () => {
    render(<ProjectsPage />);
  });
});