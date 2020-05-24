import './style/style'

const noticias = [
  {
    title: 'Titulo Notícia 1',
    kind: 'LIMG',
    description: 'Lorem ipsum 1'
  },
  {
    title: 'Titulo Notícia 2',
    kind: 'TXT',
    description: 'Lorem ipsum 2'
  },
  {
    title: 'Titulo Notícia 3',
    kind: 'TXT',
    description: 'Lorem ipsum 3'
  },
  {
    title: 'Titulo Notícia 4',
    kind: 'LIMG',
    description: 'Lorem ipsum 4'
  },
  {
    title: 'Titulo Notícia 5',
    kind: 'LIMG',
    description: 'Lorem ipsum 5'
  }
]

const divNotices = document.querySelector('#notices')

const requestNotices = async () => {
  try {
    const response = await Promise.resolve(noticias)
    console.log(response)
    handleNotices(response)
  } catch (error) {
    console.log(error)
  }
}

const handleNotices = (noticias) => {
  let newNotices
  const noticeIMG = (noticias[0].kind === 'LIMG') ? noticias.splice(0, 1) : false
  console.log(noticeIMG)
  if (!!noticeIMG) {
    // Renderiza NoticeIMGLarge
    // newNotices = noticias.splice(0, 2)
  }
  newNotices = noticias.splice(0, 2)
  // Array Para primeiro Módulo
  console.log(newNotices)
  divNotices.insertAdjacentHTML('beforeend', `${newNotices.reduce((acc, notice) => {
    return acc += `${notice.title} <br>`
  }, '')}`)
  // Array que sobrou para segunda parte do módulos
  console.log(noticias)
  divNotices.insertAdjacentHTML('beforeend', `${noticias.reduce((acc, notice) => {
    return acc += `${notice.title} <br>`
  }, '')}`)
}

requestNotices()