//Exemplo: comentarios

// Essa função tem o objetivo de registrar um novo usuário no banco.
async function registerUser({ email, name, avatar }) {

  if (!avatar) return { error: 'avatar is required' }

  if(!name) return { error: 'name is required' }

  const userWithEmailAlreadyExists = !!getUserByEmail(email)

  if (userWithEmailAlreadyExists) return { error: 'email already used' }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/aaaa/example-repository/issues/1
  const avatar2 = convertImageToJPG(avatar)

  const user = await createUser({ email, name, avatar: avatar2 })

  return { user }
}