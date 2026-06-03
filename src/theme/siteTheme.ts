/**
 * Site accent theme — change `primary` to recolor accents (nav, icons, highlights).
 * Link colors stay on `link` / `linkHover` (dark blue) and are not tied to `primary`.
 */
export const siteTheme = {
  surface: "#f9fafb",

  text: "#333333",
  textMuted: "#6c757d",

  layoutWidth: "76%",
  layoutMaxWidth: "1160px",
  cardRadius: "6px",

  /** Nowshin lavender (deep #CDB4DA family) */
  primary: "#9d87b0",
  primaryDark: "#8f74a3",
  primaryLight: "#CDB4DA",
  primaryDeep: "#7a6290",
  primaryMuted: "#e8dff0",
  primaryRgb: "157, 135, 176",

  link: "#2e48a3",
  linkHover: "#4d94c4",
  linkRgb: "46, 72, 163",
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
