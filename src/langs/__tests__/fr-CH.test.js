import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CH',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"Le"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CH',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se lève sur Genève, et les premiers rayons de soleil illuminent le Jet d'Eau, emblème de la ville, tandis que les joggeurs font leur tour habituel autour du Lac Léman"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CH',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se lève sur Genève, et les premiers rayons de soleil illuminent le Jet d'Eau, emblème de la ville, tandis que les joggeurs font leur tour habituel autour du Lac Léman."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CH',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se lève sur Genève et les premiers rayons de soleil illuminent le Jet d'Eau emblème de la ville tandis que les joggeurs font leur tour habituel autour du Lac Léman À Lausanne les étudiants se dirigent vers l'Université de Lausanne et l'EPFL leurs sacs chargés de livres et de laptops prêts pour une journée"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CH',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se lève sur Genève, et les premiers rayons de soleil illuminent le Jet d'Eau, emblème de la ville, tandis que les joggeurs font leur tour habituel autour du Lac Léman. À Lausanne, les étudiants se dirigent vers l'Université de Lausanne et l'EPFL, leurs sacs chargés de livres et de laptops, prêts pour une journée d'études et de recherche. Dans les rues de Neuchâtel, les horlogers se rendent à leur travail, héritiers d'une tradition de précision et d'innovation qui fait la renommée de la Suisse dans le monde entier. À Berne, le marché hebdomadaire bat son plein, les stands débordant de fromages locaux, de chocolats suisses et de produits frais. Les résidents et les touristes se mêlent, appréciant les saveurs locales. Les tramways de Zurich glissent silencieusement le long des voies, transportant passagers et pendulaires à travers la ville financière, réputée pour son dynamisme économique et sa qualité de vie. À Bâle, les visiteurs du monde entier se pressent au Musée d'Art Contemporain, où des expositions de renommée internationale captivent les amateurs d'art et de culture. Dans le canton du Valais, les vignobles s'étendent à perte de vue, les viticulteurs s'affairant à la culture de cépages qui produiront des vins suisses appréciés localement et exportés avec fierté. À Fribourg, le son des cloches de la cathédrale Saint-Nicolas résonne, appelant les fidèles à une messe matinale, tandis que les étudiants de l'université discutent sur les places pavées. Sur les rives du lac de Genève à Montreux, le Festival de Jazz se prépare à accueillir des musiciens de jazz, de blues et de rock du monde entier, transformant la ville en un hub international de la musique pour quelques semaines. Dans le Jura, les randonneurs et les amateurs de sports de plein air explorent les sentiers verdoyants, profitant de la beauté naturelle et de la tranquillité de cette région montagneuse. À Lugano, dans la partie italophone de la Suisse, les cafés débordent de conversations animées en italien, tandis que les bateaux naviguent doucement sur le lac, offrant une vue magnifique sur les Alpes environnantes"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-CH',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "Le matin se lève sur Genève, et les premiers rayons de soleil illuminent le Jet d'Eau, emblème de la ville, tandis que les joggeurs font leur tour habituel autour du Lac Léman.
      À Lausanne, les étudiants se dirigent vers l'Université de Lausanne et l'EPFL, leurs sacs chargés de livres et de laptops, prêts pour une journée d'études et de recherche.
      Dans les rues de Neuchâtel, les horlogers se rendent à leur travail, héritiers d'une tradition de précision et d'innovation qui fait la renommée de la Suisse dans le monde entier.
      À Berne, le marché hebdomadaire bat son plein, les stands débordant de fromages locaux, de chocolats suisses et de produits frais. Les résidents et les touristes se mêlent, appréciant les saveurs locales."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'fr-CH',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
