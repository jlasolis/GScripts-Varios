function Acortar(url){
url='http://tinyurl.com/api-create.php?url='+url;
var response = UrlFetchApp.fetch(url,{muteHttpExceptions:true});
return response.getContentText()
}

function HTTPCodigo(url){
var response = UrlFetchApp.fetch(url,{muteHttpExceptions:true});
return response.getResponseCode()
}

function UTMFacebook(url){
return url = url+"utm_medium=cpc&utm_source={{site_source_name}}&utm_campaign={{campaign.name}}_{{adset.name}}&utm_term={{placement}}&utm_content={{ad.name}}";
  
//esta es por idea de @josdiacam
}

