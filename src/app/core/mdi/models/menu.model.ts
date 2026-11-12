export interface MenuItem {
  id: string;
  name: string;
  orden?: string;
  url?: string;
  children?: MenuItem[];
}

export interface MenuModule {
  code: string;
  name: string;
  items: MenuItem[];
}
