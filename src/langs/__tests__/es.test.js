import { test, describe } from 'vitest'

import { getLoremi } from '../../index'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'es-ES',
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"La"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'es-ES',
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"La mañana llega a España, iluminando las calles empedradas de las ciudades históricas y las playas doradas de la costa"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'es-ES',
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"La mañana llega a España, iluminando las calles empedradas de las ciudades históricas y las playas doradas de la costa. Los cafés abren sus puertas, llenando el aire con el aroma del café recién hecho."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'es-ES',
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"La mañana llega a España iluminando las calles empedradas de las ciudades históricas y las playas doradas de la costa Los cafés abren sus puertas llenando el aire con el aroma del café recién hecho María una residente de Madrid se prepara para el día mientras contempla la ciudad desde su balcón El bullicio de la"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'es-ES',
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"La mañana llega a España, iluminando las calles empedradas de las ciudades históricas y las playas doradas de la costa. Los cafés abren sus puertas, llenando el aire con el aroma del café recién hecho. María, una residente de Madrid, se prepara para el día mientras contempla la ciudad desde su balcón. El bullicio de la Gran Vía la invita a un nuevo día de aventuras. En Barcelona, los turistas pasean por Las Ramblas, admirando la arquitectura modernista y disfrutando de las tapas en los bares locales. En Sevilla, el sol brilla sobre la Giralda mientras los sevillanos comienzan su día con un café y churros. En el norte, en San Sebastián, los surfistas se preparan para coger las olas mientras los lugareños disfrutan de pintxos en los bares del casco antiguo. En Valencia, los agricultores recogen naranjas y limones en los campos mientras los niños se preparan para ir a la escuela. En las Islas Canarias, los turistas disfrutan del sol y la playa durante todo el año, explorando las maravillas naturales de las islas. En Galicia, los pescadores salen al mar temprano en la mañana, buscando la captura del día. En Bilbao, los amantes del arte visitan el Museo Guggenheim, maravillándose con la arquitectura vanguardista y las exposiciones contemporáneas. En Granada, los visitantes exploran la Alhambra, maravillándose con los intrincados detalles y los exuberantes jardines"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      lang: 'es-ES',
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "La mañana llega a España, iluminando las calles empedradas de las ciudades históricas y las playas doradas de la costa. Los cafés abren sus puertas, llenando el aire con el aroma del café recién hecho.
      María, una residente de Madrid, se prepara para el día mientras contempla la ciudad desde su balcón. El bullicio de la Gran Vía la invita a un nuevo día de aventuras.
      En Barcelona, los turistas pasean por Las Ramblas, admirando la arquitectura modernista y disfrutando de las tapas en los bares locales.
      En Sevilla, el sol brilla sobre la Giralda mientras los sevillanos comienzan su día con un café y churros."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    lang: 'es-ES',
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
