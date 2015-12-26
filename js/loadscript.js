function loadScript(urls,index){
	index = index||0;
	var script = document.createElement("script");
	script.type="text/javascript";
	if(urls.length > (index+1)){
		if(script.readyState){
			script.onreadystatechange = function(){
				if(script.readyState=="load"||script.readyState=="complete"){
					script.onreadystatechange = null;
					loadScript(urls,index+1);
				}
			};
		}else{
			script.onload = function(){
				loadScript(urls,index+1);
			};
		}
	}
	script.src = urls[index];
	document.getElementsByTagName("head")[0].appendChild(script);
}
function getScripts(files){
	var commonScripts = ["js/jquery-2.1.4.js","js/util.js"];
	var arr = files.split(";");
	urls = commonScripts.concat(arr);
	loadScript(urls);
}