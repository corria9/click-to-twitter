const input = document.querySelector('textarea');
const btn = document.querySelector('.btn');
const limit = document.querySelector('.limit');

let max = 50;

const updateLimit = () => {
    limit.textContent = max;
    input.addEventListener('input', ()=> {
        let inputLength = input.value.length;
        limit.textContent = max - inputLength;
        if (inputLength > max) {
            btn.disabled = true;
            limit.getElementsByClassName.color = 'red';
        } else {
            btn.disabled = false;
            limit.getElementsByClassName.color = 'black';
        }
    });
};
updateLimit();

btn.addEventListener('click', (e)=> {
    e.preventDefault();
    tweet();
});

const tweet = () => {
    let tweetInput = 'https://twitter.com/intent/tweet?text=';
    window.open(`${tweetInput}${input.value}`);
};