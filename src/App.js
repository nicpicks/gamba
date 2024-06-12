import React, { useState } from 'react';
import Board from './components/Board';
import Jackpot from './components/Jackpot';

export default function App() {
  const [isJackpot, setIsJackpot] = useState();
  return (
    <div className="bg-slate-800 min-h-screen w-full flex justify-center items-center">
      <div className="w-full">
        {isJackpot ? <Jackpot setIsJackpot={setIsJackpot} /> : <Board setIsJackpot={setIsJackpot} />}
      </div>
    </div>
  );
}
