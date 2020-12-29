import board from "../admin/board/board";
import change from "../admin/board/change";
import List from "../admin/board/List";
import NOTFOUND from "./404";
import Login from "../login/Login";
import Map from "../admin/board/map"

export const mainRoutes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/404",
    component: NOTFOUND
  }
];

export const adminRoutes = [
  {
    path: "/admin/board",
    component: board,
    isShow: true,
    title: "看板",
    icon: "area-chart"
  },
  {
    path: "/admin/list",
    component: List,
    isShow: true,
    exact: true,
    title: "商品管理",
    icon: "shop"
  },
  {
    path: "/admin/list/change/:id?",
    component: change,
    isShow: false
  },
  {
    path: "/admin/map",
    component: Map,
    isShow: true,
    title: "地图功能",
    icon: "heat-map"
  }

];
