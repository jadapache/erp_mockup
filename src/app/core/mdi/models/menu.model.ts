export interface MenuItem {
  id: string;
  name: string;
  orden?: string;
  url?: string;
}

export interface MenuModule {
  code: string;
  name: string;
  items: MenuItem[];
}
