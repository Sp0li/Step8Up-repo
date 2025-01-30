

function calculate(){
    var no1 = parseInt(document.getElementById("calcno1").value);
    var no2 = parseInt(document.getElementById("calcno2").value);
    var output;
    switch (document.getElementById("calcop").value)
    {
        case "+":
            output = no1 + no2;
            break;
        case "-":
            output = no1 - no2;
            break;
        case "*":
            output = no1 * no2;
            break;
        case "/":
            output = no1 / no2;
            break;
        case "%":
            output = no1 % no2;
            break;
    }
    document.getElementById("calcoutput").innerHTML = output;
}


var refresh = false;

function reFresh() {
    refresh = true;
}


function refreshlm() {
    if(refresh)
    {
        // lm - last modified
        // c - current
        // d - date
        // t - time
        // dsm / tsm - date / time since modified
        // _t - temp
        // dtslm - datetime since last modified
        var lastmodified = document.lastModified.split(" ");
        var lmd_t = lastmodified[0].split("/"); // month day year
        var lmd = [lmd_t[1], lmd_t[0], lmd_t[2]]; // day month year
        var lmt_t = lastmodified[1].split(":"); // hour minute second
        var lmt = [lmt_t[2], lmt_t[1], lmt_t[0]]; // second minute hour
        var date = new Date();
        var cd = [date.getDate(), date.getMonth()+1, date.getFullYear()]
        var ct = [date.getSeconds(), date.getMinutes(), date.getHours()]

        var tsm = [ct[0]-lmt[0], ct[1]-lmt[1], ct[2]-lmt[2]];
        var dsm = [cd[0]-lmd[0], cd[1]-lmd[1], cd[2]-lmd[2]];

        if(Math.abs(tsm[0])!=tsm[0])
        {tsm[1]-=1;
            tsm[0]+=60;}
        if(Math.abs(tsm[1])!=tsm[1])
        {tsm[0]-=1;
            tsm[1]+=60;}
        if(Math.abs(tsm[2])!=tsm[2])
        {tsm[2]-=1;
            tsm[1]+=24;}

        var dtslm;
        if(dsm[2]!=0)
        {
            if(dsm[2]==1)
                dtslm = "1 Year ago";
            else
                dtslm = `${dsm[2]} Years ago`;
        }
        else if(dsm[1]!=0)
        {
            if(dsm[1]==1)
                dtslm = "1 Month ago";
            else
                dtslm = `${dsm[1]} Months ago`;
        }
        else if(dsm[0]!=0)
        {
            if(dsm[0]==1)
                dtslm = "1 Day ago";
            else
                dtslm = `${dsm[1]} Days ago`;
        }
        else if(tsm[2]!=0)
        {
            if(tsm[2]==1)
                dtslm = "1 Hour ago";
            else
                dtslm = `${tsm[2]} Hours ago`;
        }
        else if(tsm[1]!=0)
        {
            if(tsm[1]==1)
                dtslm = "1 Minute ago";
            else
                dtslm = `${tsm[1]} Minutes ago`;
        }
        else if(tsm[0]!=0)
        {
            if(tsm[0]==1)
                dtslm = "1 Second ago";
            else
                dtslm = `${tsm[0]} Seconds ago`;
        }

        document.getElementById("last-modified").innerHTML = `Last Modified: ${dtslm}`;
    }
}

setInterval(refreshlm,1000);

var mode = "dark";

document.getElementById("icon").addEventListener("click",function(e){
    if(mode=="dark")
    {
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', 'white');
        document.getElementById("icon").src = "images/moon-icon.png";
        mode = "light";
    }
    else
    {
        document.documentElement.style.setProperty('--bg-color', 'rgb(33, 39, 63)');
        document.documentElement.style.setProperty('--secondary-color', 'rgb(28, 32, 48)');
        document.getElementById("icon").src = "images/sun-icon.png";
        mode = "dark";
    }
});

//document.getElementById("elementId").addEventListener("focus",function(e){
    //Do Something here
  // });
