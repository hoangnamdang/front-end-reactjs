export const adminMenu = [
  {
    //hệ thống
    name: "menu.admin.manager-user",
    menus: [
      {
        name: "menu.system.system-administrator.header",
        subMenus: [
          {
            name: "menu.system.system-administrator.user-manage",
            link: "/system/user-manage",
          },
          {
            name: "menu.system.system-administrator.product-manage",
            link: "/system/product-manage",
          },
          {
            name: "menu.system.system-administrator.user-redux",
            link: "/system/user-redux",
          },
        ],
      },
      {
        name: "menu.admin.manager-doctor",
        link: "/system/system-parameter",
      },
      {
        name: "menu.admin.manager-admin",
        link: "/system/user-redux",
      },
      {
        name: "menu.admin.manager-crud",
        link: "/system/user-redux",
      },
    ],
  },
  {
    name: "menu.admin.manager-clinic",
    menus: [{ name: "menu.admin.clinic" }],
  },
  {
    name: "menu.admin.manager-speciality",
    menus: [{ name: "menu.admin.speciality" }],
  },
  {
    name: "menu.admin.manager-handbook",
    menus: [{ name: "menu.admin.handbook" }],
  },
];
