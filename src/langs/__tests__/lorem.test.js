import { test, describe } from 'vitest'

import { getLoremi } from '../../index.js'

describe(`Should return the good 'unit' options`, () => {
  test(`Should return only a word using 'word'`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'word',
    })

    expect(result).toMatchInlineSnapshot(`"Lorem"`)
  })

  test(`Should return only a sentences using 'sentence'`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'sentence',
    })

    expect(result).toMatchInlineSnapshot(`"Lorem ipsum dolor sit amet, consectetur adipiscing elit"`)
  })

  test(`Should return only a paragraph using 'paragraph'`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'paragraph',
    })

    expect(result).toMatchInlineSnapshot(`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dolor nunc. In hendrerit, leo eget dignissim interdum, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 55 word without '.', ',' or 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'word',
      count: 55,
    })

    expect(result).toMatchInlineSnapshot(`"Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla sed dolor nunc In hendrerit leo eget dignissim interdum libero dolor auctor tellus eu consectetur neque elit quis nunc Cras elementum pretium est Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante"`)
  })

  test(`Should return only 12 sentences without 'line break'`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'sentence',
      count: 12,
    })

    expect(result).toMatchInlineSnapshot(`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dolor nunc. In hendrerit, leo eget dignissim interdum, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dolor nunc. In hendrerit, leo eget dignissim interdum, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
      Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
      Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat."
    `)
  })
})

test(`Should replace the suffix by \r\n`, async ({ expect }) => {
  const result = await getLoremi({
    unit: 'paragraph',
    count: 2,
    suffix: '\r\n',
  })

  expect(result).toMatch('\r\n')
})
