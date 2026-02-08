import { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import ProposalScreen from './components/ProposalScreen';
import SuccessScreen from './components/SuccessScreen';
import FloatingParticles from './components/FloatingParticles';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'intro' | 'proposal' | 'success'>('intro');
  const [musicStarted, setMusicStarted] = useState(false);

  const handleContinue = () => {
    setCurrentScreen('proposal');
    setMusicStarted(true);
  };

  const handleYesClick = () => {
    setCurrentScreen('success');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <FloatingParticles />
      <BackgroundMusic play={musicStarted} />
      
      {currentScreen === 'intro' && (
        <IntroScreen onContinue={handleContinue} />
      )}
      
      {currentScreen === 'proposal' && (
        <ProposalScreen onYesClick={handleYesClick} />
      )}
      
      {currentScreen === 'success' && (
        <SuccessScreen />
      )}
    </div>
  );
}

export default App;
