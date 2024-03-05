//Errado
function createUserRoute(requestBody) {

  createUserController(requestBody)
}

function createUserController(userData) {
  usersRepository.create(userData)
}

const usersRepository = {
  create(data) {
      const user = createUserOnDatabase()

      return user
  }
}

//Correto
function createUserController(userData) {
  const { name, email, password } = userData

  usersRepository.create({
      name,
      email,
      password
  })
}

function createUserRoute(requestBody, params) {

}

createUserRoute({
  requestBody: { name: "João", email: "joao@email.com", password: "123" },
  params: { id: 1 }
})

createUserRoute({
  params: { id: 1 }
})

const usersRepository = {
  create(data) {
      const user = createUserOnDatabase()

      return {
          user,
      }
  }
}