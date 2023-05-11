// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import React from 'react';
import "./App.css"
// ----------------------------------------------------------------------

export const TitleTracker = React.createContext();
export default function App() {
  const [TitleOnNav, setTitleOnNav] = React.useState('');//global state
  return (
    <TitleTracker.Provider value={{ TitleOnNav, setTitleOnNav }}>
      <ThemeProvider>
        <ScrollToTop />
        <StyledChart />
        <Router />
      </ThemeProvider>
    </TitleTracker.Provider>
  );
}
