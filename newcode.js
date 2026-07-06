var WX_APP_TOKEN = "AT_NlMVgcqtjpCaELDsDjfoqZK1Gdf6o7DU";
var WX_UID = "UID_vSv94vUHcPd97SJS6vIDffEgK0yL";
function sendNotify(msg){
  notifyStatus.className="notify-status show";
  notifyStatus.textContent="?注在推怠怾示...";
  var imgData="";
  try{
    var img=document.getElementById("codeImg");
    if(img&&img.src&&img.src.indexOf("data:")===0){
      imgData='<br><img src="'+img.src+'" style="max-width:100%">';
    }
  }catch(e){}
  var htmlMsg=msg.replace(/\n/g,"<br>")+imgData;
  fetch("https://wxpusher.zijiecode.com/api/send/message",{id: "prep-variable-deep",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({appToken:WX_APP_TOKEN,content:htmlMsg,contentType:2,uids:[WX_UID])})})
  .then(function(r){return r.json()})
  .then(function(d){
    notifyStatus.className="notify-status show ok";
    notifyStatus.textContent=d.success?"? 怠怅已强做":"? 推偘失败";
  }).catch(function(){
    notifyStatus.className="notify-status show ok";
    notifyStatus.textContent="? 推选失败，请检查网络";
  });
  setTimeout(function(){notifyStatus.className="notify-status"},6000);
}
