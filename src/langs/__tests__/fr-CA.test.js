import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CA',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"Le"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CA',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se lève sur Montréal, laissant entrevoir les premières lueurs sur le Mont-Royal"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CA',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se lève sur Montréal, laissant entrevoir les premières lueurs sur le Mont-Royal. Les rues commencent à s'animer, alors que les cafés ouvrent leurs portes, diffusant l'arôme fort du café frais."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CA',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se lève sur Montréal laissant entrevoir les premières lueurs sur le Mont-Royal Les rues commencent à s'animer alors que les cafés ouvrent leurs portes diffusant l'arôme fort du café frais Lucie ajuste son foulard avant de sortir de chez elle à Québec Elle traverse les rues pavées du Vieux-Québec saluant les commerçants qui mettent"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CA',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se lève sur Montréal, laissant entrevoir les premières lueurs sur le Mont-Royal. Les rues commencent à s'animer, alors que les cafés ouvrent leurs portes, diffusant l'arôme fort du café frais. Lucie ajuste son foulard avant de sortir de chez elle à Québec. Elle traverse les rues pavées du Vieux-Québec, saluant les commerçants qui mettent en place leurs étals pour la journée. Dans le métro de Montréal, les gens se pressent, écouteurs aux oreilles, se préparant pour une nouvelle journée de travail ou d'études. Les rames bondées circulent avec un bruit rythmé sous la ville. À Sherbrooke, les étudiants de l'université se regroupent dans les bibliothèques, se préparant pour les examens ou collaborant sur des projets de groupe. L'atmosphère est studieuse, mais conviviale. Vers midi, les rues de Laval se remplissent. Les food trucks proposent une variété de mets, des poutines croustillantes aux sandwichs au smoked meat, attirant une foule de gourmands. À Gatineau, près du musée canadien de l'histoire, des groupes de touristes et des écoliers écoutent les guides raconter les épisodes marquants de l'histoire canadienne. La rivière des Outaouais offre un arrière-plan pittoresque"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CA',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "Le matin se lève sur Montréal, laissant entrevoir les premières lueurs sur le Mont-Royal. Les rues commencent à s'animer, alors que les cafés ouvrent leurs portes, diffusant l'arôme fort du café frais.
      Lucie ajuste son foulard avant de sortir de chez elle à Québec. Elle traverse les rues pavées du Vieux-Québec, saluant les commerçants qui mettent en place leurs étals pour la journée.
      Dans le métro de Montréal, les gens se pressent, écouteurs aux oreilles, se préparant pour une nouvelle journée de travail ou d'études. Les rames bondées circulent avec un bruit rythmé sous la ville.
      À Sherbrooke, les étudiants de l'université se regroupent dans les bibliothèques, se préparant pour les examens ou collaborant sur des projets de groupe. L'atmosphère est studieuse, mais conviviale."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'fr-CA',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
