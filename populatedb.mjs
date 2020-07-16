import fetch from "./node_modules/node-fetch/lib/index.js"
import {createuser} from "./createuser.mjs"

for (let i = 0; i < 10; i++) {
const user = {name: `${createuser()}`};  
console.log("user", user); 
fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        cache: 'no-cache'
       
    })
}
    