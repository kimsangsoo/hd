import HelloWorld from "@/components/HelloWorld";
import IndexPage from "@/components/IndexPage";
import JoinPage from "@/components/user/JoinPage";
import LoginPage from "@/components/user/LoginPage";
import FolderListPage from "@/components/folder/FolderListPage";
import MyFolderPage from "@/components/folder/MyFolderPage";
import SharedFolderPage from "@/components/folder/SharedFolderPage";
import TrashFolderPage from "@/components/folder/TrashFolderPage";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "IndexPage",
      component: IndexPage
    },
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/join",
      name: "JoinPage",
      component: JoinPage
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: "/list",
      name: "FolderListPage",
      component: FolderListPage
    },
    {
      path: "/my",
      name: "MyFolderPage",
      component: MyFolderPage
    },
    {
      path: "/shared",
      name: "SharedFolderPage",
      component: SharedFolderPage
    },
    {
      path: "/trash",
      name: "TrashFolderPage",
      component: TrashFolderPage
    }
  ],
  mode: "history"
});
