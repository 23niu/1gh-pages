var Button=0;
var page=0;
var page_count=0;
var judge=1;
var itemimg =1;
var textid=0;
var cc=1;
var apti=1;
var pageH = $(document.body).height(); //页面总高度 
var scrollT = $(window).scrollTop(); //滚动条top 
function Load_Data(url,GET){
	setTimeout(function(){Load_judge(index);}, 0)
	if(url.indexOf("?") > 0 ){
		url = url+"&GET="+GET
	}
	else{
		url = url+"?GET="+GET
	}
	//window.open(url+"&t"+new Date().getTime())
	//alert(GET)
	if (wordb!=""){
		var url = url+wordb;
	}
	$.get(url+"&t"+new Date().getTime(), function(data){
		//alert(data)
		judge=3;
		if(GET==1){
			document.getElementById("data_text").innerHTML=data
			var reg=/[^?]*regularJSON:([^)]*)([^]*)/;
			regularJSON=data.replace(reg,"$1");
			var result = eval('(' + regularJSON + ')'); 
			document.getElementById("count_1").innerHTML=result.count+" 件"
			document.getElementById("count_2").innerHTML=result.count+" 件"
			page=result.page;
			page_count=result.page_count;
			document.getElementById("page_count_1").innerHTML=page + "/" + page_count
			document.getElementById("page_count_2").innerHTML=page + "/" + page_count
			return false;
		}
		if(GET==2){
			document.getElementById("xiangqing").innerHTML=data
			return false;
		}
		if(GET==3){
			//alert(data)
			var reg=/[^?]*regularJSON:([^)]*)([^]*)/;
			var result=data.replace(reg,"$1");
			var data2=data.replace("<!--(regularJSON:"+result+")-->","")
			reg=/[^?]*tuijian:([^)]*)tj([^]*)/;
			result2=data.replace(reg,"$1");
			data2=data2.replace("<!--(tuijian:"+result2+"tj)-->","")
			document.getElementById("danpin").innerHTML=data2
			result = eval('(' + result + ')');
			var pict_url = result.results.n_tbk_item.pict_url
			document.getElementById("item_img").src=pict_url+"_430x430"
			document.getElementById("item_img_1").src=pict_url+"_60x60"
			for(var i = 0;result.results.n_tbk_item.small_images.string[i]!=undefined;i++){ //循环取img
				document.getElementById("item_img_"+(i+2)).src=result.results.n_tbk_item.small_images.string[i]+"_60x60"
				//sc_zhutu_div_tetx = result.results.n_tbk_item.small_images.string[i]
				//alert(result.results.n_tbk_item.small_images.string[i])
			}

			document.getElementById("tuijian").innerHTML=result2
			return false;
		}
		if(GET==4){
			var reg=/[^?]*regularJSON:([^)]*)([^]*)/;
			regularJSON=data.replace(reg,"$1");
			var result = eval('(' + regularJSON + ')');
			page=result.page; 
			page_count=result.page_count;
			zz=data;
			if(page_count==1){
				document.getElementById("text_1").innerHTML=data+'<div id="text_2" class="text_load_002">没有更多宝贝了</div>'
			}
			else if(page_count==9999999 || page_count==9999998){
				document.getElementById("text_1").innerHTML=data+'<div id="text_'+(page+1)+'"><div class="text_load_001_2">微信端无法加载更多商品了</div></div>'
				cc=2;
			}
			else if(page_count>0){
				document.getElementById("text_1").innerHTML=data+'<div id="text_'+(page+1)+'"><div class="text_load_001">玩命加载中...</div></div>'
				cc=0;
			}
			else{
				document.getElementById("text_1").innerHTML=data
			}
			textid=page+1;
			return false;
		}
	});
}
function Load_judge(){
	if(judge==1){
		document.getElementById("count_1").innerHTML="N 件"
		judge=2;
		setTimeout(function(){Load_judge(index);}, 10000)
		return false;
	}
	if(judge==2){
		window.location.reload();
	}
}
function word(word){ 
	if(Button==1){return false;}
	Button=1;
	var word=document.getElementById(word).value;
	if(word==""){
		window.location.href="?";	
	}
	else{
		window.location.href="?word=" + word.replace(/&/g, "%_2%_6");
	}
}
function link(link,type,value){
	if(Button==1){return false;}
	if(type==1 && value>0 && value!=page && value<=page_count){
		link= link + "&page=" + value;
		link=link.replace("?&", "?").replace("&&", "&");
		window.location.href=link;
		return false;
	}
	else if(type==3){
		window.location.href="?catIds="+link;
		return false;
	}
	else if (type==4){
		link= sortTypelink + "&sortType=" + link;
		link=link.replace("?&", "?").replace("&&", "&");
		window.location.href=link;
	}
}
function new_link(value){
	if(value=="tqg1" && tqg1!=""){
		window.open(tqg1)
	}
	else if(value=="tqg2" && tqg2!=""){
		window.open(tqg2)
	}
	else if(value=="jhs" && jhs!=""){
		window.open(jhs)
	}
	else if(value=="qq" && qq!=""){
		window.location.href="tencent://Message/?uin="+qq
	}
	else if(value=="qqun" && qqun!=""){
		window.open(qqun.replace("_2_6","&"))
	}
	else if(value=="tm1" && tm1!=""){
		window.open(tm1)
	}
	else if(value=="tm2" && tm2!=""){
		window.location.href=tm2
	}
	else if(value=="PChblj"&& PChblj!=""){
		window.open(PChblj)
	}
	else if(value=="WXhblj"&& WXhblj!=""){
		window.open(WXhblj)
	}
}
var dc_xl=0;
function zksq_xl(type,value){
	if(dc_xl!=type){
		document.getElementById('Fill_006').style.display='inline'
		document.getElementById('dc_xl_00'+type).style.color="#FF5F49"
		document.getElementById("cx_xl_img"+type).src="http://alniu.cc/m/img/spike_031.png";
		document.getElementById("xl_00"+type).style.height= (value)+"px"
		if(dc_xl!=0){
			document.getElementById("xl_00"+dc_xl).style.height="0px"
			document.getElementById("cx_xl_img"+dc_xl).src="http://alniu.cc/m/img/spike_030.png";
			if((dc_xl==1 && xl_flxz>0) || (dc_xl==2 && xl_pxxz>0) || (dc_xl==3  && xl_sxxz>0)){
				dc_xl = type;
				return false;
			}
			document.getElementById('dc_xl_00'+dc_xl).style.color="#5F5F5F"
		}
		dc_xl = type;
	}
	else{
		document.getElementById("cx_xl_img"+type).src="http://alniu.cc/m/img/spike_030.png";
		document.getElementById("xl_00"+type).style.height="0px"
		document.getElementById('Fill_006').style.display='none'
		if((dc_xl==1 && xl_flxz>0) || (dc_xl==2 && xl_pxxz>0) || (dc_xl==3  && xl_sxxz>0)){
			dc_xl = 0;
			return false;
		}
		document.getElementById('dc_xl_00'+type).style.color="#5F5F5F"
		dc_xl=0;
	}
}
function sq_xl(){
		document.getElementById("cx_xl_img"+dc_xl).src="http://alniu.cc/m/img/spike_030.png";
		document.getElementById("xl_00"+dc_xl).style.height="0px"
		document.getElementById('Fill_006').style.display='none'
		if((dc_xl==1 && xl_flxz>0) || (dc_xl==2 && xl_pxxz>0) || (dc_xl==3  && xl_sxxz>0)){
			dc_xl = 0;
			return false;
		}
		document.getElementById('dc_xl_00'+dc_xl).style.color="#5F5F5F"
		dc_xl=0;
}
var winH = $(window).height(); 
$(window).scroll(function () { 
    var pageH = $(document.body).height(); //页面总高度 
    var scrollT = $(window).scrollTop(); //滚动条top 
    var aa = (pageH-winH-scrollT)/winH; 
	//alert(aa)
	if(aa<0 && cc==2){weixin()}
	if(aa<2.4 && cc==0){ 
		cc=1;
		$.get(pagelink+wordb+"&GET=4&page="+textid+"&t"+new Date().getTime(), function(data){
			var reg=/[^?]*regularJSON:([^)]*)([^]*)/;
			regularJSON=data.replace(reg,"$1");
			var result = eval('(' + regularJSON + ')'); 
			page_count=result.page_count;
			if(textid+1<=page_count){
				document.getElementById("text_"+textid).innerHTML=data+'<div id="text_'+(textid+1)+'"><div class="text_load_001">玩命加载中...</div></div>'
				cc=0;
			}
			else{
				document.getElementById("text_"+textid).innerHTML=data+'<div id="text_'+(textid+1)+'" class="text_load_002">没有更多宝贝了</div>'
			}	
			textid++
			return false;
		});
	} 
});
function sx_an(type,value){
	if(sx_anniu!=0){
		document.getElementById('sx_anniu_'+sx_anniu).style.border='1px solid #9A9A9A';
		document.getElementById('sx_anniu_'+sx_anniu).style.color='#000000';
	}
	
	document.getElementById('sx_jg1').value=""
	document.getElementById('sx_jg2').value=""
	if(type!=0){
		document.getElementById('sx_anniu_'+type).style.border='1px solid #FF472E';
		document.getElementById('sx_anniu_'+type).style.color='#FF523B';
	}
	sx_anniu=type;
	sx_dj1=0;
	sx_dj2=value;
}
function sx_jgkjd(){
	if(sx_anniu!=0){
		document.getElementById('sx_anniu_'+sx_anniu).style.border='1px solid #9A9A9A';
		document.getElementById('sx_anniu_'+sx_anniu).style.color='#000000';
		sx_anniu=0;
	}
}
function sx_qr(){
	if(sx_anniu!=0){
		window.location.href=pagelink+"&startPrice=0&endPrice="+sx_dj2
	}
	else{
		window.location.href=pagelink+"&startPrice="+document.getElementById('sx_jg1').value+"&endPrice="+document.getElementById('sx_jg2').value
	}
}
function weixin(){
	document.getElementById('Fill_007').style.display='inline';
	document.getElementById('Fill_008').style.display='inline';
	document.getElementById('Fill_009').style.display='inline';
}
function Cancel_a(){
	document.getElementById('Fill_007').style.display='none';
	document.getElementById('Fill_008').style.display='none';
	document.getElementById('Fill_009').style.display='none';
	return false;
}

