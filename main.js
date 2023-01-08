setTimeout(() => {mainWrapper.setAttribute('style', 'opacity: 1;transform: rotateX(0deg);');}, 2000);

    
function main(){
    title.textContent = ('Главная');

    let parent = document.querySelector('header');
    let div = document.createElement('div');
    div.className = 'message';
    parent.append(div);
    div.innerHTML = '<span>HELLO♥_WorlD⇓!!!</span>';
    setTimeout(() => div.remove(), 3000);

    document.getElementById('main').style.display = 'inline';
    document.getElementById('aboutMe').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('lesson').style.display = 'none';
}
function aboutMe(){
    title.textContent = ('Обо мне');

    let parent = document.querySelector('header');
    let div = document.createElement('div');
    div.className = 'message';
    parent.append(div);
    div.innerHTML = '<span>ПОЧИТАЙТЕ ОБО МНЕ</span>';
    setTimeout(() => div.remove(), 3000);

    document.getElementById('main').style.display = 'none';
    document.getElementById('aboutMe').style.display = 'inline';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('lesson').style.display = 'none';
} 
function contact(){
    title.textContent = ('Контакты');

    let parent = document.querySelector('header');
    let div = document.createElement('div');
    div.className = 'message';
    parent.append(div);
    div.innerHTML = '<span>ПИШИТЕ, ЗВОНИТЕ...</span>';
    setTimeout(() => div.remove(), 3000);

    document.getElementById('main').style.display = 'none';
    document.getElementById('aboutMe').style.display = 'none';
    document.getElementById('contact').style.display = 'inline';
    document.getElementById('lesson').style.display = 'none';
}
function getRandonInt(min,max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
setInterval(() => {
    
    let x = getRandonInt(0, 360);
    let y = getRandonInt(0, 360);
    let z = getRandonInt(0, 360);
    let r = getRandonInt(0, 255);
    let g = getRandonInt(0, 255);
    let b = getRandonInt(0, 255);
    let a = getRandonInt(0, 10) * .1;
    
    cube.setAttribute(
    'style','transform:rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg);' +
    'color: rgba(' + r + ',' + g + ',' + b +','+ a +');' +
    'text-shadow:' + (5 - x / 36) + 'px ' + (5 - y / 36) + 'px ' + (z / 36) + 'px ' + 'rgba(' + (255 - r) + ',' + (255 - g) + ',' + (255 - b) + ',' + (1 - a) + ');'
    );},1000);

    let clock = document.getElementById('clock');
function Clock() {
    let time = new Date();
    let h = (time.getHours() % 24).toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
}
    if (m.length < 2) {
        m = '0' + m;
}
    if (s.length < 2) {
        s = '0' + s;
}
    let clockString = h + ':' + m + ':' + s;
    
    let col = h < 12 ? h * 21.25 + m * 0.3541666 : 255 - (h * 10.625 + m * 0.17708333);
    cubeWrapper.setAttribute('style', 'background: rgb('+ col + ','+ col +','+ col + ');');

    clock.innerHTML = clockString;
}
setInterval(Clock, 1000);
