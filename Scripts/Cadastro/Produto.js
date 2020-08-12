function set_dados_form(dados) {
    $('#id_cadastro').val(dados.Id);
    $('#txt_nome').val(dados.Nome);
    $('#txt_preco_venda').val(dados.PrecoVenda);
    $('#txt_quant_estoque').val(dados.QuantEstoque);
    $('#cbx_ativo').prop('checked', dados.Ativo);
}

function set_focus_form() {
    var alterando = (parseInt($('#id_cadastro').val()) > 0);
    $('#txt_quant_estoque').attr('readonly', alterando);
    $('#txt_codigo').focus();
}

function get_dados_inclusao() {
    return {
        Id: 0,
        Nome: '',
        PrecoVenda: 0,
        QuantEstoque: 0,
        Ativo: true
    };
}

function get_dados_form() {
    return {
        Id: $('#id_cadastro').val(),
        Nome: $('#txt_nome').val(),
        PrecoVenda: $('#txt_preco_venda').val(),
        QuantEstoque: $('#txt_quant_estoque').val(),
        Ativo: $('#cbx_ativo').prop('checked')
    };
}

function preencher_linha_grid(param, linha) {
    linha
        .eq(0).html(param.Codigo).end()
        .eq(1).html(param.Nome).end()
        .eq(2).html(param.QuantEstoque).end()
        .eq(3).html(param.Ativo ? 'SIM' : 'NÃO');
}

$(document)
    .ready(function () {
        $('#txt_preco_venda').mask('#.##0,00', { reverse: true });
        $('#txt_quant_estoque').mask('00000');
    });