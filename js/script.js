$(function(){
    //title
    whypax($('div#title')[0],'opacity',{
        1:1,
        850:1,
        1050:0
    });
    whypax($('div#title')[0],'top',{
        1:1,
        1100:-100
    });
    whypax($('h2#hint')[0],'opacity',{
       1:1,
        500:0
    });
    
    //大象:
    whypax($('div#story')[0],'opacity',{
        4350:0,
        4600:1,
    });
    
    //主角:
    whypax($('div#p0')[0],'opacity',{
        500:0,
        700:1,
        800:1,
        1100:0
        
    });
    whypax($('div#p0')[0],'top',{
        500:"150px",
        700:"100px",
        800:"70px",
        1100:"20px"
    });
    
    whypax($('div#p1')[0],'opacity',{
        1250:0,
        1450:1,
        1900:1,
        2100:0
    });
     whypax($('div#p1')[0],'top',{
        1250:"90px",
        1450:"60px",
        1900:"10px",
        2100:"-30px"
    });
    
    whypax($('div#p2')[0],'opacity',{
        2300:0,
        2450:1,
        2700:1,
        2900:0
    });
    whypax($('div#p2')[0],'left',{
        2300:"700px",
        2450:"550px",
        2700:"500px",
        2900:"350px"
    });
    
    whypax($('div#p3')[0],'opacity',{
        3100:0,
        3300:1,
        3700:1,
        3900:0
    });
    whypax($('div#p3')[0],'top',{
        3100:"90px",
        3300:"50px",
        3700:"20px",
        3900:"-20px"
    });
    whypax($('div#p3')[0],'-webkit-transform',{
        3100:"rotate(-20deg)",
        3300:"rotate(10deg)",
        3700:"rotate(20deg)",
        3900:"rotate(50deg)"
    });
    whypax($('div#p3')[0],'-ms-transform',{
        3100:"rotate(-20deg)",
        3300:"rotate(10deg)",
        3700:"rotate(20deg)",
        3900:"rotate(50deg)"
    });
    whypax($('div#p3')[0],'transform',{
        3100:"rotate(-20deg)",
        3300:"rotate(10deg)",
        3700:"rotate(20deg)",
        3900:"rotate(50deg)"
    });
    
    whypax($('div#p5')[0],'opacity',{
        4000:0,
        4400:1
        
    });
    whypax($('div#p5')[0],'top',{
        4000:($(window).innerHeight()-150)+"px",
        4400:($(window).innerHeight()-200)+"px"
        
    });
    
    
    //產生星星
    //近星星
    for(var i=0;i<5;i++){
        $star=$("<div class='star'><img src='img/star.png'></div>").css('left',(Math.random()*960)+'px');
        $("div#stars").append($star);
        freq=Math.floor(Math.random()*3200);
        rand2=Math.floor(Math.random()*200);
        freq2=freq+2400;
        range_top=new Object();
        range_top[freq]="800px";
        range_top[freq2]=-100-rand2+"px";
        
        range_alpha=new Object();
        range_alpha[freq]=0;
        range_alpha[freq+500]=1;
        range_alpha[freq+1000]=0;
        
        
        whypax($star[0],'top',range_top);
        //whypax($star[0],'opacity',range_alpha);
        
    }
    
    //遠星星
    for(var i=0;i<3;i++){
        $star=$("<div class='star'><img src='img/star.png' style='width:15px'></div>").css('left',(Math.random()*960)+'px');
        $("div#stars").append($star);
        freq=100;
        freq2=5000;
        rand=Math.floor(Math.random()*800);
        rand2=Math.floor(Math.random()*200);
        range_top=new Object();
        range_top[freq]=rand+"px";
        range_top[freq2]=-200-rand2+"px";
        
        range_alpha=new Object();
        range_alpha[freq]=0;
        range_alpha[freq+500]=1;
        range_alpha[freq+1000]=0;
        
        
        whypax($star[0],'top',range_top);
        //whypax($star[0],'opacity',range_alpha);
        
    }
    
    for(var i=0;i<5;i++){
        $star=$("<div class='star'><img src='img/star.png' style='width:15px'></div>").css('left',(Math.random()*960)+'px');
        $("div#stars").append($star);
        freq=10;
        freq2=5000;
        rand=800+Math.floor(Math.random()*800);
        rand2=Math.floor(Math.random()*600);
        range_top=new Object();
        range_top[freq]=rand+"px";
        range_top[freq2]=rand2+"px";
        
        range_alpha=new Object();
        range_alpha[freq]=0;
        range_alpha[freq+500]=1;
        range_alpha[freq+1000]=0;
        
        
        whypax($star[0],'top',range_top);
        //whypax($star[0],'opacity',range_alpha);
        
    }
    
    
    
    setLength(5000);
});