import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "../views/LoginPage.vue";
import AboutUsPage from "../views/AboutUsPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

// import DefaultLayout from "../layout/DefaultLayout.vue";
// import SmartTourLayout from "../layout/SmartTourLayout.vue";

import AgencyPage from "../views/mainViews/AgencyPage.vue";
import MapsPage from "../views/mainViews/MapsPage.vue";
import MediaPage from "../views/mainViews/MediaPage.vue";
import ContentsPage from "../views/mainViews/ContentsPage.vue";
import DetectionContentsPage from "../views/mainViews/DetectionContentsPage.vue";
import PhrasesPage from "../views/mainViews/PhrasesPage.vue";
import CommunityPage from "../views/mainViews/CommunityPage.vue";
import SettingsPage from "../views/mainViews/SettingsPage.vue";
import TourPage from "../views/mainViews/TourPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    alias: "/login",
    component: LoginPage
  },
  {
    path: "/aboutUs",
    name: "AboutUS",
    component: AboutUsPage
  },
  {
    path: "/404",
    name: "404",
    component: NotFoundPage
  },
  {
    path: "*",
    redirect: { name: "404" }
  },

  //protected part
  {
    path: "/agency",
    name: "Agency",
    component: AgencyPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/tours",
    name: "Tour",
    component: TourPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/maps",
    name: "Maps",
    component: MapsPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/contents",
    name: "Contents",
    component: ContentsPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/detectionContents",
    name: "DetectionContents",
    component: DetectionContentsPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/phrases",
    name: "Phrases",
    component: PhrasesPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/media",
    name: "Media",
    component: MediaPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/community",
    name: "Community",
    component: CommunityPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  }
  next();
});
export default router;
