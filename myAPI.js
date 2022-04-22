// console.log('i am api');
const api = document.getElementById('getapi').addEventListener('click', loadGithub);
let out = document.getElementById('api');
function loadGithub() {
  //   console.log('clicked');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  //   console.log(xhr.responseText);
  xhr.onload = () => {
    if (xhr.status == 200) {
      let users = JSON.parse(xhr.responseText);
      //   console.log(xhr.responseText);

      let output = '';
      for (const user in users) {
        if (Object.hasOwnProperty.call(users, user)) {
          output += `<img src="${users[user].avatar_url}" />`;
          console.log(users[user]);
        }
      }
      out.innerHTML = output;
    }
  };
  xhr.send();
}
