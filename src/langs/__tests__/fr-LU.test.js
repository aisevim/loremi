import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-LU',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"La"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-LU',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"La journée commence dans le calme des rues de Luxembourg-ville, où le doux chant des oiseaux dans le parc de la Pétrusse accompagne les promeneurs matinaux"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-LU',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"La journée commence dans le calme des rues de Luxembourg-ville, où le doux chant des oiseaux dans le parc de la Pétrusse accompagne les promeneurs matinaux. Les cafés ouvrent leurs portes, laissant échapper des effluves de café fraîchement moulu."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-LU',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"La journée commence dans le calme des rues de Luxembourg-ville où le doux chant des oiseaux dans le parc de la Pétrusse accompagne les promeneurs matinaux Les cafés ouvrent leurs portes laissant échapper des effluves de café fraîchement moulu Jean un résident de Dudelange prend le bus pour se rendre au travail Les transports en commun"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-LU',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"La journée commence dans le calme des rues de Luxembourg-ville, où le doux chant des oiseaux dans le parc de la Pétrusse accompagne les promeneurs matinaux. Les cafés ouvrent leurs portes, laissant échapper des effluves de café fraîchement moulu. Jean, un résident de Dudelange, prend le bus pour se rendre au travail. Les transports en commun, bien organisés, traversent la ville et ses alentours, reflétant l'engagement du pays pour la durabilité et l'accessibilité. À Esch-sur-Alzette, des ouvriers s'affairent sur un nouveau projet de développement urbain. Cette ville, anciennement industrielle, se transforme peu à peu en un hub pour l'art et la culture. Dans les écoles de Diekirch, les enfants apprennent à jongler entre plusieurs langues, une compétence essentielle dans ce pays multilingue. Le luxembourgeois, le français, et l'allemand résonnent dans les couloirs animés. Vers midi, les résidents de Grevenmacher se retrouvent dans les bistrots locaux pour un repas rapide. Les spécialités locales, comme les quetschentaart, sont à l'honneur, témoignant de la richesse gastronomique du pays. À Remich, le long de la Moselle, des touristes dégustent des vins produits localement. Les vignobles en terrasses offrent un paysage spectaculaire et une pause idéale pour les amateurs de vin"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-LU',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "La journée commence dans le calme des rues de Luxembourg-ville, où le doux chant des oiseaux dans le parc de la Pétrusse accompagne les promeneurs matinaux. Les cafés ouvrent leurs portes, laissant échapper des effluves de café fraîchement moulu.
      Jean, un résident de Dudelange, prend le bus pour se rendre au travail. Les transports en commun, bien organisés, traversent la ville et ses alentours, reflétant l'engagement du pays pour la durabilité et l'accessibilité.
      À Esch-sur-Alzette, des ouvriers s'affairent sur un nouveau projet de développement urbain. Cette ville, anciennement industrielle, se transforme peu à peu en un hub pour l'art et la culture.
      Dans les écoles de Diekirch, les enfants apprennent à jongler entre plusieurs langues, une compétence essentielle dans ce pays multilingue. Le luxembourgeois, le français, et l'allemand résonnent dans les couloirs animés."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'fr-LU',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
