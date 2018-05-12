import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Home',
    icon: 'ion ion-home',
    // link: '/pages/ui-features',
    children: [
      {
        title: 'On Going',
        // link: '/pages/ui-features/buttons',
      },
      {
        title: 'Delayed Trip',
        // link: '/pages/ui-features/grid',
      },
      {
        title: 'Backup Driver',
        // link: '/pages/ui-features/icons',
      },
      {
        title: 'New Emp',
        // link: '/pages/ui-features/modals',
      }
    ],
  },
  {
    title: 'Assign Cab',
    icon: 'fa fa-taxi ',
  },
  {
    title: 'Trip Details',
    icon: 'fa fa-suitcase',
   link:'/trip-details'
  },
  {
    title: 'Settings',
    icon: 'ion ion-gear-b',
    link: '/settings',
    // children: [
    //   {
    //     title: 'Add Driver',
    //     link: '/settings/add-driver',
    //   },
    //   {
    //     title: 'Add Car',
    //    link: '/settings/add-car',
    //   },
    //   {
    //     title: 'Add Company',
    //    link: '/settings/add-company',
    //   },
    //   {
    //     title: 'Add Route',
    //    link: '/settings/add-route',
    //   },
    //   {
    //     title: 'Add Transport Admin',
    //    link: '/settings/add-trans-admin',
    //   }
    // ],
  }
];
