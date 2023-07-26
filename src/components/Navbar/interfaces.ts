export interface NavLinkType {
    to: string;
    text: string;
    type: 'text' | 'button';
  }
  
export interface NavLinksProps {
    links: NavLinkType[];
}
  