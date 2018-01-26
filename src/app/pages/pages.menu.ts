export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Trainings',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
       path: 'contact',
       data: {
         menu: {
           title: 'contact',
           icon: 'ion-edit',
           selected: false,
           expanded: false,
           order: 100,
         }
       }
     },
    ]
  }
];
