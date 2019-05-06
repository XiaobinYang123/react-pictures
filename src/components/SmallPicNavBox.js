import React from "react";
import {connect} from "react-redux";
import {goToPic} from '../actions/actions.js';
import $ from 'jquery';

class SmallPicNacBox extends React.Component{
	constructor(){
		super();
		this.totalPage=0;
		this.state={"nowpage":0};




	}

	componentDidMount(){

		//add click event for every page nav box and change pic box
		var self = this; 
		$(this.refs.ul_nav).delegate("span","click",function(){
			$(self.refs.ul_box).stop(true).animate({"left" : -263 * $(this).index() } , 500); //In this case, key word this is span tag
			$(this).addClass("cur").siblings().removeClass("cur");
		});
	}

	componentDidUpdate(){

		//go to correct filter
		if(this.filter!==this.props.filter){
			this.setState({nowpage:0});
			this.filter=this.props.filter;
			$(this.refs.ul_box).css({"left":0})
			return;
		}

		//go to the correct page number 
		if(this.state.nowpage !== parseInt(this.props.idx / 9)){
 			this.setState({ nowpage : parseInt(this.props.idx / 9)});
   			$(this.refs.ul_box).stop(true).animate({"left" : -263 * parseInt(this.props.idx / 9) } , 500);
 		}

		$(this.refs.ul_nav).find("span").eq(this.state.nowpage).addClass("cur").siblings().removeClass("cur");
		//when current page is not nowpage, go back
		$(this.refs.ul_box).stop(true).animate({"left" : -263 * parseInt(this.props.idx / 9) } , 500);
 	}
	


	showLi(){

		
		this.totalPage=Math.ceil(this.props.pics.length/9);
		// var curi=parseInt(this.props.idx/9);
		// var curj=this.props.idx%9;
		//console.log("curi:"+curi+"  "+"curj:"+curj);

		var ul=[];
		for(let i=0;i<this.totalPage;i++){	
			var li=[];
			for(let j=i*9;j<(i+1)*9&&j<this.props.pics.length;j++){								
				var src="images/small/"+this.props.pics[j];
				li.push(<li key={j} className={this.props.idx===j?'cur':''} onClick={()=>{this.props.dispatch(goToPic(j))}}> <img src={src}/> 
							<div className="mask"></div>
						</li>
							)
			}

			ul.push(<ul key={i}>{li}</ul>);
		}

		return ul;

	}

	showUl(){

		var spans=[];
		for(var i=0;i<this.totalPage;i++){
			spans.push(<span key={i} className={this.state.curPage===i?"cur":""}></span>)
		}

		return spans;
	}
	render(){


		return (
			<div className="small_pic_nav_box">
				<h3>Pictures</h3>
				<div className="inner" id="small_pic_nav_box">
					<div className="ul_box"  ref="ul_box">
{/*						<ul>
							<li className="cur">
							<img src="images/small/6.jpg"/>
							<div className="mask"></div>
							</li>
						</ul>*/}
						{this.showLi()}
					</div>
				</div>

				<div className="ul_nav" style={{"width":this.totalPage*40-10}} ref="ul_nav">
					{this.showUl()}
					
				</div>
					}
			</div>
		)

	}

}

export default connect(
	(state)=> {
		if(state.data.name===""){
			return { idx:0,pics:[],filter:0}
		}else{

		return  {
			pics:state.data.pic[state.album].filter[state.filter].pics,
			idx:state.idx,
			filter:state.filter
			} 

		}

	}
)(SmallPicNacBox);