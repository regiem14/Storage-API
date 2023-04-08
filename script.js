// console.log('h1');

/*window.alert('ok');

alert('what is up? This is similar to what happens when we use the window.alert');
*/

/*
localStorage.setItem('name', 'Regie');
// localStorage.removeItem('name');

localStorage.setItem('name', 'Amy');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name', 'Teemo');
sessionStorage.setItem('name', 'Grey');
// sessionStorage.removeItem('name', 'Grey');

console.log(sessionStorage.getItem('name'))*/


// document.cookie = 'firstName=Regie; expire=Sun, 09 Apr 2023 12:00:00 UTC; path=/';


document.cookie = 'firstName=Syndra; expire=' + new Date(9999,0, 1).toUTCString();

console.group(document.cookie);