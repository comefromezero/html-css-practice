function set_class(node_object,class_string){
    node_object.className = node_object.className + " " + class_string;
}
function unset_class(node_object,class_string){
    node_object.className = node_object.className.replace(class_string,"");
}







var scrolling_step=0;
var contents_node = document.getElementsByClassName("ul_contents")[0];
/* contents_node.scrollTop = contents_node.scrollTop + 100;
console.log(contents_node.innerHTML)
console.log(contents_node.scrollTop) */

var title_list = contents_node.getElementsByTagName('a');
console.log(title_list);
var id_list = ["begin","overview","contents","process","characters","main_character","other_character","appreciation","content_thought","art","review","chinese","foreigner","influence"];
var contents_view_node = [];
for (let index = 0; index < id_list.length; index++) {
    contents_view_node[index] = document.getElementById(id_list[index]);
}
/* var test_view_node = document.getElementById("influence") */

var current_title = 0;
function Client_Rect_Setclass(element_node,top_len){
    var client_Rect = element_node.getBoundingClientRect();
    console.log(client_Rect);
    console.log(client_Rect.top);
    console.log(top_len);
    if(client_Rect.top <= top_len){
        console.log(title_list[13].className);
        if(title_list[13].className.indexOf("ul_background") === -1){
        set_class(title_list[13],"ul_background");
        }
    }
    else{
        unset_class(title_list[13],"ul_background");
    }
}
function Set_Current_Title(element_node,top_len,index){
    var client_Rect = element_node.getBoundingClientRect();
    if(client_Rect.top <= top_len){
        current_title = index;
    }
}
function Set_Current_Class(){
    for (let index = 0; index < title_list.length; index++) {
        if(index !== current_title){
            if(title_list[index].className.indexOf("ul_background")){
                unset_class(title_list[index],"ul_background");
            }
        }
        if(index === current_title){
            if(title_list[index].className.indexOf("ul_background") === -1){
                set_class(title_list[index],"ul_background");
            }
        }
    }
}
function contents_class(){
    for (let index = 0; index < contents_view_node.length; index++) {
        Set_Current_Title(contents_view_node[index],65,index);
    }
    Set_Current_Class();
}

window.addEventListener("scroll",function(){
    contents_class();
});