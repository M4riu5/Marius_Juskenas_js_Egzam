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
            const infoEl = document.createElement('div')
            infoEl.innerHTML=`
            <div class="card">
              <img
                src="${userObj.avatar_url}"
                alt="Person"
                class="card__image"
              />
              <p class="card__name">${userObj.login}</p>
              <ul class="social-icons">
                <li>
                  <a href="${userObj.html_url}"><i class="fa fa-github"></i></a>
                </li>
              </ul>
             

            </div>

            `
            
            output.append(infoEl)
            
        });
    }
})