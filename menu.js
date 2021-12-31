


/*------------------------------ food category ------------------------------*/

function listpizza(){
    document.getElementById("menu_pizza").style.display='flex';
        document.getElementById("menu_tacos").style.display='none';
        document.getElementById("menu_burger").style.display='none';
        document.getElementById("menu_pasticcio").style.display='none';
        document.getElementById("menu_salade").style.display='none';
        document.getElementById("menu_panini").style.display='none';
    }
function listtacos(){
    document.getElementById("menu_tacos").style.display='flex';
        document.getElementById("menu_pizza").style.display='none';
        document.getElementById("menu_burger").style.display='none';
        document.getElementById("menu_pasticcio").style.display='none';
        document.getElementById("menu_salade").style.display='none';
        document.getElementById("menu_panini").style.display='none';
    }
function listburger(){
    document.getElementById("menu_burger").style.display='flex';
        document.getElementById("menu_tacos").style.display='none';
        document.getElementById("menu_pizza").style.display='none';
        document.getElementById("menu_pasticcio").style.display='none';
        document.getElementById("menu_salade").style.display='none';
        document.getElementById("menu_panini").style.display='none';
}
function listpanini(){
    document.getElementById("menu_panini").style.display='flex';
        document.getElementById("menu_tacos").style.display='none';
        document.getElementById("menu_pizza").style.display='none';
        document.getElementById("menu_burger").style.display='none';
        document.getElementById("menu_pasticcio").style.display='none';
        document.getElementById("menu_salade").style.display='none';
}
function listpasticcio(){
    document.getElementById("menu_pasticcio").style.display='flex';
        document.getElementById("menu_tacos").style.display='none';
        document.getElementById("menu_pizza").style.display='none';
        document.getElementById("menu_salade").style.display='none';
        document.getElementById("menu_panini").style.display='none';
        document.getElementById("menu_burger").style.display='none';
}
function listsalade(){
    document.getElementById("menu_salade").style.display='flex';
        document.getElementById("menu_tacos").style.display='none';
        document.getElementById("menu_pizza").style.display='none';
        document.getElementById("menu_pasticcio").style.display='none';
        document.getElementById("menu_panini").style.display='none';
        document.getElementById("menu_burger").style.display='none';
}