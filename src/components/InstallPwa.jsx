import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share2, PlusSquare, Sparkles } from 'lucide-react';

export default function InstallPwa() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. Check if already installed in standalone mode
    const inStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;

    if (inStandalone) {
      setIsStandalone(true);
      return;
    }

    // 2. Check if user recently dismissed (dismiss for 48 hours)
    const dismissedAt = localStorage.getItem('goride_pwa_dismissed');
    if (dismissedAt) {
      const hoursPassed = (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60);
      if (hoursPassed < 48) {
        return;
      }
    }

    // 3. Detect iOS Safari
    const ua = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(ua);
    const isSafari = ua.includes('safari') && !ua.includes('crios') && !ua.includes('fxios');

    if (isAppleDevice && isSafari) {
      setIsIos(true);
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3500);
      return () => clearTimeout(timer);
    }

    // 4. Android / Chrome / Edge beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2500);
      return () => clearTimeout(timer);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosModal(true);
      setShowBanner(false);
      return;
    }

    if (!deferredPrompt) {
      alert('To install the GoRide App:\n- On Android/Chrome: Tap the 3 dots (⋮) and select "Add to Home screen"\n- On iPhone/iPad: Tap Share and select "Add to Home Screen"\n- On Desktop: Click the Install icon in the address bar');
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('goride_pwa_dismissed', Date.now().toString());
  };

  if (isStandalone || (!showBanner && !showIosModal)) {
    return null;
  }

  return (
    <>
      {/* Floating Bottom Card */}
      {showBanner && (
        <div
          role="region"
          aria-label="Install GoRide Application"
          className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-50 max-w-sm w-[calc(100vw-32px)] sm:w-auto bg-gradient-to-br from-[#702D35] via-[#541a21] to-[#3a0f14] text-white p-4 rounded-2xl shadow-2xl border border-gold/40 backdrop-blur-md animate-fade-in"
          style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.45)' }}
        >
          <div className="flex items-start space-x-3.5">
            {/* App Icon Badge */}
            <div className="w-12 h-12 rounded-xl bg-charcoal border-2 border-gold/60 p-0.5 flex-shrink-0 shadow-md flex items-center justify-center overflow-hidden">
              <img
                src="/icons/icon-192.png"
                alt="GoRide App"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = '/images/logo.png';
                }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <h4 className="font-serif font-bold text-sm tracking-wide text-white">
                    Install GoRide App
                  </h4>
                  <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                </div>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="text-white/60 hover:text-white p-1 rounded-full transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed">
                Add to your phone for instant 24/7 Tirupati cab bookings, live pricing &amp; offline access!
              </p>

              <div className="flex items-center space-x-2 mt-3">
                <button
                  type="button"
                  onClick={handleInstallClick}
                  className="bg-gradient-to-r from-gold via-gold-soft to-gold hover:from-gold-dark hover:to-gold text-charcoal font-bold text-xs px-4 py-2 rounded-xl shadow-md flex items-center space-x-1.5 transition-all transform active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-charcoal" />
                  <span>Download App</span>
                </button>

                <button
                  type="button"
                  onClick={handleDismiss}
                  className="text-white/70 hover:text-white text-xs px-2.5 py-2 font-medium"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* iOS Safari Instruction Modal */}
      {showIosModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowIosModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-sm w-full p-6 text-charcoal shadow-2xl border border-warmBorder"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#702D35] border-2 border-gold flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Smartphone className="w-7 h-7 text-gold" />
            </div>

            <h3 className="font-serif font-bold text-lg text-center text-charcoal mb-1">
              Install GoRide on iPhone / iPad
            </h3>
            <p className="text-xs text-charcoal-muted text-center mb-4">
              Add the app to your Home Screen in 2 simple steps:
            </p>

            <div className="bg-ivory rounded-2xl p-4 space-y-3 border border-warmBorder/70 text-xs text-charcoal">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark font-bold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <span>
                  Tap the <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline text-blue-600 align-text-bottom ml-0.5" /> in your Safari toolbar
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <span>
                  Scroll down &amp; tap <strong>"Add to Home Screen"</strong> <PlusSquare className="w-3.5 h-3.5 inline text-charcoal align-text-bottom ml-0.5" />
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIosModal(false)}
              className="mt-5 w-full bg-[#702D35] hover:bg-[#561c23] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Compact Navbar Install CTA Button
export function NavbarInstallButton() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const inStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;

    if (inStandalone) {
      setIsStandalone(true);
      return;
    }

    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  if (isStandalone) return null;

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else {
      alert(
        'To install GoRide App on your device:\n\n' +
        '• Android / Chrome: Tap the top right menu (⋮) -> "Add to Home Screen" or "Install App"\n' +
        '• iPhone / Safari: Tap Share icon -> "Add to Home Screen"\n' +
        '• Desktop: Look for the Install icon in the browser address bar'
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleInstall}
      title="Download GoRide Cab App"
      className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gold/20 via-gold/10 to-transparent border border-gold/40 text-charcoal hover:border-gold hover:bg-gold/25 transition-all text-xs font-bold shadow-sm"
    >
      <Download className="w-3.5 h-3.5 text-gold-dark" />
      <span>Install App</span>
    </button>
  );
}
