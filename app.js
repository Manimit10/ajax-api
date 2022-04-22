document.getElementById('btn').addEventListener('click', loadData);
const output = document.querySelector('#output');

function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);
  // console.log(xhr.status);
  xhr.onload = () => {
    if (xhr.status == 200) {
      console.log(xhr.responseText);
      let user = JSON.parse(xhr.responseText);
      console.log(user.name);
      return (output.innerHTML = `<p>user is: ${user.name}</p><p>email address is: ${user.email}</p>`);
    }
  };
  xhr.send();
}
