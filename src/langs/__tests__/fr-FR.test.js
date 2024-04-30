import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-FR',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"Le"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-FR',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se levait doucement sur la ville, diffusant une lumière pâle dans les rues encore endormies"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-FR',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se levait doucement sur la ville, diffusant une lumière pâle dans les rues encore endormies. Les premiers bruits du jour commençaient à se faire entendre, un mélange subtil entre le roulement lointain des voitures et le chant des oiseaux qui saluaient l'aube."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-FR',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se levait doucement sur la ville diffusant une lumière pâle dans les rues encore endormies Les premiers bruits du jour commençaient à se faire entendre un mélange subtil entre le roulement lointain des voitures et le chant des oiseaux qui saluaient l'aube Éloïse marchait d'un pas léger son sac à dos oscillant doucement au"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-FR',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"Le matin se levait doucement sur la ville, diffusant une lumière pâle dans les rues encore endormies. Les premiers bruits du jour commençaient à se faire entendre, un mélange subtil entre le roulement lointain des voitures et le chant des oiseaux qui saluaient l'aube. Éloïse marchait d'un pas léger, son sac à dos oscillant doucement au rythme de ses pas. Elle aimait ces moments de calme, où la ville semblait lui appartenir, où chaque recoin lui murmurait des secrets à peine réveillés. La boulangerie du coin de la rue commençait à embaumer le quartier de l'odeur alléchante du pain frais. Le boulanger, derrière sa vitrine embuée, façonnait avec passion ses croissants et baguettes, perpétuant un savoir-faire ancestral. Dans le parc adjacent, quelques joggeurs matinaux profitaient de la fraîcheur de l'air pour faire leur course quotidienne. Leurs foulées régulières créaient une mélodie rythmée, presque hypnotique, qui se fondait dans les murmures de la nature. Au bureau, les collègues d'Éloïse commençaient à arriver, chacun apportant avec lui le récit d'une soirée ou les plans d'un week-end prochain. Les discussions autour de la machine à café étaient un rituel incontournable, un moment de partage avant que la journée ne commence vraiment. La matinée s'écoulait, ponctuée de réunions, de coups de téléphone et de frappes sur les claviers. L'ambiance était studieuse, chacun concentré sur ses projets, mais toujours avec une oreille attentive aux besoins des autres"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'fr-FR',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "Le matin se levait doucement sur la ville, diffusant une lumière pâle dans les rues encore endormies. Les premiers bruits du jour commençaient à se faire entendre, un mélange subtil entre le roulement lointain des voitures et le chant des oiseaux qui saluaient l'aube.
      Éloïse marchait d'un pas léger, son sac à dos oscillant doucement au rythme de ses pas. Elle aimait ces moments de calme, où la ville semblait lui appartenir, où chaque recoin lui murmurait des secrets à peine réveillés.
      La boulangerie du coin de la rue commençait à embaumer le quartier de l'odeur alléchante du pain frais. Le boulanger, derrière sa vitrine embuée, façonnait avec passion ses croissants et baguettes, perpétuant un savoir-faire ancestral.
      Dans le parc adjacent, quelques joggeurs matinaux profitaient de la fraîcheur de l'air pour faire leur course quotidienne. Leurs foulées régulières créaient une mélodie rythmée, presque hypnotique, qui se fondait dans les murmures de la nature."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'fr-FR',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
