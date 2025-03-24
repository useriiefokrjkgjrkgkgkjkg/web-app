import type { TelegramWebApp } from '../types';

export const initTelegramApp = (): TelegramWebApp | null => {
  if (typeof window !== 'undefined') {
    return window.Telegram?.WebApp || null;
  }
  return null;
};

export const expandTelegramApp = () => {
  const webApp = initTelegramApp();
  if (webApp) {
    webApp.expand();
  }
};

export const closeTelegramApp = () => {
  const webApp = initTelegramApp();
  if (webApp) {
    webApp.close();
  }
}; 