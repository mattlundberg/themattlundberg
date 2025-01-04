export interface Link {
  text: string;
  url: string;
  description?: string;
  badge?: boolean;
  external?: boolean;
}

export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
  icon?: string;
}

export interface Button {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
}

export interface SEOProps {
  title: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}
