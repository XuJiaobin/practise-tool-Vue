import VueRouter from 'vue-router'
import toolIndex from "../pages/tool-index";
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/",
            component:toolIndex,
            meta:{title:"首页"}
        }
    ]
})

export default router