new Promise((resolve, reject) =>{
    //immediately resolve it
    resolve(12);
}).then(value => {
    alert(value);
    return (value+3);
}).then(value =>{
    alert(value);
    return(value+3);
})