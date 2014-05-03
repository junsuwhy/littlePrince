var init=false;
//everty obj in objlist have attr as html,css,valuerange
var objlist=[];
var scrollVer;

function setLength(leng){
    setdiv=$('<div id="setleng">').css({
        position:'absolute',
        top: leng,
        height: $(window).innerHeight(),
        width: '100%'
    });
    $('body').append(setdiv);
}


/*
obj:
html:like <div>objects
css:css attributes such as "top","opacity" 
range:{700:0,800:1};
prefix
suffix
keylist
curN
curLeft
curRight
leftVal
rightVal
*/
function whypax(html,css,range){
    if(!init){
        init=true;
        $(window).bind('scroll',function(e){
            for(var key in objlist){
                o=objlist[key];
                scrollVer = $(window).scrollTop();
                if(scrollVer<o.curLeft || scrollVer>o.curRight)renewLR(o);
                $(o.html).css(o.css,getValue(o));
            }
        });
    }
    
    var obj=new Object();
    obj.html=html;
    obj.css=css;
    obj.valuerange=range;
    objlist.push(obj);
    obj.keylist=[];
    for(var k in range){
        if(typeof(k)=="string")k=Number(k);
        obj.keylist.push(k);
    };
    obj.keylist.sort(function(a,b){return a-b});
    
    num=String(range[obj.keylist[0]]).match(/-?\d+\.?\d?/g)[0];
    arrFix=String(range[obj.keylist[0]]).split(num);
    obj.prefix=arrFix[0];
    obj.surfix=arrFix[1];
    
    scrollVer = $(window).scrollTop();
    renewLR(obj);
//    console.log(scrollVer);
//    console.log(obj);
    
    $(html).css(css,getValue(obj));
    
}

function renewLR(o){
    if(scrollVer<o.keylist[0]){
        o.curN=1;
        o.curLeft=-999;
        o.curRight=o.keylist[0];
        o.rightVal=o.leftVal=Number(String(o.valuerange[o.keylist[0]]).match(/-?\d+\.?\d?/g)[0]);
//        console.log(o);
        return
    }
    if(scrollVer>o.keylist[o.keylist.length-1]){
        o.curN=o.keylist.length;
        o.curLeft=o.keylist[o.keylist.length-1];
        o.curRight=99999;
        o.rightVal=o.leftVal=Number(String(o.valuerange[o.keylist[o.keylist.length-1]]).match(/-?\d+\.?\d?/g)[0]);
//        console.log(o);
        return
    }
    for(var k = 1;k< o.keylist.length;k++){
        if(scrollVer<o.keylist[k]){
            o.curN=k;
            o.curLeft=o.keylist[k-1];
            o.curRight=o.keylist[k];
            o.leftVal=Number(String(o.valuerange[o.keylist[k-1]]).match(/-?\d+\.?\d?/g)[0]);
            o.rightVal=Number(String(o.valuerange[o.keylist[k]]).match(/-?\d+\.?\d?/g)[0]);
//            console.log(o);
            break;
            return
        }
    }
}

function getValue(o){
    curNumber=o.leftVal+(o.rightVal-o.leftVal)*(scrollVer-o.curLeft)/(o.curRight-o.curLeft);
    return o.prefix+curNumber+o.surfix;
}

var testobj={200:0,300:1,500:1,600:-3};