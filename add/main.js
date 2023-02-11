$(document).ready(function(){
	$('#form_cadastro').submit(function(){
		var $this = $( this );

		var nome = $this.find("input[name='nome']").val(),
			telefone = $this.find("input[name='telefone']").val();

		var tr = '<tr>'+
			'<td>'+nome+'</td>'+
			'<td>'+telefone+'</td>'+
			'</tr>'
		$('#grid').find('tbody').append( tr );

		var hiddens = '<input type="hidden" name="nome[]" value="'+nome+'" />'+
			'<input type="hidden" name="telefone[]" value="'+telefone+'" />';

		$('#form_insert').find('fieldset').append( hiddens );

		return false;
	});
});