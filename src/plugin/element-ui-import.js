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
    Select,
    Option,
    Dialog,
    Popover,
    DatePicker,
    Divider,
    Radio,
    Slider,
    Tabs,
    TabPane,
    ColorPicker,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxGroup,
    Upload,
    Card,
    Image,
} from "element-ui";
export default {
    install() {
        Vue.component(Dialog.name, Dialog);
        Vue.component(Row.name, Row);
        Vue.component(Input.name, Input);
        Vue.component(Button.name, Button);
        Vue.component(Dropdown.name, Dropdown);
        Vue.component(DropdownMenu.name, DropdownMenu);
        Vue.component(DropdownItem.name, DropdownItem);
        Vue.component(Menu.name, Menu);
        Vue.component(Submenu.name, Submenu);
        Vue.component(MenuItem.name, MenuItem);
        Vue.component(MenuItemGroup.name, MenuItemGroup);
        Vue.component(Container.name, Container);
        Vue.component(Header.name, Header);
        Vue.component(Aside.name, Aside);
        Vue.component(Main.name, Main);
        Vue.component(Footer.name, Footer);
        Vue.component(Switch.name, Switch);
        Vue.component(Table.name, Table);
        Vue.component(TableColumn.name, TableColumn);
        Vue.component(Col.name, Col);
        Vue.component(Skeleton.name, Skeleton);
        Vue.component(SkeletonItem.name, SkeletonItem);
        Vue.component(Select.name, Select);
        Vue.component(Option.name, Option);
        Vue.component(Popover.name, Popover); 
        Vue.component(DatePicker.name, DatePicker);
        Vue.component(Divider.name, Divider);
        Vue.component(Radio.name, Radio);
        Vue.component(Slider.name, Slider);
        Vue.component(Tabs.name, Tabs);
        Vue.component(TabPane.name, TabPane);
        Vue.component(ColorPicker.name, ColorPicker);
        Vue.component(RadioGroup.name, RadioGroup);
        Vue.component(RadioButton.name, RadioButton);
        Vue.component(Checkbox.name,Checkbox);
        Vue.component(CheckboxGroup.name,CheckboxGroup);
        Vue.component(Upload.name,Upload);
        Vue.component(Card.name,Card);
        Vue.component(Image.name,Image);
        // Vue.prototype.$message = Message;
    },
};
