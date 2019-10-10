/*
Funciones personalizadas útiles para SEM

Acortar : devuelve URL acortada en TinyURL
HTTPCodigo : Devuelve el Código HTTP (200, 404) de una URL
UTMFacebook : devuelve la concatenacion de la URL dada con las UTMs para el etiquetado automático en Facebook

*/


function Acortar(url){
url='http://tinyurl.com/api-create.php?url='+url;
var response = UrlFetchApp.fetch(url,{muteHttpExceptions:true,followRedirects: false});
return response.getContentText()
}

function HTTPCodigo(url){
var response = UrlFetchApp.fetch(url,{muteHttpExceptions:true});
return response.getResponseCode()
}

function UTMFacebook(url){
return url = url+"?utm_medium=cpc&utm_source={{site_source_name}}&utm_campaign={{campaign.name}}_{{adset.name}}&utm_term={{placement}}&utm_content={{ad.name}}";
  
//esta es por idea de @josdiacam
}

