import Authorization from './components/Authorization.vue';
import GalleryViewer from './components/GalleryViewer.vue';

const routes = [
    { path: '/', component: Authorization },
    { path: '/gallery', component: GalleryViewer }
];

export default routes;