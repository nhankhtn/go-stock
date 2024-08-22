export type Theme = "light" | "dark";

export interface IMenuItem {
  to?: string;
  title: string;
  icon?: React.ReactNode;
  children?: Array<IMenuItem>;
}
export interface IMenu {
  items: Array<IMenuItem>;
  theme?: Theme;
  active?: boolean;
}
export interface IButton {
  children: React.ReactNode;
  to?: string;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  active?: boolean;
  outline?: boolean;
  alignTitle?: "left" | "center" | "right";
  theme?: Theme;
  onClick?: (e: any) => any;
  [key: string]: any;
}
export interface IStats {
  theme: Theme;
}
export interface IStatsCard {
  logo: string;
  name: string;
  totalShares: string;
  totalReturn: number;
  theme?: Theme;
}

export interface IWatchItem {
  logo: string;
  shortName: string;
  name: string;
  totalShares: string;
  totalReturn: number;
}
export interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}
export interface ICharSection {
  theme?: Theme;
}
