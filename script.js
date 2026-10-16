"use strict";

// Número do WhatsApp da confeiteira, com código do país e DDD.
// Edite esta constante caso o número mude.
const NUMERO_WHATSAPP = "5532999879258";

// Mensagem padrão enviada ao clicar em um bolo.
// O nome do sabor será acrescentado automaticamente.
const MENSAGEM_BASE =
  "Olá, Layane! Vi seu catálogo e quero pedir um mini bolo vulcão de {SABOR}. Ainda tem desse sabor disponível? Qual o valor?";

// Seleciona todas as áreas clicáveis dos bolos.
const bolos = document.querySelectorAll(".bolo-area");

// Adiciona o evento de clique a cada bolo.
bolos.forEach((bolo) => {
  bolo.addEventListener("click", (evento) => {
    // Evita que o link navegue para o início da página.
    evento.preventDefault();

    // Obtém o nome do sabor definido no HTML.
    const sabor = bolo.dataset.sabor;

    // Substitui {SABOR} pelo nome do bolo escolhido.
    const mensagem = MENSAGEM_BASE.replace("{SABOR}", sabor);

    // Codifica a mensagem para utilizá-la na URL do WhatsApp.
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Monta o endereço do WhatsApp com o número e a mensagem.
    const urlWhatsApp =
      `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;

    // Abre a conversa em uma nova aba.
    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
  });
});