// let inactivityTime = () => {
//   let time,
//     loader = document.querySelector('.invisible');

//   // сюда можно добавить любой ивент.
//   document.addEventListener('mousemove', resetTimer);
//   document.addEventListener('keypress', resetTimer);

//   function resetTimer() {
//     loader.classList.add('invisible');
//     clearTimeout(time);
//     time = setTimeout(fn, 1000)
//   }

//   function fn() {
//     loader.classList.remove('invisible');
//   }
// };

// document.addEventListener('DOMContentLoaded', () => {
//   inactivityTime();
// });

    var inactivityTime = function () {
    var time;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function notify() {
        if(!confirm('Ви ще тут?')) {
            window.close();
        }
    }
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(notify,30000);
    }
};
