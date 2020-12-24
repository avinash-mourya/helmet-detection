function init() {
  $("#loading").hide();
}
var image = "0";
function uploadImg(){
    const img2 = document.getElementById("canvasimg");
    const upload = document.getElementById("upload").files[0];
    let reader = new FileReader();
        reader.readAsDataURL(upload);
        reader.onload = function (e) {
            image = reader.result;
            img2.style.display = "block";
            img2.setAttribute("src",reader.result);
            img2.style.top = "18%";
            img2.style.left = "10%";
            img2.style.width = "405px";
            img2.style.height = "305px";
          }
    // ctx.drawImage(image, 10, 10);
    
    console.log(image);
    console.log(upload);

}  

// for checking canvas is blonk or not
// function isCanvasBlank(canvas) {
//     return !canvas.getContext('2d')
//       .getImageData(0, 0, canvas.width, canvas.height).data
//       .some(channel => channel !== 0);
//   } 


function saveImage() {
    const canvas = document.getElementById('can');
    const img = document.getElementById("canvasimg2");
    // console.log(data)
    if (image=="0"){
        alert("please upload image");
    }else{
      $("#loading").show();
      $.ajax({
        type: "POST",
        url: "/detect/",
        async:true,
        data:{"imgData":image},
        success: function (response) {
            console.log(`data:image/jpeg;base64,${response}`);
            img.style.display="block";
            img.setAttribute("src",`data:image/jpeg;base64,${response}`);
            img.style.top = "18%";
            img.style.left = "50%";
            img.style.width = "405px";
            img.style.height = "305px";
    
        $("#loading").hide();
        },
        error: function(xhr){
          alert("An error occured: " + xhr.status + " " + xhr.statusText);
         $("#loading").hide();
        }
      });
    }
      return false;
    }

