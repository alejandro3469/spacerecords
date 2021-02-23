var maindiv = document.getElementById('fotos');
var count = maindiv.getElementsByTagName('div').length;
var slideshow = document.getElementById('slideshow');
var bigc = document.getElementById('big_container');
var ncn = document.getElementById('ncn');

//dinamic BIG´S-CONTAINER width
var wdbc=count*100;
var stcwdbc=wdbc+"%";
bigc.style.width=stcwdbc;
var mleft=100;
var s=0;
var columns;
var bigs;
var imageS = [];
var cl=[];
var lm=[];
var bigs3=[];
var dispimg="";
var src2=[];
          
for(var n=1;n<=count;n++){
    var getfrom="img"+n;
    var img=document.getElementById(getfrom);
    var img2=img.outerHTML;
    var stringElement = img2;
    var parts = stringElement.split('"',5);
    var img_src = parts[3];
    let div = document.createElement('div');
    div.id = 'big'+n;
    div.class = 'big big'+n;
    div.innerHTML = '<img src="'+img_src+'">';
    bigc.appendChild(div);

    //BIG photos dinamic width
    var tr=wdbc/count;
    var bgw=tr+"%";
    div.style.width=bgw;

    imageS[n]="big"+n;

    bigs="big"+n;
    document.getElementById(bigs).style.display='none';
    document.getElementById(bigs).style.opacity='1';

    columns="column"+n;

    //Column´s CLASSES array
    cl[n]="column"+n;
    //ELEMENTS(columns) array
    lm[n]=document.getElementById(cl[n]);

    //COLUMNS onclick function
    document.getElementById(cl[n]).onclick=function(){
        document.getElementById('slideshow').style.display='block';
        document.getElementById('ag1').style.display='block';
        document.getElementById('ag2').style.display='block';
        document.getElementById('close').style.display='block';
        for(var n=1;n<=count;n++){
            bigs3[n]="big"+n;
            document.getElementById(bigs3[n]).style.display='block';
        }
        //Back to top of the window
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    
    //RIGHT(+) angle button onclick function
    document.getElementById('ag2').onclick=function(){
        if(s<=count){
            s=s+1;
            if(s>count-1){
                s=0;
            }
        }
        mleft=mleft*s;
        var mleft2=mleft*-1;
        var mleft3=mleft2+"%";
        bigc.style.marginLeft= mleft3;
        mleft=100;

        dispimg=(s+1)+" de "+count;
        var text = document.createTextNode(dispimg);
        let p = document.createElement('p');
        p.id = 'number';
        p.class = 'number';
        ncn.appendChild(p);
        p.appendChild(text);

        //delete overlaping elements
        var maindiv22 = document.getElementById('ncn');
        var count22 = maindiv22.getElementsByTagName('p').length;
        var count33=count22-2;
        for(var vv=0; vv<=count33;vv++){
        var rmv = document.getElementById("number");
            rmv.remove();
        }                
    };

    //LEFT(-) angle button onclick function
    document.getElementById('ag1').onclick=function(){

        if(s>=0){
            s=s-1;
            if(s<0){
                s=count-1;
            }
        }

        mleft=mleft*s;
        var mleft2=mleft*-1;
        var mleft3=mleft2+"%";
        bigc.style.marginLeft= mleft3;
        mleft=100;

        //#/#
        dispimg=(s+1)+" de "+count;
        var text = document.createTextNode(dispimg);
        let p = document.createElement('p');
        p.id = 'number';
        p.class = 'number';
        p.className= 'number'
        ncn.appendChild(p);
        p.appendChild(text);

        //delete overlaping elements
        var maindiv22 = document.getElementById('ncn');//container on the numbers
        var count22 = maindiv22.getElementsByTagName('p').length;
        var count33=count22-2;
        for(var vv=0; vv<=count33;vv++){
            var rmv = document.getElementById("number");
            rmv.remove();
        }
    };

    //Columns function2
    function openImage(clickedElement) {
        //get clicked element
        var ids= clickedElement.id;
        var splt2=ids.split("g",2);//array[im,number]
        var numbertouse = splt2[1];//array[0,1]
        var numbertouse2=numbertouse-1;//margin
        s=numbertouse2;
        mleft=mleft*s;//number*100
        var mleft2=mleft*-1;
        var mleft3=mleft2+"%";
        bigc.style.marginLeft= mleft3;
        mleft=100;//set mleft to default value

        //#/#
        dispimg=numbertouse+" de "+count;
        var text = document.createTextNode(dispimg);
        let p = document.createElement('p');
        p.id = 'number';
        p.class = 'number';
        p.className= 'number'
        ncn.appendChild(p);
        p.appendChild(text);
    }
}//end of for bucle

//CLOSE button onclick function
document.getElementById('close').onclick=function(){
    for(var n=1;n<=count;n++){
        document.getElementById(bigs).style.display='none';
    }
    document.getElementById('slideshow').style.display='none';
    document.getElementById('ag1').style.display='none';
    document.getElementById('ag2').style.display='none';
    document.getElementById('close').style.display='none';

    //Set margin lef
    s=0;
    mleft=mleft*s;
    var mleft2=mleft*-1;
    var mleft3=mleft2+"%";
    bigc.style.marginLeft= mleft3;
    mleft=100;//reset mleft to initial value

    //delete overlaping elements
    var maindiv22 = document.getElementById('ncn');
    var count22 = maindiv22.getElementsByTagName('p').length;
    var count33=count22-2;
    for(var vv=1; vv<=count22;vv++){
        var rmv = document.getElementById("number");
        rmv.remove();
    }
};//end of close function