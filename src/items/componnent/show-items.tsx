import {Component} from "react";
import { itemsOrginalArray } from "../items";
import withRouter, { IWithRouterProps } from "../../app/with-router";
import { Item } from "../types";
import { Outlet } from "react-router-dom";

const ShowItemsWithRouter  = withRouter(class ShowItems extends Component<ItemProps, ItaemState>{

  constructor (props: ItemProps){
    super(props)
    this.state = {
      items: itemsOrginalArray
    }
  }
    searchInput(e: React.ChangeEvent<HTMLInputElement>): void {
       setTimeout(() => this.filterItems(e), 400);
    }     

      filterItems(e: React.ChangeEvent<HTMLInputElement>): void{
          this.setState({items: itemsOrginalArray.filter(x => x.name.includes(e.target.value))} ,
           () => {console.log(this.state.items)})
    } 

     
     
     render() {
        const { navigate } = {...this.props}
        const { items } = {...this.state}
        return (
           <div>
            <input  type ="text"  onChange={(e) => {this.searchInput(e)}}/>
             {items.map((x) => ( 
              <div key={x.id}>
                {/* {Object.keys(x).map((k) => <p>{}</p>)} */}
                { x.id }  {x.name}  
                <button onClick={() => {navigate(`/itemDetailse/${x.id}`)}}>details</button>
              </div>
             ))  
          }
        <Outlet />
          </div> 
        );
      } 
  }
)
export default  ShowItemsWithRouter;

type ItemProps =  IItemProps & IWithRouterProps;
type ItaemState = IItemState;

interface IItemProps { }
interface IItemState { 
  items: Array<Item>
}



