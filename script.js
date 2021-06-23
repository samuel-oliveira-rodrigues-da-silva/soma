function alae() {
  //var num = ['', '2']
var mem = parseInt(Math.random()*2)
if(mem == 0){
 var num = parseInt(Math.random()*20+1)
  var num2 = parseInt(Math.random()*20+1)
  var resp = num+num2
  var usu = window.prompt('Quanto é '+num+' MAIS '+num2+'?')
  if(usu == resp){
    window.alert('Você acertou, era '+resp+' '+String.fromCodePoint(0x1F604))
  }
  else if(usu != resp){
   window.alert('Você errou, era '+resp+' '+String.fromCodePoint(0x1F615))
 }
}
else if(mem == 1){
  var num = parseInt(Math.random()*20+1)
  var num2 = parseInt(Math.random()*20)
  var resp = num-num2
  var usu = window.prompt('Quanto é '+num+' MENOS '+num2+'?')
  if(usu == resp){
    window.alert('Você acertou, era '+resp+' '+String.fromCodePoint(0x1F604))
  }
  else if(usu != resp){
   window.alert('Você errou, era '+resp+' '+String.fromCodePoint(0x1F615))
 }
}

}