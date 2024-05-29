var arr=[
    {
        songName: "Matarghasti",
        url: "./songs/128-Matargashti - Tamasha 128 Kbps.mp3",
        img: "./images/tamasha.jpg"
    },
    {
        songName: "Tum Se Hi",
        url: "./songs/128-Tum Se Hi - Jab We Met 128 Kbps.mp3",
        img: "./images/jab-we.jpg"
    },
    {
        songName: "Kabira",
        url: "./songs/128-Kabira - Yeh Jawaani Hai Deewani 128 Kbps.mp3",
        img: "./images/yjhd.jpg"
    },
    {
        songName: "Agar tum saath ho",
        url: "./songs/128-Agar Tum Saath Ho - Tamasha 128 Kbps.mp3",
        img: "./images/tamasha.jpg"
    }
];

var poster =document.querySelector("#left");
var selectedSongs=0;
var audio=new Audio();
var play=document.querySelector("#play");
var forward=document.querySelector("#forward");
var backward=document.querySelector("#backward");
var allSongs = document.querySelector("#all-songs");
function myfunc(){
    var clutter = " ";

arr.forEach(function(obj, idx) {
    clutter += `<div class="song-card" id="${idx}">
        <div class="part1">
            <img src="${obj.img}" alt="image">
            <h2>${obj.songName}</h2>
        </div>
    </div>`;
    allSongs.innerHTML = clutter;
    audio.src=arr[selectedSongs].url;
    poster.style.backgroundImage=`url(${arr[selectedSongs].img})`
    poster.style.backgroundSize="cover";
 
});
}

myfunc();

allSongs.addEventListener("click", function(details) {
   selectedSongs=details.target.id;
   play.innerHTML=`<i class="ri-pause-fill"></i>`
   myfunc();
   flag=1;
    audio.play();
});

var flag=0;
play.addEventListener("click",function(){
   
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-fill"></i>`
        myfunc();
        audio.play();
        flag=1;
    }else{
        play.innerHTML=`<i class="ri-play-mini-fill"></i>`
        myfunc();
        audio.pause();
        flag=0;
    }
})

forward.addEventListener("click",function(details){
    if(selectedSongs< arr.length-1){
        selectedSongs++;
        myfunc()
        audio.play()
        forward.style.opacity=1;
        backward.style.opacity=1;
    }else{
        forward.style.opacity=0.4;
    }
})


backward.addEventListener("click",function(details){
    if(selectedSongs>0){
        selectedSongs--;
        myfunc()
        audio.play()
        forward.style.opacity=1;
        backward.style.opacity=1;
    }else{
      backward.style.opacity=0.4;
    }
})