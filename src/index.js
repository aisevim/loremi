import { join } from 'node:path'

const dir = process.cwd()
const langsDir = 'src/langs'

export async function getLangText(lang) {
  return import(`${ join(dir, langsDir, lang) }.js`)
}

export async function getLoremi(options = {}) {
  const {
    lang = 'lorem',
    suffix = '\n',
    unit = 'sentence',
    count = 1,
  } = options

  const originalTextByLang = await getLangText(lang) || {}
  const originalText = originalTextByLang.getText({
    suffix,
  })
  const unitMap = {
    word: ' ',
    sentence: '.',
    paragraph: suffix,
  }
  const arr = originalText.split(unitMap[unit])
  const text = arr.slice(0, count).join(unitMap[unit])

  return text
}
