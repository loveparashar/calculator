var buttons=document.getElementsByClassName('button');
var displays=document.getElementById('display');
var operand1=0;
var operator=null;
var operand2=0;
for(var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener('click',function(){
		  var value=this.getAttribute('data-value');
		  if(value=='+')
		  {
		  	displays.innerText+='+';
		  }
		  else if(value=='*')
		  {
		  	displays.innerText+='*';
		  }
		  else if(value=='/')
		  {
		  	displays.innerText+='/';
		  }
		   else if(value=='.')
		  {
		  	displays.innerText+='.';
		  }
		   else if(value=='-')
		  {
		  	displays.innerText+='-';
		  }
		   else if(value=='=')
		  {
		  	displays.innerText=eval(displays.innerText);
		  }
		   else if(value=='AC')
		  {
		  	displays.innerText='';
		  }
		  else if(value=='sin'){
		  	     displays.innerText+='sin';
		  }
		  else{
		  	displays.innerText+=value;
		  }
	});
}
