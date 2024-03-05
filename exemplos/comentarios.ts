//Errado
function hashIt(data) {
  // A hash
  let hash = 0;

  // Tamanho da string
  const length = data.length;

  // Loop em cada caracter da informação
  for (let i = 0; i < length; i++) {
    // Pega o código do caracter.
    const char = data.charCodeAt(i);
    // Cria a hash
    hash = ((hash << 5) - hash) + char;
    // Converte para um integer 32-bit
    hash &= hash;
  }
}

//Correto

function hashIt2(data) {
  let hash = 0;
  const length = data.length;

  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;

    // Converte para um integer 32-bit
    hash &= hash;
  }
}

//------------------------------------------------------------
// Comentário válido:

/**
 * Esse código foi escrito assim, porque a biblioteca X ainda não suporta a funcionalidade Y
 * Link da issue: https://github.com/author/X/issues/123456
 */


// Comentários não recomendado:

// Essa função soma A com B e retorna o dobro

/**
 * Motivo de não ser recomendado:
 * A função deve ser escrita de maneira que seja simples
 * de entender seu funcionamento
 * Usar os comentários como documentação não é recomendado,
 * pois dificilmente as pessoas vão lembrar de alterar o
 * comentário após realizar alguma alteração ou refatoração
 * na função, resultando em um comentário/documentação
 * desatualizada que possa confundir a próxima pessoa que
 * colocar as mãos nesse código
 */
