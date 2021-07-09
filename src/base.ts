const basepath = process.env.PUBLIC_URL

const url = (path = ''): string => {
  return basepath + '/' + path
}

export default url