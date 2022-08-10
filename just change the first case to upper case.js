var name =prompt("enter your name");
var firstchar=name.slice(0,1);
var uppercasefirstchar=firstchar.toUpperCase();
var restname=name.slice(1,name.lenght);
 restname=restname.toLowerCase();
var capitalisedname=uppercasefirstchar+restname;
alert("hello,  "+capitalisedname);