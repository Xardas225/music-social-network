import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import AccountView from "@/views/AccountView.vue";
import ProfileSection from "@/views/account/ProfileSection.vue";
import EditProfile from "@/views/account/EditProfile.vue";
import AddSong from "@/views/account/AddSong.vue";
import DeleteSong from "@/views/account/DeleteSong.vue";
import AddYoutubeVideo from "@/views/account/AddYoutubeVideo.vue";
import DeleteYoutubeVideo from "@/views/account/DeleteYoutubeVideo.vue";
import CreatePost from "@/views/account/CreatePost.vue";
import EditPost from "@/views/account/EditPost.vue";
import PostsSection from "@/views/account/PostsSection.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/account",
    component: AccountView,
    children: [
      {
        path: "profile",
        name: "profile",
        component: ProfileSection,
      },
      {
        path: "edit-profile",
        name: "editProfile",
        component: EditProfile,
      },
      {
        path: "add-song",
        name: "addSong",
        component: AddSong,
      },
      {
        path: "delete-song",
        name: "deleteSong",
        component: DeleteSong,
      },
      {
        path: "add-youtube-video",
        name: "addYoutubeVideo",
        component: AddYoutubeVideo,
      },
      {
        path: "delete-youtube-video",
        name: "deleteYoutubeVideo",
        component: DeleteYoutubeVideo,
      },
      {
        path: "create-post",
        name: "createPost",
        component: CreatePost,
      },
      {
        path: "edit-post",
        name: "editPost",
        component: EditPost,
      },
      {
        path: "posts",
        name: "postsSection",
        component: PostsSection,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
