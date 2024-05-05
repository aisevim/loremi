import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'nl-NL',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"De"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'nl-NL',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"De ochtend begint in Nederland, verlicht de straten van Amsterdam en de grachten van Utrecht"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'nl-NL',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"De ochtend begint in Nederland, verlicht de straten van Amsterdam en de grachten van Utrecht. Nederlanders worden wakker met de geur van versgebakken brood en het geluid van fietsbellen op de fietspaden."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'nl-NL',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"De ochtend begint in Nederland verlicht de straten van Amsterdam en de grachten van Utrecht Nederlanders worden wakker met de geur van versgebakken brood en het geluid van fietsbellen op de fietspaden Marie een inwoonster van Rotterdam staat vroeg op om naar de markt te gaan en vers fruit en groenten te kopen voor het ontbijt"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'nl-NL',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"De ochtend begint in Nederland, verlicht de straten van Amsterdam en de grachten van Utrecht. Nederlanders worden wakker met de geur van versgebakken brood en het geluid van fietsbellen op de fietspaden. Marie, een inwoonster van Rotterdam, staat vroeg op om naar de markt te gaan en vers fruit en groenten te kopen voor het ontbijt. De zon schijnt over de molens van Kinderdijk. In de hoofdstad maken studenten zich klaar voor een nieuwe dag aan de Universiteit van Amsterdam, terwijl werknemers hun dag beginnen op de Zuidas. In Friesland werken de boeren op het land en zorgen ze voor de uitgestrekte weilanden vol koeien en schapen. In Groningen genieten de mensen van een kopje koffie op de Grote Markt, terwijl ze uitkijken over de Martinitoren. In Limburg verkennen toeristen de heuvels per fiets en genieten ze van de Limburgse vlaai in gezellige cafés. In Zeeland wandelen vakantiegangers langs de uitgestrekte stranden en genieten ze van de zilte zeelucht. In Gelderland bewonderen bezoekers de middeleeuwse kastelen en landgoederen en maken ze wandelingen door de Veluwe. In Noord-Brabant trekken gezinnen naar de Efteling voor een dag vol plezier en magie. In Overijssel verkennen natuurliefhebbers de waterrijke gebieden per kano of fluisterboot"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'nl-NL',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "De ochtend begint in Nederland, verlicht de straten van Amsterdam en de grachten van Utrecht. Nederlanders worden wakker met de geur van versgebakken brood en het geluid van fietsbellen op de fietspaden.
      Marie, een inwoonster van Rotterdam, staat vroeg op om naar de markt te gaan en vers fruit en groenten te kopen voor het ontbijt. De zon schijnt over de molens van Kinderdijk.
      In de hoofdstad maken studenten zich klaar voor een nieuwe dag aan de Universiteit van Amsterdam, terwijl werknemers hun dag beginnen op de Zuidas.
      In Friesland werken de boeren op het land en zorgen ze voor de uitgestrekte weilanden vol koeien en schapen."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'nl-NL',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
