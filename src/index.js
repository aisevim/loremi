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
  let textResult = arr.slice(0, count).join(unitMap[unit])

  switch (unit) {
    case 'word':
      textResult = textResult.replace(/\.|,/g, '')
    // eslint-disable-next-line no-fallthrough
    case 'sentence':
      textResult = textResult.replaceAll(suffix, ' ')
      break
  }

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
