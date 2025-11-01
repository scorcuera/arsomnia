import es from './es.json';
import fr from './fr.json';

export const languages = {
  es: 'Español',
  fr: 'Français',
};

export const defaultLang = 'es';

export const ui = {
  es,
  fr,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

