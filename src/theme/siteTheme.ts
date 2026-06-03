/**
 * Site accent theme — change `primary` to recolor accents (nav, icons, highlights).
 */
export const siteTheme = {
  surface: "#f9fafb",
  text: "#000000",
  textMuted: "#6c757d",
  layoutWidth: "76%",
  layoutMaxWidth: "1160px",
  cardRadius: "6px",

  primary: "#0d9488",
  primaryDark: "#0f766e",
  primaryLight: "#14b8a6",
  primaryDeep: "#115e59",
  primaryMuted: "#5eead4",
  primaryRgb: "13, 148, 136",

  link: "#1e5a8a",
  linkHover: "#2e7ab8",
  linkRgb: "30, 90, 138",
} as const;

export type SiteTheme = typeof siteTheme;

export function getThemeCssVariables(): string {
  return `:root {
  --theme-surface: ${siteTheme.surface};
  --theme-text: ${siteTheme.text};
  --theme-text-muted: ${siteTheme.textMuted};
  --layout-width: ${siteTheme.layoutWidth};
  --layout-max-width: ${siteTheme.layoutMaxWidth};
  --card-radius: ${siteTheme.cardRadius};
  --font-size-base: 1rem;
  --font-size-body: 0.9375rem;
  --font-size-sm: 0.875rem;
  --font-size-section: 1rem;
  --font-size-subtitle: 1.0625rem;
  --font-size-name: 1.875rem;
  --theme-primary: ${siteTheme.primary};
  --theme-primary-dark: ${siteTheme.primaryDark};
  --theme-primary-light: ${siteTheme.primaryLight};
  --theme-primary-deep: ${siteTheme.primaryDeep};
  --theme-primary-muted: ${siteTheme.primaryMuted};
  --theme-primary-rgb: ${siteTheme.primaryRgb};
  --theme-link: ${siteTheme.link};
  --theme-link-hover: ${siteTheme.linkHover};
  --theme-link-rgb: ${siteTheme.linkRgb};
}`;
}

export function primaryAlpha(alpha: number): string {
  return `rgba(${siteTheme.primaryRgb}, ${alpha})`;
}

export function linkAlpha(alpha: number): string {
  return `rgba(${siteTheme.linkRgb}, ${alpha})`;
}
