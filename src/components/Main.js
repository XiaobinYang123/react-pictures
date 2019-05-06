import React from "react";
import {connect} from "react-redux";
import BigImg from "./BigImg.js";
import InfoBox from "./InfoBox.js";
import FilterBox from "./FilterBox.js";
import SmallPicNavBox from "./SmallPicNavBox.js";
import {fetchData} from "../actions/actions.js";

class Main extends React.Component{
	constructor({dispatch}){
		super();
		dispatch(fetchData());

		
	}



	render(){
		return (
			<div className="appwrap">
			<BigImg index={"index"}/>
				<div className="right_bar">
					<InfoBox></InfoBox>
					<FilterBox></FilterBox>
				 	<SmallPicNavBox></SmallPicNavBox>
				</div>
			</div>
		)
	}
}

export default connect(
	(state)=> {
		return {
			 
		}
	}
)(Main);