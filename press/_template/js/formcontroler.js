function Mudarestado(el) {
    
    var ele = document.getElementById(el);
    var display = ele.style.display;
    
    ele.style.display = display == 'none' ? 'block' : 'none';
}