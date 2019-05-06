let getInitialState={
	"album":0,        //row
	"filter":0,       //column
	"idx":0,          //the index in current column
	"amount":0,
	"data":{
		"name":"",
		"picture-index":0,
		"pic":[]
	}
};

function countNum(data){
	let num=0;
	data.pic.forEach(function(i){
		 i.filter.forEach(function(j){
			 num=num+j.pics.length;
		});
	});

	return num;
}

export default(state=getInitialState,action)=>{
	switch(action.type){
		case "FETCHDATA":
			return {...state,"amount":countNum(action.data),"data":action.data};

		case "GOTOFILTER":
			return {...state,"album":action.albumIndex,"filter":action.filterIndex,"idx":0};
		case "GOTOPIC":
			return {...state,"idx":action.idx};
		case "NEXT":
			console.log(state)
			if(state.data.pic[state.album].filter[state.filter].pics.length-1===state.idx){
				
				if(state.filter===state.data.pic[state.album].filter.length-1){
					if(state.data.pic.length-1===state.album) {
						console.log("This is "+state.album)
						return {...state,"album":0,"filter":0,"idx":0}
					}
						return {...state,"album":state.album+1,"filter":0,"idx":0}
				}
				

				return {...state,"filter":state.filter+1,"idx":0}

			}
			return {...state,"idx":state.idx+1}


		case "PREVIOUS":
			if(state.idx===0){
				if(state.filter===0){
					if(state.album===0){
						alert("THIS is the first one");
						return state;

					}

					return {...state,"filter":state.data.pic[state.album-1].filter.length-1,album:state.album-1,"idx":state.data.pic[state.album-1].filter[state.data.pic[state.album-1].filter.length-1].pics.length-1}

				}

				return {...state,"filter":state.filter-1,"idx":state.data.pic[state.album].filter[state.filter-1].pics.length-1}
				
			}
			return {...state,"idx":state.idx-1}
		default:

		return state;
	}

}