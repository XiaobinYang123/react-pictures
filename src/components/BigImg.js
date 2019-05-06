import React from "react";
import {connect} from "react-redux";
import {Next,Previous} from "../actions/actions.js";

class BigImg extends React.Component{

 keydown(event){
 	var self=this;
    switch(event.keyCode){
        case 37:
        	self.props.dispatch(Previous());
            break;
        case 39:
        	self.props.dispatch(Next());
            break;
    }
}

componentDidMount() {

   window.addEventListener('keydown', this.keydown.bind(this));
}

	render(){
		if(!this.props.img){
			return <div></div>
		}

		return (
			<div className="big_pic">
				<div className="inner">
					<img src={"/images/big/"+this.props.img}  id="big_img" />
					<div className="leftBtn" id="leftBtn" onClick={()=>{this.props.dispatch(Previous())}}></div>
					<div className="rightBtn" id="rightBtn" onClick={()=>{this.props.dispatch(Next())}}></div>
				</div>
			</div>
		)
	}
}

export default connect(
	(state)=> {
			if(state.data.name===""){                  //when data isn't loaded to state.data yet
				return {img:null}
			}else{
			return {
				img:state.data.pic[state.album].filter[state.filter].pics[state.idx],
				album : state.album,
				filter : state.filter,
				idx : state.idx
			}
		}
		
	}
)(BigImg);