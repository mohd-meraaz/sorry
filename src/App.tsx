import { useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

function App() {
  const [forgiven, setForgiven] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleForgiveness = () => {
    setShowMessage(true);
    setTimeout(() => {
      setForgiven(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50 relative overflow-hidden">
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="heart-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <Heart className="text-pink-300 opacity-20" size={20 + Math.random() * 20} />
          </div>
        ))}
      </div>

      <div className="floating-stars">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="star-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          >
            <Sparkles className="text-purple-300 opacity-20" size={16 + Math.random() * 16} />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <section className="hero-section text-center mb-20 fade-in">
          <div className="inline-block mb-6">
            <Heart className="text-pink-400 animate-pulse" size={64} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-6 handwritten">
            I'm Really Sorry Adeeva💔
          </h1>
          <p className="text-xl md:text-2xl text-purple-700 font-light">
            You are very special to me, and I hate knowing I hurt you.
          </p>
        </section>

        <section className="apology-section mb-20 fade-in-delay-1">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100">
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-6 text-center handwritten">
              From My Heart
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-6">
              I never meant to hurt you. I understand why you're upset, and I'm truly sorry for my mistake.
              You are my cutest friend, and losing your smile hurts more than anything.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              I've been thinking about what happened, and I realize how thoughtless I was.
              Your feelings matter so much to me, and I should have been more considerate.
              I take full responsibility for hurting you.
            </p>
          </div>
        </section>

        <section className="memories-section mb-20 fade-in-delay-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-10 text-center handwritten">
            Our Beautiful Memories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="memory-card bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <Star className="text-pink-500 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold text-pink-700 mb-2 text-center">Our Laughs</h3>
              <p className="text-gray-600 text-center">
                Those endless moments of joy and laughter that light up my days and nights.
              </p>
            </div>
            <div className="memory-card bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <Heart className="text-purple-500 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold text-purple-700 mb-2 text-center">Our Talks</h3>
              <p className="text-gray-600 text-center">
                Deep conversations that make me feel understood and valued
              </p>
            </div>
            <div className="memory-card bg-gradient-to-br from-peach-100 to-orange-50 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <Sparkles className="text-orange-500 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold text-orange-700 mb-2 text-center">Our Adventures</h3>
              <p className="text-gray-600 text-center">
                Every moment we've shared is a treasure I'll never forget
              </p>
            </div>
          </div>
        </section>

        <section className="promise-section mb-20 fade-in-delay-3">
          <div className="bg-gradient-to-br from-purple-100/70 to-pink-100/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-purple-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-6 text-center handwritten">
              My Promise to You
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-4">
              I promise to be more thoughtful, to listen better, and to never take our friendship for granted.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              You deserve better, and I'll do everything I can to be the friend you deserve.
              Your happiness means everything to me.
            </p>
          </div>
        </section>

        <section className="forgiveness-section text-center fade-in-delay-4">
          {!showMessage ? (
            <button
              onClick={handleForgiveness}
              className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-xl md:text-2xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 handwritten"
            >
              Can you forgive me? 💕
            </button>
          ) : (
            <div className={`forgiveness-message ${forgiven ? 'show' : ''}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-300 inline-block">
                <Heart className="text-pink-500 mb-4 mx-auto animate-pulse" size={48} />
                <p className="text-2xl md:text-3xl text-purple-700 font-semibold mb-4 handwritten">
                  Thank you for giving me another chance
                </p>
                <p className="text-xl text-gray-700">
                  I'll treasure it forever. You're the best friend anyone could ask for. ❤️
                </p>
              </div>
            </div>
          )}
        </section>

        <footer className="text-center mt-20 fade-in-delay-5">
          <p className="text-2xl md:text-3xl text-purple-700 font-semibold handwritten">
            Always yours obidently ❤️
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
