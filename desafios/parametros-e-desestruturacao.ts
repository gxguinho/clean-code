// O código em que você vai praticar esses conceitos contém funções que lidam com a atualização 
// dos dados de um usuário a partir de uma rota que receberá os seguintes dados:

// `body: { name, email, password }`

// `params: { id }`

// Exemplo: parametros_desestruturacao

function updateUserRoute(body, params) {
  updateUserController(body, params)
}

function updateUserController(data, params) {
  userRepository.update(data, params)
}

const userRepository = {
  update: (data, params) => {},
}