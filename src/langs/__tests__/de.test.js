import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'de-DE',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"Der"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'de-DE',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"Der Morgen bricht in Deutschland an, und die Straßen von Berlin erwachen zum Leben"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'de-DE',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"Der Morgen bricht in Deutschland an, und die Straßen von Berlin erwachen zum Leben. Die Deutschen wachen auf mit dem Geruch von frischem Brot und dem Klang der Vögel in den Parks."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'de-DE',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"Der Morgen bricht in Deutschland an und die Straßen von Berlin erwachen zum Leben Die Deutschen wachen auf mit dem Geruch von frischem Brot und dem Klang der Vögel in den Parks Maria eine Einwohnerin von München steht früh auf um zum Markt zu gehen und frisches Obst und Gemüse für das Frühstück zu kaufen Die"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'de-DE',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"Der Morgen bricht in Deutschland an, und die Straßen von Berlin erwachen zum Leben. Die Deutschen wachen auf mit dem Geruch von frischem Brot und dem Klang der Vögel in den Parks. Maria, eine Einwohnerin von München, steht früh auf, um zum Markt zu gehen und frisches Obst und Gemüse für das Frühstück zu kaufen. Die Sonne strahlt über den bayerischen Alpen. In Frankfurt machen sich die Pendler auf den Weg zur Arbeit, während in Hamburg die Hafenarbeiter schon seit den frühen Morgenstunden beschäftigt sind. Im Schwarzwald arbeiten die Forstarbeiter daran, Holz zu fällen und die reiche Natur des Gebiets zu erhalten. In Köln treffen sich die Menschen in den Straßencafés, um ihren ersten Kaffee des Tages zu genießen und die Zeitung zu lesen. In der Pfalz laden die Weinberge zum Verkosten ein, während die Winzer ihre Trauben für den neuen Jahrgang ernten. In Dresden bewundern die Besucher die prächtige Architektur der Altstadt und besuchen die berühmte Semperoper. In Schleswig-Holstein machen sich die Fischer auf den Weg hinaus auf die Nordsee, um den Fang des Tages einzubringen. In Stuttgart arbeiten die Ingenieure und Techniker in den Automobilfabriken an der neuesten Generation von Fahrzeugen. In Nürnberg bereiten sich die Bäcker auf einen weiteren geschäftigen Tag vor, indem sie frische Brezeln und Brote backen"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'de-DE',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "Der Morgen bricht in Deutschland an, und die Straßen von Berlin erwachen zum Leben. Die Deutschen wachen auf mit dem Geruch von frischem Brot und dem Klang der Vögel in den Parks.
      Maria, eine Einwohnerin von München, steht früh auf, um zum Markt zu gehen und frisches Obst und Gemüse für das Frühstück zu kaufen. Die Sonne strahlt über den bayerischen Alpen.
      In Frankfurt machen sich die Pendler auf den Weg zur Arbeit, während in Hamburg die Hafenarbeiter schon seit den frühen Morgenstunden beschäftigt sind.
      Im Schwarzwald arbeiten die Forstarbeiter daran, Holz zu fällen und die reiche Natur des Gebiets zu erhalten."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'de-DE',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
