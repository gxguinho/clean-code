// O código em que você vai praticar esses conceitos contém funções que lidam com a atualização
// dos dados de um usuário a partir de uma rota que receberá os seguintes dados:

// `body: { name, email, password }`

// `params: { id }`

// Exemplo: parametros_desestruturacao

function updateUserRoute(
  body: { name: string; email: string; password: string },
  params: { id: string }
) {
  updateUserController(body, params);
}

function updateUserController(
  data: { name: string; email: string; password: string },
  params: { id: string }
) {
  userRepository.update(data, params);
}

const userRepository = {
  update: (data: { name: string; email: string; password: string },
    params: { id: string }) => {},
};
