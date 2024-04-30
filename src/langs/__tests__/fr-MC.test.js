import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-MC',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"Le"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-MC',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"Le soleil se lève sur la Principauté de Monaco, illuminant les yachts luxueux amarrés dans le port de Hercule"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-MC',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"Le soleil se lève sur la Principauté de Monaco, illuminant les yachts luxueux amarrés dans le port de Hercule. Les rues de Monte-Carlo s'éveillent lentement, tandis que les premiers cafés ouvrent leurs portes aux résidents matinaux."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-MC',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"Le soleil se lève sur la Principauté de Monaco illuminant les yachts luxueux amarrés dans le port de Hercule Les rues de Monte-Carlo s'éveillent lentement tandis que les premiers cafés ouvrent leurs portes aux résidents matinaux Sophie résidente de Fontvieille promène son chien le long du port saluant les connaissances qu'elle rencontre Le cadre est idyllique"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-MC',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"Le soleil se lève sur la Principauté de Monaco, illuminant les yachts luxueux amarrés dans le port de Hercule. Les rues de Monte-Carlo s'éveillent lentement, tandis que les premiers cafés ouvrent leurs portes aux résidents matinaux. Sophie, résidente de Fontvieille, promène son chien le long du port, saluant les connaissances qu'elle rencontre. Le cadre est idyllique, avec la mer Méditerranée étincelante comme toile de fond. Les employés de bureau en costume élégant commencent à affluer vers le quartier d'affaires, passant devant les boutiques de luxe et les galeries d'art qui font la renommée de la ville. À La Condamine, le marché ouvre ses portes, offrant des produits frais et des spécialités locales. Les résidents et les chefs des restaurants alentours viennent y faire leur sélection quotidienne. Le Musée océanographique de Monaco s'anime, accueillant écoliers et touristes venus découvrir les merveilles de l'océan. Les guides expliquent la diversité de la faune marine et l'importance de sa conservation. Les rues de Monaco-Ville sont baignées de soleil à midi. Les terrasses des restaurants se remplissent de convives prêts à savourer une cuisine méditerranéenne raffinée, accompagnée de vues imprenables sur la Méditerranée. Dans les jardins de Saint-Martin, des visiteurs admirent les sculptures et les plantes exotiques, profitant de la quiétude de ce havre vert au cœur de la ville"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-MC',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "Le soleil se lève sur la Principauté de Monaco, illuminant les yachts luxueux amarrés dans le port de Hercule. Les rues de Monte-Carlo s'éveillent lentement, tandis que les premiers cafés ouvrent leurs portes aux résidents matinaux.
      Sophie, résidente de Fontvieille, promène son chien le long du port, saluant les connaissances qu'elle rencontre. Le cadre est idyllique, avec la mer Méditerranée étincelante comme toile de fond.
      Les employés de bureau en costume élégant commencent à affluer vers le quartier d'affaires, passant devant les boutiques de luxe et les galeries d'art qui font la renommée de la ville.
      À La Condamine, le marché ouvre ses portes, offrant des produits frais et des spécialités locales. Les résidents et les chefs des restaurants alentours viennent y faire leur sélection quotidienne."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'fr-MC',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
