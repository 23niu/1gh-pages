var d = new Date();
var h = d.getHours();
var list = {
	'news':{
		'des': '各种大型视频站资源库',
		'rows':[
			{
			'status':'ok',
			'name':'全部资源',
			'apiurl':'http://api.2m.vc/caij/inc/api.php',
			'flag':'rooog',
			'xt':'1',
			'group':'',
			'ct':''
			},
			{
			'status':'ok',
			'name':'优酷',
			'apiurl':'http://api.2m.vc/caij/inc/youku.php',
			'flag':'rooog',
			'xt':'1',
			'group':'',
			'ct':''
			},
			{
			'status':'ok',
			'name':'芒果',
			'apiurl':'http://api.2m.vc/caij/inc/mgtv.php',
			'flag':'rooog',
			'xt':'1',
			'group':'',
			'ct':''
			},
			{
			'status':'ok',
			'name':'乐视',
			'apiurl':'http://api.2m.vc/caij/inc/letv.php',
			'flag':'rooog',
			'xt':'1',
			'group':'',
			'ct':''
			},
			{
			'status':'ok',
			'name':'爱奇艺',
			'apiurl':'http://api.2m.vc/caij/inc/qiyi.php',
			'flag':'rooog',
			'xt':'1',
			'group':'',
			'ct':''
			},
			{
			'status':'ok',
			'name':'腾讯',
			'apiurl':'http://api.2m.vc/caij/inc/qq.php',
			'flag':'rooog',
			'xt':'1',
			'group':'',
			'ct':''
			},
			{
			'status':'ok',
			'name':'搜狐',
			'apiurl':'http://api.2m.vc/caij/inc/sohu.php',
			'flag':'rooog',
			'xt':'1',
			'group':'',
			'ct':''
			},
			{
			'status':'ok',
			'name':'pptv',
			'apiurl':'http://api.2m.vc/caij/inc/pptv.php',
			'flag':'rooog',
			'xt':'1',
			'group':'',
			'ct':''
			}


			
			
		]
	},
	'fensizy':{
		'des': '各种云资源',
		'rows':[
			{
			'status':'ok',
			'name':'小帅云',
			'apiurl':'http://api.2m.vc/caij/inc/yunp.php',
			'flag':'fensizycom_',
			'xt':'1',
			'group':'1',
			'ct':''
			},
			{
			'status':'ok',
			'name':'ty(推荐资源！天翼云盘,请加群 在群文件下载解析插件523074597)',
			'apiurl':'http://api.2m.vc/caij/inc/ty.php',
			'flag':'fensizycom_',
			'xt':'1',
			'group':'2',
			'ct':''
			},
			{
			'status':'ok',
			'name':'法海云(27盘)',
			'apiurl':'http://api.2m.vc/caij/inc/fahai.php',
			'flag':'fensizycom_',
			'xt':'1',
			'group':'2',
			'ct':''
			},
			{
			'status':'ok',
			'name':'mp4直链',
			'apiurl':'http://api.2m.vc/caij/inc/mp4.php',
			'flag':'fensizycom_',
			'xt':'1',
			'group':'2',
			'ct':''
			}
		]
	}
};

var html='',html2='',url='',url8x='',url7x='',ver='7x',url1='',url2='',url3='',url4='',urlone='',name1='';
url8x='index.php?m=collect-{ac}-ac2-{ac2}-hour-{hour}-xt-{xt}-ct-{ct}-group-{group}-flag-{flag}-apiurl-{apiurl}';
url7x='admin_maccj.php?action={ac}&xt={xt}&ct={ct}&rday={hour}&cjflag={flag}&cjurl={apiurl}';
if(top.location.href.indexOf('maccj')>-1){ ver='7x';url=url7x; } else{ ver='8x';url=url8x; }

$.each(list, function(k1, v1){
	html +="<table width='98%' class='table'><tbody>";
	if(k1=='news'){
		html += "<tr class='table_title red'><td colspan='7' class='td'><span style='float:left'>&nbsp;离线资源采集平台&nbsp;</span><span style='float:right'>本资源采集插件由精信网提供[官方群:523074597],如果有什么疑问请加群询问&nbsp;</span></td></tr>";
	}
	html += "<tr class='table_title'><td colspan='7' class='td'><span style='float:left'>&nbsp;"+v1.des+"</span><span style='float:right'>&nbsp;</span></td></tr>";
	
	$.each(v1.rows, function(k2, v2){
		urlone = url.replace('{xt}',v2.xt).replace('{ct}',v2.ct).replace('{group}',v2.group).replace('{flag}',v2.flag).replace('{apiurl}',v2.apiurl);
		name1 = v2.name;
		if(ver=='8x'){
			url1= urlone.replace('{ac}','list').replace('{ac2}','').replace('{hour}','');
			url2= urlone.replace('{ac}','cj').replace('{ac2}','day').replace('{hour}','24');
			url3= urlone.replace('{ac}','cj').replace('{ac2}','day').replace('{hour}','98');
			url4= urlone.replace('{ac}','cj').replace('{ac2}','all').replace('{hour}','');
		}
		else{
			url1= urlone.replace('{ac}','list').replace('{ac2}','').replace('{hour}','');
			url2= urlone.replace('{ac}','cjday').replace('{ac2}','').replace('{hour}','24');
			url3= urlone.replace('{ac}','cjday').replace('{ac2}','').replace('{hour}','98');
			url4= urlone.replace('{ac}','cjall').replace('{ac2}','').replace('{hour}','');
		}
		
		html += "<tr><td width='20'>0"+(k2+1)+"、</td>"+'<td width="30" align=center><em class="u'+v2.status+'"><em></td>'+"<td><a href='"+url1+"'> "+name1+" </a></td>"+"<td width='60'><a href='"+url2+"'>采集当天</a></td>"+"<td width='60'><a href='"+url4+"'>采集所有</a></td></tr>";
		
		html2 += '<option value="'+url2+'">'+name1+'</option>';
	});
	html+='</tbody></table>';
});
html2 = '<select id="ds_url" name="ds_url" multiple style=" width:400px;height:300px">' + html2 + '</select>';

document.write('<style type="text/css">.table {margin-bottom:5px;font-size:12px;text-align:left;border-collapse: collapse;border: 1px solid #C6DCF2; }.table td {padding-left:10px;padding-right:10px;border: 1px solid #C6DCF2; }.table .td {height:25px;padding-left:0px;} .table tr {height:25px;line-height:25px;}.table tr .left{width:180px;text-align:right;padding-right:10px;color:#666;} .table_title {height:25px;line-height:25px;background: #F3F7FB;font-weight:bold;color:#0099cc;}.uok{width:30px;height:15px;color:white;background-color:green;display:-moz-inline-box;display:inline-block;}.uerr{width:30px;height:15px;color:white;background-color:red;display:-moz-inline-box;display:inline-block;}.red{color:red;}</style>');

h=20;
if(h>=19 || h<=1){
	if( typeof typeids != 'undefined' ){
		document.write(html2);
	}
	else{
		document.write(html);
	}
	
}
else{
	document.write('<font style="color:red;font-size:26px">关闭中，请从视频网站获取正版数据外链调用地址。<br></font><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>');
}


http://65yw.2m.vc/zy/pgcms.js