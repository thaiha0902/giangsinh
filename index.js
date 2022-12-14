function listen() {
    document.getElementById("ha").innerHTML=`
    <audio controls autoplay style="display: none">
        
        <source src="music.mp3.mp3" type="audio/mpeg">
      
      </audio>
     `
    document.getElementById("ha1").innerHTML=`
    <p id="text1"> クリスマス おめでとう!</p>
    <p id="text2"> Gửi Phương ngok ngek của tui, giáng sinh năm nay hơi thiệt thòi xíu vì anh không ra <br>ngoài lâu để đi chơi với em được nhưng mà thật tuyệt vì thêm một giang sinh nữa chúng ta vẫn có nhau.</br> Cảm ơn em vì vẫn ở bên anh. Chúc cô người yêu xinh hơn hoa hậu của anh có một giáng sinh vui vẻ nhó. Anh yêu em.</p>
    `
    document.getElementById("tree").innerHTML=`<img class="img" src="cay.png" alt="">`
    document.getElementById("ha2").innerHTML=`
    
    <p id="text3">Em bé có đồng ý cùng anh đi hết quãng đường này không</p>

    
   
    <a href="#" class="btn1" onclick="listen1()">Em đồng ý</a>
    <a href="#" class="btn2">Không</a>
    `
}
function listen1() {
    document.getElementById("vui").innerHTML=`
    <p>Anh yêu em nhiều lắm, anh biết em sẽ đồng ý mà =))</p>
    `
}