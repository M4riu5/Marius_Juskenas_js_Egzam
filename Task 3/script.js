/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output = document.getElementById('output');
const btnEl = document.getElementById('btn');
const shopUsersMessage = document.getElementById('message');

btnEl.addEventListener('click' , () => {
    async function getData() {
        const resp = await fetch(ENDPOINT)
        const data = await resp.json()
        console.log('data ---->', data);
        generateUsers(data)
    }
    getData()

    output.innerHTML=''
    function generateUsers(userObj) {
        shopUsersMessage.remove()
        userObj.forEach(userObj => {
            const infoEl = document.createElement('html')
            infoEl.innerHTML=`
            <div class="info">
                  <div class="userinfo">
                    <h2 class="login">Login : ${userObj.login}</h2>
                    <h3>
                      <i class="fa fa-github" aria-hidden="true"></i>
                      ${userObj.html_url}
                    </h3>
                    <h4>Account Type: ${userObj.type}</h4>
                  </div>
                  <img src="${userObj.avatar_url}" alt="" />
                </div>
            `
            
            output.append(infoEl)
            
        });
    }
})