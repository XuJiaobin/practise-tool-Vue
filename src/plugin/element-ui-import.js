import Vue from "vue";
//引入element-ui
import {
    Row,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Button,
    Menu,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Switch,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Table,
    TableColumn,
    Col,
    Skeleton,
    SkeletonItem,
} from "element-ui";
export default {
    install() {
        Vue.component(Row.name,Row);
        Vue.component(Button.name,Button);
        Vue.component(Dropdown.name,Dropdown);
        Vue.component(DropdownMenu.name,DropdownMenu);
        Vue.component(DropdownItem.name,DropdownItem);
        Vue.component(Menu.name,Menu);
        Vue.component(Submenu.name,Submenu);
        Vue.component(MenuItem.name,MenuItem);
        Vue.component(MenuItemGroup.name,MenuItemGroup);
        Vue.component(Container.name,Container);
        Vue.component(Header.name,Header);
        Vue.component(Aside.name,Aside);
        Vue.component(Main.name,Main);
        Vue.component(Footer.name,Footer);
        Vue.component(Switch.name,Switch);
        Vue.component(Table.name,Table);
        Vue.component(TableColumn.name,TableColumn);
        Vue.component(Col.name,Col);
        Vue.component(Skeleton.name, Skeleton);
        Vue.component(SkeletonItem.name, SkeletonItem);
    },
};
