function getMd(){
    const $main = document.getElementById('main');
    fetch('public/80asv.md')
        .then(res => res.ok ? res.text() : Promise.reject(res))
        .then(text => {
            $main.innerHTML = new showdown.Converter().makeHtml(text);
        })
}

getMd();