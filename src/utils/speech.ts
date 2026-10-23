/**
 * Web Speech API speech synthesis utility for German audio playback
 */

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private germanVoice: SpeechSynthesisVoice | null = null;
  private isSupported: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isSupported = true;
      this.initVoice();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.initVoice();
      }
    }
  }

  private initVoice() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prefer native German voices (de-DE)
    const deVoice = voices.find(v => v.lang === 'de-DE' || v.lang.startsWith('de')) || null;
    this.germanVoice = deVoice;
  }

  public speak(text: string, rate: number = 0.9, onEnd?: () => void): boolean {
    if (!this.synth || !this.isSupported) {
      console.warn('Speech synthesis is not supported on this device/browser.');
      return false;
    }

    try {
      this.synth.cancel(); // Stop any currently playing audio

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      if (this.germanVoice) {
        utterance.voice = this.germanVoice;
      }
      utterance.rate = rate; // slightly slower by default for clear language learners
      utterance.pitch = 1.0;

      if (onEnd) {
        utterance.onend = onEnd;
        utterance.onerror = () => onEnd();
      }

      this.synth.speak(utterance);
      return true;
    } catch (e) {
      console.error('Error invoking speech synthesis:', e);
      return false;
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  public hasSupport(): boolean {
    return this.isSupported;
  }

  public hasGermanVoice(): boolean {
    return !!this.germanVoice;
  }
}

export const speechService = new SpeechService();
