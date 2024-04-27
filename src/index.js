import { join } from 'node:path'

const dir = process.cwd()
const langsDir = 'src/langs'

export async function getLangText(lang) {
  return import(`${ join(dir, langsDir, lang) }.js`)
}

export function getTextMiddleware({ text, unit, suffix, count }) {
  const unitMap = {
    word: ' ',
    sentence: '.',
    paragraph: suffix,
  }
  const arr = text.split(unitMap[unit])
  const textResult = arr.slice(0, count).join(unitMap[unit])

  return textResult
}

export async function getLoremi(options = {}) {
  const {
    lang = 'lorem',
    suffix = '\n',
    unit = 'sentence',
    count = 1,
  } = options

  const rawTextByLang = await getLangText(lang) || {}
  const rawText = rawTextByLang.getText({ suffix })
  const text = getTextMiddleware({
    text: rawText,
    unit,
    suffix,
    count,
  })

  return text
}
