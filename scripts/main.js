const imgToChange1=document.getElementById('imgToChange1');
const imgToChange2=document.getElementById('imgToChange2');
const imgToChange3=document.getElementById('imgToChange3');
const keyWords1=document.getElementById('keyWords1');
const keyWords2=document.getElementById('keyWords2');
const keyWords3=document.getElementById('keyWords3');

imgToChange1.addEventListener('click',()=>{
    imgToChange1.style.outline='10px outset #ffffff';
    keyWords1.style.fontSize='20px';
    keyWords1.style.fontWeight='800';
    keyWords1.style.textDecoration='underline';
    keyWords1.style.textDecorationStyle='double';
}
)
imgToChange2.addEventListener('click',()=>{
    imgToChange2.style.outline='10px outset #ffffff';
    keyWords2.style.fontSize='20px';
    keyWords2.style.fontWeight='800';
    keyWords2.style.textDecoration='underline';
    keyWords2.style.textDecorationStyle='double';
})
imgToChange3.addEventListener('click',()=>{
    imgToChange3.style.outline='10px outset #ffffff';
    keyWords3.style.fontSize='20px';
    keyWords3.style.fontWeight='800';
    keyWords3.style.textDecoration='underline';
    keyWords3.style.textDecorationStyle='double';
})