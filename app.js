document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Coleta os dados do formulário para personalizar a mensagem
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const telefone = document.getElementById('telefone').value;
  const tipoVeiculo = document.getElementById('tipoVeiculo').value;
  const placa = document.getElementById('placa').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const tipoLavagem = document.getElementById('tipoLavagem').value;

  // Monta a mensagem para o WhatsApp
  const mensagemWhats = encodeURIComponent(
    `Olá! Gostaria de confirmar meu agendamento:\n` +
    `Nome: ${nome} ${sobrenome}\n` +
    `Telefone: ${telefone}\n` +
    `Veículo: ${tipoVeiculo} ${placa ? '- Placa: ' + placa : ''}\n` +
    `Data: ${data}\n` +
    `Hora: ${hora}\n` +
    `Tipo de lavagem: ${tipoLavagem}`
  );

  // Link para WhatsApp com mensagem personalizada
  const linkWhats = `https://wa.me/5532984116731?text=${mensagemWhats}`;

  // Exibe a mensagem de confirmação com o link
  document.getElementById('mensagem').innerHTML = `
    <span>Agendamento realizado com sucesso!</span><br>
    <a href="${linkWhats}" target="_blank" style="color:#25d366;font-weight:bold;text-decoration:none;">
      Clique aqui para confirmar ou falar conosco no WhatsApp
    </a>
  `;

  // Opcional: Limpa o formulário após o envio
  document.getElementById('agendamentoForm').reset();
});