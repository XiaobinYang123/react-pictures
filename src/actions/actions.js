import $ from 'jquery';

export const fetchData=()=>(dispatch)=>{
	$.get("/api/data.json",function(data){
		dispatch({"type":"FETCHDATA" , "data":data})
	});
}
// export const fetchData=()=>(dispatch)=>{
// fetch('http://example.com/movies.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });
//   }

export const nextFilter=(albumIndex,filterIndex)=>{
	 return {"type":"GOTOFILTER","albumIndex":albumIndex,"filterIndex":filterIndex}
}

export const goToPic=(idx)=>{
	return {"type":"GOTOPIC","idx":idx}
}

export const Next=()=>{
	return {"type":"NEXT"}
}

export const Previous=()=>{
	return {"type":"PREVIOUS"}
}	