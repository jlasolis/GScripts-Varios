function HTTPCodigo(url){
var response = UrlFetchApp.fetch(url,{muteHttpExceptions:true});
return response.getResponseCode()
}
