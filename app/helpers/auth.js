export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: 'Rob b',
      avatar: 'somepic',
      uid: 'xx456903jdjnspoi'
    }), 2000)
  })
}

export function checkIfAuthed (store) {
  return store.getState().users.get('isAuthed') === true
}

export function logout () {
  console.log('Logged Out!')
}
