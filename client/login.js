const socket = io('https://store-4-rc42.onrender.com');

document.querySelector('.dash').innerHTML = localStorage.getItem('dash-name');


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
    localStorage.setItem('dash-name', 'there');
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
            location.reload();
            console.log('123');
            console.log('123');
            console.log('123');
            console.log('123');
            document.querySelector('.next').innerHTML = `<a href="js.practice.html"><button>Next</button></a>`;
            

        }
        

    });
  


    socket.emit('request-accounts');
}
