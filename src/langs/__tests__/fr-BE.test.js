import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-BE',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"Matinée"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-BE',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"Matinée brumeuse sur Bruxelles, où les premiers rayons du soleil tentent de percer les nuages bas typiques du climat belge"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-BE',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"Matinée brumeuse sur Bruxelles, où les premiers rayons du soleil tentent de percer les nuages bas typiques du climat belge. Les tramways déjà bondés glissent à travers la ville, leurs rails luisant sous l'humidité matinale."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-BE',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"Matinée brumeuse sur Bruxelles où les premiers rayons du soleil tentent de percer les nuages bas typiques du climat belge Les tramways déjà bondés glissent à travers la ville leurs rails luisant sous l'humidité matinale Julien un habitant de Schaerbeek ajuste son écharpe en marchant vers sa boulangerie préférée Il salue le boulanger qui lui prépare"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-BE',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"Matinée brumeuse sur Bruxelles, où les premiers rayons du soleil tentent de percer les nuages bas typiques du climat belge. Les tramways déjà bondés glissent à travers la ville, leurs rails luisant sous l'humidité matinale. Julien, un habitant de Schaerbeek, ajuste son écharpe en marchant vers sa boulangerie préférée. Il salue le boulanger qui lui prépare une couque au chocolat, spécialité sucrée tant appréciée ici. Sur le chemin du travail, il passe devant le Parlement européen, où des groupes de touristes écoutent attentivement leurs guides. Les drapeaux de l'Union européenne flottent fièrement dans la brise légère. À Namur, Élise prépare sa classe pour la journée. Enseignante en primaire, elle organise les activités qui permettront à ses élèves de découvrir les contes folkloriques de Wallonie. À midi, les rues de Liège s'animent. Les odeurs alléchantes de boulets à la liégeoise s'échappent des restaurants locaux. Les gens font la queue pour obtenir leur portion de ces boulettes savoureuses nappées de sirop de Liège. Au même moment, à Gand, une exposition d'art contemporain attire des visiteurs de tout le pays"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-BE',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "Matinée brumeuse sur Bruxelles, où les premiers rayons du soleil tentent de percer les nuages bas typiques du climat belge. Les tramways déjà bondés glissent à travers la ville, leurs rails luisant sous l'humidité matinale.
      Julien, un habitant de Schaerbeek, ajuste son écharpe en marchant vers sa boulangerie préférée. Il salue le boulanger qui lui prépare une couque au chocolat, spécialité sucrée tant appréciée ici.
      Sur le chemin du travail, il passe devant le Parlement européen, où des groupes de touristes écoutent attentivement leurs guides. Les drapeaux de l'Union européenne flottent fièrement dans la brise légère.
      À Namur, Élise prépare sa classe pour la journée. Enseignante en primaire, elle organise les activités qui permettront à ses élèves de découvrir les contes folkloriques de Wallonie."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'fr-BE',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
