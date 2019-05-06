import React from "react";
import {nextFilter} from "../actions/actions.js";

class FilterBoxItem extends React.Component{


	show(){
		if(this.props.item["filter-name"]==="color"){
			return this.props.item.filter.map((thefilter,index)=>{
				let classname=["color_choose"];
				if(this.props.album&&index===this.props.filter){
					classname.push("cur")
				}

				return <a onClick={()=>{this.props.dispatch(nextFilter(this.props.albumIndex,index))}} key={index} className={classname.join(" ")} style={{"backgroundColor":thefilter["type-name"]}}></a>
			});

		}else{

		return this.props.item.filter.map((type,index)=>{
			return 	<a onClick={()=>{this.props.dispatch(nextFilter(this.props.albumIndex,index))}} key={index} className={(this.props.album&&index===this.props.filter)?"cur":""}>
					{type["type-name"]}
					</a>
					});


	}

}
	render(){
		return (
			<div>
				<div className="filter_name">
					{this.props.item["filter-name"]}
				</div>
				<div className="filter_types">
					{this.show()}
				</div>
			</div>
		)
	}
}

export default FilterBoxItem;