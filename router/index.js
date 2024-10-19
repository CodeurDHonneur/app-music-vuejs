import { createRouter, createWebHistory } from "vue-router";

import AlbumDescription from "@/components/AlbumDescription.vue";
import AlbumsView from "@/components/AlbumsComponent.vue";
import LoginView from "@/views/Auth/LoginView.vue";
import NotFoundView from "@/views/Auth/NotFoundView.vue";
import HomeView from "@/views/HomeView.vue";



const routes = [
    { path: "/login", alias: "/", component: LoginView}, //alias pour permettre à ce que deux itinéraires renvoient vers la même route
    {path: "/albums", 
    component: HomeView,
    meta: {authentification: true},
    children: [
        {path: "", component: AlbumsView},
        {path: ":nomAlbum", component: AlbumDescription}
    ]
    },
    
    {path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView}
    /**
     * Expliquation
     * 
     * :pathMatch :
     * Le `:` indique que c'est un paramètre dynamique. Ici, il va capturer tout ce qui est passé dans l’URL (même des segments multiples).
     * Le nom pathMatch peut être remplacé par n’importe quel autre nom si vous le souhaitez (ex : :wildcard).
     * 
     * (.*) :
     * Cette expression régulière signifie "n'importe quel nombre de caractères" (y compris les /).
     * Cela permet de matcher n'importe quelle route après le /.
     * 
     * * à la fin :
     * Cela permet de capturer tous les segments supplémentaires après le premier. Par exemple : /inconnu/chemin/autre serait totalement capturé par cette route.
     */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
