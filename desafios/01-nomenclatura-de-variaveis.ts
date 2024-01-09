// Nomenclatura de variáveis

const categoriesList = [
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
  const usernameGithub = String(req.query.username)

  if (!usernameGithub) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const responseUserGitHubWithUsername = await fetch(`https://api.github.com/users/${usernameGithub}`);

  if (responseUserGitHubWithUsername.status === 404) {
    return res.status(400).json({
      message: `User with username "${usernameGithub}" not found`
    })
  }

  const userGitHubInformations = await responseUserGitHubWithUsername.json()

  const orderList = categoriesList.sort((a, b) =>  b.followers - a.followers);

  const category = orderList.find(i => userGitHubInformations.followers > i.followers)

  const result = {
    usernameGithub,
    category: category.title
  }

  return result
}

getData({ query: {
  username: 'josepholiveira'
}}, {})
