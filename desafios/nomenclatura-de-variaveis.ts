// Nomenclatura de variáveis

//Exemplo: nomeclatura_variaveis

const list = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getData(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const findUserByUsernameFromGithubResponse = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (findUserByUsernameFromGithubResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUsersWithUsernameProvided = await findUserByUsernameFromGithubResponse.json()

  const sortedUsersByFollowers = list.sort((a, b) =>  b.followers - a.followers); 

  const firstUserWithHigherFollowersThanProvided = sortedUsersByFollowers.find(i => githubUsersWithUsernameProvided.followers > i.followers)

  const result = {
    github: githubUsersWithUsernameProvided,
    category: firstUserWithHigherFollowersThanProvided
  }

  return result
}

getData({ query: {
  username: 'josepholiveira'
}}, {})