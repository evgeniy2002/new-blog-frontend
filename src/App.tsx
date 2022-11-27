import { Container } from '@mui/material';
import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <main>
          <Home />
        </main>
      </Container>
    </div>
  );
}

export default App;
