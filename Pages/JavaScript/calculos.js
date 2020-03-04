function abrirTbDescritiva() {
    document.getElementById('tabela-descritiva').style.display='block'
    document.getElementById('medida-separatriz').style.display='block'
}
function separatrizSelect() {
    if(document.getElementById('selectSeparatriz').value='0'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if(document.getElementById('selectSeparatriz').value='4'){
        document.getElementById('rg4').style.display='block'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if(document.getElementById('selectSeparatriz').value='5'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='block'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if (document.getElementById('selectSeparatriz').value='10'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='block'
        document.getElementById('rg100').style.display='none'
    }
    if (document.getElementById('selectSeparatriz').value='100'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='block'
    }
}