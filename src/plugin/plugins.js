import Vue from "vue"

export default {
    install(){
        Vue.directive('focus',{
            bind(element,binding){
                element.value = binding.value;
            },
            inserted: function(el,binding){
                console.log(el);
                el.focus();
            }
        })
    }
}