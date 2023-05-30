var txt3=document.querySelector("#input");
  var btnss=document.getElementsByClassName("btns1");
  for (var i=0;i<btnss.length;i++){
    btnss[i].addEventListener("click",function(event){
      txt3.value+=this.innerText;
      
    });
  }
var btnss2=document.getElementsByClassName("btns2");
for (var i=0;i<btnss2.length;i++){
  btnss2[i].addEventListener("click",function(event){
    txt3.value+=this.innerText;
    
  });
}
function clrs(){
  
  window.location.reload();
  
}

function calculate(){
  var txt=document.querySelector("#input");
  var txt2=document.querySelector("#input");
  txt=txt.value;
  var result=recurse(txt);
  txt2.value=result;
  
}

function recurse(txt){
  var temp="";
  for(var i=0 ; i<txt.length ;i++){
    if(txt[i]==="^"){
      temp +="**";
    }else{
      temp+=txt[i];
    }
  }
  let result=eval(temp);
  return result;
}
