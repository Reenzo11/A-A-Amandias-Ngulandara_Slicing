import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import AuthorView from '@/views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUsView,
    },   
    {
      path: '/blog/post',
      name: 'blog-post',
      component: BlogPostView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUsView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PrivacyPolicy,
    },
  ],
})

export default router
