import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'pt-PT',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"A"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'pt-PT',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"A manhã chega a Portugal, iluminando as ruas de Lisboa e as margens do Rio Douro no Porto"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'pt-PT',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"A manhã chega a Portugal, iluminando as ruas de Lisboa e as margens do Rio Douro no Porto. Os portugueses acordam com o aroma do café e o som das gaivotas no mar."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'pt-PT',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"A manhã chega a Portugal iluminando as ruas de Lisboa e as margens do Rio Douro no Porto Os portugueses acordam com o aroma do café e o som das gaivotas no mar Maria uma residente do Porto levanta-se cedo para ir ao mercado comprar pão fresco e frutas para o pequeno-almoço O sol brilha sobre"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'pt-PT',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"A manhã chega a Portugal, iluminando as ruas de Lisboa e as margens do Rio Douro no Porto. Os portugueses acordam com o aroma do café e o som das gaivotas no mar. Maria, uma residente do Porto, levanta-se cedo para ir ao mercado comprar pão fresco e frutas para o pequeno-almoço. O sol brilha sobre as colinas verdejantes do Minho. Na capital, os estudantes preparam-se para mais um dia de aulas na Universidade de Lisboa, enquanto os trabalhadores começam a sua jornada nos escritórios do Chiado. Na região do Alentejo, os agricultores dedicam-se à colheita do trigo e das uvas, contribuindo para a rica tradição agrícola do país. No Algarve, os turistas desfrutam das praias de areia dourada e das águas cristalinas do Atlântico. Na ilha da Madeira, os viajantes exploram as levadas e os miradouros, admirando as vistas panorâmicas sobre o oceano. Nos Açores, os pescadores partem em busca do peixe fresco do dia, enquanto os turistas exploram as maravilhas naturais das lagoas e crateras. Na região do Douro, os enólogos trabalham nas vinhas em socalcos, produzindo o famoso vinho do Porto. Em Coimbra, os estudantes passeiam pelos jardins da universidade, imersos na atmosfera histórica da cidade. Em Évora, os visitantes maravilham-se com os monumentos megalíticos e a arquitetura medieval, Património Mundial da UNESCO"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'pt-PT',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "A manhã chega a Portugal, iluminando as ruas de Lisboa e as margens do Rio Douro no Porto. Os portugueses acordam com o aroma do café e o som das gaivotas no mar.
      Maria, uma residente do Porto, levanta-se cedo para ir ao mercado comprar pão fresco e frutas para o pequeno-almoço. O sol brilha sobre as colinas verdejantes do Minho.
      Na capital, os estudantes preparam-se para mais um dia de aulas na Universidade de Lisboa, enquanto os trabalhadores começam a sua jornada nos escritórios do Chiado.
      Na região do Alentejo, os agricultores dedicam-se à colheita do trigo e das uvas, contribuindo para a rica tradição agrícola do país."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'pt-PT',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
