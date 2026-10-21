
function st(sel,css){document.querySelectorAll(sel).forEach(function(e){Object.assign(e.style,css)})}
document.documentElement.lang="ru";
st("body",{margin:"0",fontFamily:"Georgia,serif",background:"#faf5ff",color:"#2d2340",lineHeight:"1.5"});
st("nav",{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",background:"#6b3fa0",padding:"8px 16px"});
st("nav ul",{display:"flex",flexWrap:"wrap",gap:"4px 14px",listStyle:"none",margin:"0",padding:"0",alignItems:"center"});
st("nav a",{color:"#fff",textDecoration:"none",padding:"4px 8px",borderRadius:"6px"});
st("nav a.active",{background:"#f2a6d0",color:"#2d2340",fontWeight:"bold"});
document.querySelectorAll("nav a:not(.active)").forEach(function(a){
 a.onmouseover=function(){a.style.background="#8a5cc4"};
 a.onmouseout=function(){a.style.background="none"};
});
st("main",{maxWidth:"900px",margin:"0 auto",padding:"16px"});
st(".sub",{background:"#efe3fb",padding:"8px 12px",borderRadius:"8px"});
st(".sub a",{marginRight:"12px"});
st("figure",{margin:"12px 0"});
st("figcaption",{fontSize:".9em",color:"#665a80"});
st("table",{borderCollapse:"collapse"});
st("td,th",{border:"1px solid #6b3fa0",padding:"8px"});
st(".bgtable",{backgroundImage:"url(img/bg.jpg)"});
st("label",{display:"block",margin:"6px 0"});
st("input,select,button",{font:"inherit",padding:"4px"});
st("fieldset",{margin:"16px 0"});
var ps=document.querySelector(".passport");
if(ps){
st(".passport", {
    position: "relative",
    width: "100%",
    maxWidth: "828px",
    aspectRatio: "828 / 1152",
    margin: "20px auto",
    backgroundImage: "url(img/passport_blank.jpg)",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
});
 var button = document.getElementById("change");

if (button) {
    button.onclick = function() {
        document.getElementById("fam").textContent = "ivanov";
        document.getElementById("imya").textContent = "ivan";
        document.getElementById("otc").textContent = "ivanovich";
    };
}

 st(".passport img",{position:"absolute",left:"30px",top:"30px",width:"40px",height: 40px",objectFit:"cover"});
 st(".passport p",{position:"absolute",margin:"0",left:"450px",fontSize:"20px"});
 document.querySelectorAll(".passport p").forEach(function(p,i){p.style.top=(50+i*50)+"px"});
}
