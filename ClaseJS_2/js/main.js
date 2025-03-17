
const bAlerta=document.getElementById("boton");
const t_a=document.getElementById("a");
const t_b=document.getElementById("b");
const t_c=document.getElementById("c");


bAlerta.addEventListener("click",()=>{
    t_c.value= Number(t_a.value)+Number(t_b.value);
});

