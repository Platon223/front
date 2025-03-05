const socket = io('https://store-7.onrender.com');

document.querySelector('.dash').innerHTML = localStorage.getItem('dash-name');
document.querySelector('.next').innerHTML = localStorage.getItem('next');


socket.on('see-accounts', data => {
    console.log(data);
})


socket.on('test', data => {
    console.log(data);
})

socket.on('launch-accounts', usernames => {
    console.log(usernames);
})

function noInp() {
    localStorage.setItem('th-name', 'there');
}



function check() {

    const name = document.querySelector('.username').value;

   
    socket.on('launch-accounts', (usernames) => {
        console.log(usernames);

      

        let nameInUse = false;
        usernames.forEach(ur => {
            if (ur.nm === name) {
                nameInUse = true;
            }
        });

    

        if (nameInUse) {
            console.log('This name is already in use.');
            localStorage.setItem('next', '');
            document.querySelector('.next').innerHTML = "";
            location.reload();
        } else {
            console.log('You are good to go.');

            const loged = true;

            const user = { nm: name, loged: loged };
            socket.emit('send-acc', user);

            if(name !== localStorage.getItem('dash-name')) {
                console.log('hello');
                const accName = localStorage.getItem('dash-name');
                socket.emit('delete-acc', accName);
            } 


            const dashBoard = name;
            localStorage.setItem('dash-name', dashBoard);

       

            document.querySelector('.dash').innerHTML = localStorage.getItem('dash-name');
            const nextBut = `<a href="js-practice.html"><button onclick="localStorage.removeItem('th-name');">Next</button></a>`;
            localStorage.setItem('next', nextBut);
            document.querySelector('.next').innerHTML = `<a href="js-practice.html"><button onclick="localStorage.removeItem('th-name');">Next</button></a>`;
            location.reload();

        }
        

    });
  


    socket.emit('request-accounts');
}
