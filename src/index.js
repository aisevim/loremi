import { join } from 'node:path'

const dir = process.cwd()
const langsDir = 'src/langs'

export async function getTexts(lang) {
  return import(`${ join(dir, langsDir, lang) }.js`)
}

export async function getLoremi(options = {}) {
  const {
    lang = 'french',
    // count = 1,
    // units = 'sentences',
  } = options

  return getTexts(lang)
}

const result = await getLoremi({
  lang: 'arabe',
})
