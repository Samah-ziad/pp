fetch('http://localhost:3000/user?name="samah"',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})



fetch('http://localhost:3000/user/samah',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({massage: "hello everyone", name: 'samah'}),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

fetch('http://localhost:3000/user/samah',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})