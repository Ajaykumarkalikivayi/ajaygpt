function incr()
{
    const c = document.
    getElementById('count')
    let x = c.textContent;
    x++;
    c.textContent = x;
    document.body.style.backgroundColor = "chartreuse";
}
function decr()
{
    const c = document.
    getElementById('count')
    let x = c.textContent;
    x--;
    c.textContent = x;
    document.body.style.backgroundColor = "yellow";
}
function reset()
{
    const c = document.
    getElementById('count')    
    c.textContent = 0;
    document.body.style.backgroundColor = "red";
}