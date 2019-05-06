import React from "react";
import {connect} from "react-redux";
import FilterBoxItem from "./FilterBoxItem.js";

class FilterBox extends React.Component{
                   //在这里用filter一定要接受，别的地方就用this.props.


	render(){

		return (
			<div className="filter_box">
				<h3>Picture filter</h3>
				
				<div className="filter" id="filter_box">
					<ul>
						{
							  this.props.pic.map((item,index)=>{
							  	
								return 	<li key={index}>
										<FilterBoxItem item={item} filter={this.props.filter} album={this.props.album===index} dispatch={this.props.dispatch} albumIndex={index}>
										</FilterBoxItem></li>
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default connect(
	(state)=> {
		return {
			pic:state.data.pic,
			filter:state.filter,
			album:state.album
		}
	}
)(FilterBox);
