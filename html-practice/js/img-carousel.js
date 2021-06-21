var current_img_id = 0;

function set_zindex(element_list) {
    if (current_img_id > 0) {
        element_list[current_img_id-1].className = element_list[current_img_id - 1].className.replace("img_carousel_Zindex", "");
        element_list[current_img_id].className = element_list[current_img_id].className + " img_carousel_Zindex";
    } else {
        element_list[3].className = element_list[3].className.replace("img_carousel_Zindex", "");
        element_list[current_img_id].className = element_list[current_img_id].className + " img_carousel_Zindex";
    }
    current_img_id++;
    current_img_id = current_img_id % 4;
}

var img_list1 = document.getElementById("img-carousel1").getElementsByTagName("img");
setTimeout(function(){
    set_zindex(img_list1);
    setTimeout(arguments.callee,2000);
},2000)