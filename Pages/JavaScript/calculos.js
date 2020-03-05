
$(document).ready(function () {
    $('#options-group').change(function (ev) {
        var target = ev.target;
        if (target.id === 'option2') {
            $('#margemErro').removeClass('invisible')
        } else {
            $('#margemErro').addClass('invisible')
        }
    })
})

function abrirTbDescritiva() {

    // Caso amostra
    var nomeVariavel = $('input[name="nomeVariavel"]');
    var populacao = $('input[name="dadosInp"][0]');
    var populacaoArray = populacao.value.split(';');

    var ordemVariavel = $('input[name="ordemVariavel"]');
    var tipoVariavel = $('input[name="options"]:checked')[0];

    if (tipoVariavel.id === 'option2') {
        var margemErro = $('#margemErro');

        var n0 = 1/(margemErro * margemErro);
        var n = (populacaoArray.length * n0) / (populacaoArray + n0)
    }
    document.getElementById('tabela-descritiva').style.display='block'
    document.getElementById('medida-separatriz').style.display='block'
}
function separatrizSelect() {
    if(document.getElementById('selectSeparatriz').value =='0'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if(document.getElementById('selectSeparatriz').value =='4'){
        document.getElementById('rg4').style.display='block'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if(document.getElementById('selectSeparatriz').value =='5'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='block'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if (document.getElementById('selectSeparatriz').value =='10'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='block'
        document.getElementById('rg100').style.display='none'
    }
    if (document.getElementById('selectSeparatriz').value =='100'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='block'
    }
}
