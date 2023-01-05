const x = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const randomNumber = Math.random();
        console.log(randomNumber);
        if (randomNumber < 0.5) {
            resolve();
        }
        else {
            reject();
        }
    }, 2000);
});
x.then(function () {
    console.log('Inside resolve');
})
    .catch(function () {
    console.log('inside reject')
})