import { useEffect, useState } from 'react';
import './App.css';

import cutePhoto from './assets/cute.jpeg';
import flowerPhoto from './assets/flower-pic2.jpeg';
import smilePhoto from './assets/smile.jpeg';

const SECRET_CODE = 'whimsical';

const memoryMoments = [
  {
    title: 'The first video call',
    body: 'That first call made the distance feel smaller in the sweetest way. It felt like my day had quietly found its favorite place.',
  },
  {
    title: 'The drunk ride home',
    body: 'When you were coming back after hanging out with your friends, a little tipsy and completely adorable, I remember smiling at my screen like an idiot.',
  },
  {
    title: 'The sleepy video calls',
    body: 'Those quiet calls where you drift off are still some of my favorite memories with you.',
  },
  {
    title: 'The Ahmedabad countdown',
    body: 'One day this screen becomes airport arrivals, flowers in person, and me finally getting to hold your hand.',
  },
];

const App = () => {
  const [stage, setStage] = useState(0);
  const [showWoltTracking, setShowWoltTracking] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [stage]);

  const nextStage = () => setStage((currentStage) => currentStage + 1);

  const handleUnlock = () => {
    if (isUnlocking) return;

    if (passcode.trim().toLowerCase() === SECRET_CODE.toLowerCase()) {
      setError('');
      setIsUnlocking(true);

      window.setTimeout(() => {
        setIsUnlocking(false);
        setPasscode('');
        setStage(2);
      }, 2400);
    } else {
      setError('Sly fox... Wait for the flowers, then ask me for the code!');
    }
  };

  return (
    <div className="app-container">
      <div className="ambient-sparkles" aria-hidden="true">
        <span>&#9825;</span>
        <span>&#10022;</span>
        <span>&#9825;</span>
        <span>&#10022;</span>
        <span>&#9825;</span>
      </div>

      {/* STAGE 0: Landing */}
      {stage === 0 && (
        <div className="stage-container">
          <h1>
            Happy Birthday, Shri <span aria-hidden="true">&#10024;</span>
          </h1>
          <p className="subtitle">I have a few things for you today...</p>
          <button className="next-button nick-btn" onClick={nextStage}>Begin &#129418;</button>
        </div>
      )}

      {/* STAGE 1: Soft Opener & Live Tracking */}
      {stage === 1 && (
        <div className="stage-container">
          <h2>{showWoltTracking ? 'Part I: The Flowers' : 'Part I: Before the Surprise'}</h2>

          {!showWoltTracking ? (
            <div className="wolt-teaser">
              <div className="opening-photo">
                <img src={cutePhoto} alt="Shri enjoying the snow" />
              </div>
              <p className="opening-note">Just a tiny pause for this soft little moment.</p>
              <p>The real birthday surprise is still on its way. &#128062;</p>
              <button className="action-button judy-btn" onClick={() => setShowWoltTracking(true)}>
                Reveal Delivery &#128048;
              </button>
            </div>
          ) : (
            <div className="tracking-reveal">
              <p className="arriving-text">The flowers are on the way! &#127800;</p>
              <div className="delivery-photo">
                <img src={flowerPhoto} alt="Shri holding her birthday flower" />
              </div>
              <a href="https://wolt.com/en/tracking/YOUR_ORDER_ID" target="_blank" rel="noreferrer" className="wolt-link">
                Open Wolt Live Tracking
              </a>

              <div className="lock-section">
                <p className="lock-text">
                  Once they are in your hands, tell me. I'll give you the code to unlock the letter.
                </p>
                <input
                  type="text"
                  className="passcode-input"
                  placeholder="Enter Passcode..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleUnlock();
                  }}
                  disabled={isUnlocking}
                />
                <button className="next-button nick-btn unlock-btn" onClick={handleUnlock} disabled={isUnlocking}>
                  {isUnlocking ? 'Opening...' : 'Unlock'}
                </button>
                {error && <p className="error-text">{error}</p>}

                {isUnlocking && (
                  <div className="envelope-reveal" role="status" aria-live="polite">
                    <div className="envelope">
                      <div className="envelope-back" />
                      <div className="letter-peek">
                        <span>For Shri</span>
                      </div>
                      <div className="envelope-flap" />
                      <div className="envelope-front" />
                    </div>
                    <p>Your next surprise is opening...</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* STAGE 2: Memory Lane */}
      {stage === 2 && (
        <div className="stage-container">
          <h2>Part II: Memory Lane</h2>
          <p className="memory-intro">A few tiny proof notes before the big letter.</p>

          <div className="memory-lane">
            {memoryMoments.map((moment) => (
              <div className="memory-moment" key={moment.title}>
                <span className="memory-dot" aria-hidden="true" />
                <h3>{moment.title}</h3>
                <p>{moment.body}</p>
              </div>
            ))}
          </div>

          <button className="next-button nick-btn" onClick={nextStage}>Open the Letter</button>
        </div>
      )}

      {/* STAGE 3: The Deep Letter */}
      {stage === 3 && (
        <div className="stage-container">
          <h2>Part III: The Letter &#128140;</h2>
          <div className="letter-text">
            {`Happy Birthday, Shri.

            You once asked me, "why me?" And I want to give you the real answer today.

            It starts with the fact that you are absolutely breathtaking. You have this effortless elegance and a gorgeous smile that takes my breath away every single time you look at the camera. But my answer goes so much deeper than just how beautiful you are.

            I fell for you because of your values. I see how hard you work. Dealing with insane hospital shifts and the whole med school grind so far from home isn't easy, but you handle it better than anyone I know. You never let the exhaustion change who you are.

            I see your empathy. I see the girl who dedicates her life to learning how to heal others, but who still makes time for us, no matter how tired she is. You align with everything I want for my future. You make me want to work harder every single day, just so I can take care of you the way you constantly take care of everyone else.

            But honestly, the real reason I fell for you is how easy it is to just exist with you. I fell for your mind, and that completely whimsical way you look at life. And out of everything, my absolute favorite moments are the quiet ones on our video calls. I love the way you just naturally drift off to sleep while we're hanging out. You look so peaceful wrapped up in your blankets, and I just sit there watching you, wanting nothing more than to be there to pull them over your shoulders. Knowing you feel that safe and comfortable with me, even thousands of miles apart, is the best feeling in the world.

            That is why it's you. It is your gorgeous heart, your drive, and the way you trust me.

            I hate that my only option today is a screen. But I promise you, this distance has an expiration date. I'm counting down the days until I can hold you in Ahmedabad and treat you exactly the way you deserve to be treated.

            Take care of yourself today. No stressing, no worrying, just celebrating you.

            Yours,
            Krish`}
          </div>
          <button className="next-button nick-btn" onClick={nextStage}>One Last Smile</button>
        </div>
      )}

      {/* STAGE 4: The Mystery Final Gift */}
      {stage === 4 && (
        <div className="stage-container">
          <h2>Part IV: One Last Smile &#10024;</h2>
          <div className="final-photo-frame">
            <img src={smilePhoto} alt="Shri smiling" />
          </div>
          <p className="mystery-header">There is one more surprise...</p>
          <p className="mystery-text">
            For the final piece of the puzzle, you'll have to reach out to <strong>Nupur</strong>.
          </p>
          <p>She has the details on when the last gift will reach you.</p>
          <p className="final-wish">
            And no matter how chaotic life gets, smile like this always. It is still my favorite thing to see,
            and I hope this birthday gives you a hundred more reasons to do it.
          </p>
          <p className="sub-text">Happy Birthday, Shri. &#10084;&#65039; &#128048; &#129418;</p>
        </div>
      )}
    </div>
  );
};

export default App;
