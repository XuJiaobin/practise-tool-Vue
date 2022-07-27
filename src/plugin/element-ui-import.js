import Vue from "vue";
//引入element-ui
import {
    // Message,
    Row,
    Input,
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
    Dialog,
    Popover,
} from "element-ui";
export default {
    install() {
        Vue.component(Dialog.name,Dialog);
        Vue.component(Row.name,Row);
        Vue.component(Input.name,Input);
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
        Vue.component(Popover.name, Popover);
        // Vue.prototype.$message = Message;
    },
};
