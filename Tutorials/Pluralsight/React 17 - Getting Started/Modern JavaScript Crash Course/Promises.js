const fetchData = () => {
    fetch('https://api.github.com').then(resp => {
        resp.json.then(data => {
            console.log(data);
        });
    });
};


// An alternative to the above
const fetchData2 = async () => {
    const resp = await fetch('https://api.github.com');

    const data = await resp.json();

    console.log(data);
};



fetchData();