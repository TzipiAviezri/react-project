import {Component} from "react";
import { Outlet } from "react-router-dom";
import ShowItemsWithRouter from "../../items/componnent/show-items";

class Home extends Component<HomeProps , HomeState>{

    constructor(props: HomeState) {
        super(props);
        this.state = {}
      }

      render() {

        return (
          <div>
            <ShowItemsWithRouter  />
            <Outlet />
          </div> 
        );
      }
    
}

export default Home;

type HomeProps = IHOmeProps;
type HomeState = IHOmeState

interface IHOmeProps{ }
interface IHOmeState{ }