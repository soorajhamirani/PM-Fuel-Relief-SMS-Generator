import { Language } from '../types';

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function stopSpeaking(): void {
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
  }
}

export function speakText(
  text: string,
  lang: Language,
  onStart?: () => void,
  onEnd?: () => void
): void {
  if (!isSpeechSupported()) return;

  stopSpeaking();

  const utterance = new SpeechSynthesisUtterance(text);
  
  if (lang === 'ur') {
    utterance.lang = 'ur-PK';
  } else if (lang === 'sd') {
    // Some browsers might not have direct sd-PK voice, fall back gracefully to ur-PK or ar-SA
    utterance.lang = 'ur-PK';
  } else {
    utterance.lang = 'en-US';
  }

  utterance.rate = 0.9; // Slightly slower for better clarity for low-literacy users
  utterance.pitch = 1.0;

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = onEnd;
  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}
