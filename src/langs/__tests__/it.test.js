import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'it-IT',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"La"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'it-IT',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"La mattina si sveglia lentamente sulla città di Roma, con i primi raggi del sole che illuminano i monumenti antichi"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'it-IT',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"La mattina si sveglia lentamente sulla città di Roma, con i primi raggi del sole che illuminano i monumenti antichi. Le strade si animano con il traffico dei pendolari e il vociare dei mercati."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'it-IT',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"La mattina si sveglia lentamente sulla città di Roma con i primi raggi del sole che illuminano i monumenti antichi Le strade si animano con il traffico dei pendolari e il vociare dei mercati Giulia una residente di Milano si prepara per la giornata gustando un caffè espresso mentre sfoglia il giornale locale Poi si avvia"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'it-IT',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"La mattina si sveglia lentamente sulla città di Roma, con i primi raggi del sole che illuminano i monumenti antichi. Le strade si animano con il traffico dei pendolari e il vociare dei mercati. Giulia, una residente di Milano, si prepara per la giornata, gustando un caffè espresso mentre sfoglia il giornale locale. Poi si avvia verso l'ufficio, pronta per una giornata di lavoro. A Napoli, i venditori ambulanti montano i loro bancarelle lungo il lungomare, offrendo frutta fresca e specialità locali ai passanti. A Firenze, i turisti affollano le piazze, ammirando i capolavori d'arte rinascimentale e facendo foto ricordo. A Venezia, i gondolieri iniziano le loro giornate di lavoro, trasportando i visitatori lungo i canali pittoreschi della città. A Torino, gli studenti universitari si dirigono verso le aule per le lezioni del mattino, discutendo animatamente di politica e cultura. A Palermo, le strade si riempiono di profumi deliziosi provenienti dalle trattorie locali, dove si preparano le specialità siciliane. Nel cuore delle Dolomiti, gli escursionisti si avventurano sui sentieri montani, godendo dei panorami mozzafiato e dell'aria fresca della montagna. A Bologna, i ciclisti si muovono agilmente tra le strade strette del centro storico, approfittando della rete ciclabile ben sviluppata. A Catania, la vita notturna è vivace, con i locali e i ristoranti che si animano fino a tarda notte"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'it-IT',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "La mattina si sveglia lentamente sulla città di Roma, con i primi raggi del sole che illuminano i monumenti antichi. Le strade si animano con il traffico dei pendolari e il vociare dei mercati.
      Giulia, una residente di Milano, si prepara per la giornata, gustando un caffè espresso mentre sfoglia il giornale locale. Poi si avvia verso l'ufficio, pronta per una giornata di lavoro.
      A Napoli, i venditori ambulanti montano i loro bancarelle lungo il lungomare, offrendo frutta fresca e specialità locali ai passanti.
      A Firenze, i turisti affollano le piazze, ammirando i capolavori d'arte rinascimentale e facendo foto ricordo."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'it-IT',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
