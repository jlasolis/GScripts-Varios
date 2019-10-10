function HTTPCodigo(url){
var response = UrlFetchApp.fetch(url,{muteHttpExceptions:true,followRedirects: false});
return response.getResponseCode()
}
