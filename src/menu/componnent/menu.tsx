import { TabMenu } from "primereact/tabmenu";
import {Component} from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import WithRouter, { IWithRouterProps } from "../../app/with-router";
import { Outlet } from "react-router-dom";

const MenuWIthRouter = WithRouter( class Menu extends Component<MenuProps , MenuState>{


    constructor(props:MenuProps){
        const { navigate } = {...props}
        super(props);
        this.state = {
            menuItems:   [
                {label: 'Home', icon: 'pi pi-fw pi-home', command: ()=> {navigate("/")} },
                {label: 'Documentation', icon: 'pi pi-fw pi-file', command: () => {navigate("/notDefindeMenuChild")}},
                {label: 'Settings', icon: 'pi pi-fw pi-cog' , command: () => {navigate("/notDefindeMenuChild") }}
            ]
        }
}

    render(){ 
        const { menuItems } = this.state;
        return(
              <div>           
                    <TabMenu model={menuItems} />
                    <Outlet />
               </div>
    )
    }
}
)
export default MenuWIthRouter;

type MenuProps = IMenuProps & IWithRouterProps
type MenuState = IMemuState

interface IMenuProps{ }
interface IMemuState{ menuItems : Array<any>}