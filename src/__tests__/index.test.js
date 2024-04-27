import { test, describe } from 'vitest'

import { getLoremi } from '../index'

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

    expect(result).toMatchInlineSnapshot(`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam lacus. Fusce non eleifend enim. Donec auctor convallis nisi, vitae suscipit justo. Suspendisse potenti. Nulla nec ultricies nibh. Vivamus id odio nec urna semper tincidunt. Nam dapibus, magna et aliquet lobortis, velit metus bibendum massa, non viverra lectus nisi vel nunc."`)
  })
})

describe(`Should return the good count of 'unit'`, () => {
  test(`Should return only 3 word`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'word',
      count: 3,
    })

    expect(result).toMatchInlineSnapshot(`"Lorem ipsum dolor"`)
  })

  test(`Should return only 2 sentences`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'sentence',
      count: 2,
    })

    expect(result).toMatchInlineSnapshot(`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam lacus"`)
  })

  test(`Should return only 4 paragraph`, async ({ expect }) => {
    const result = await getLoremi({
      unit: 'paragraph',
      count: 4,
    })

    expect(result).toMatchInlineSnapshot(`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam lacus. Fusce non eleifend enim. Donec auctor convallis nisi, vitae suscipit justo. Suspendisse potenti. Nulla nec ultricies nibh. Vivamus id odio nec urna semper tincidunt. Nam dapibus, magna et aliquet lobortis, velit metus bibendum massa, non viverra lectus nisi vel nunc.
Quisque lacinia enim sit amet ipsum varius, nec rhoncus felis ullamcorper. Cras at eros libero. Curabitur ut faucibus dui. Nullam nec justo ut nisi vehicula aliquam sit amet et dui. Sed efficitur, est id efficitur feugiat, urna turpis tincidunt mi, et egestas sapien purus nec purus. Vivamus fringilla est sed diam fermentum, vitae luctus turpis vehicula.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed quam vel nunc iaculis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam nec urna nec nulla ultrices interdum. Nulla id arcu nisi. Mauris vulputate euismod turpis, eu gravida ante scelerisque ut.
Aenean sollicitudin elit non sapien eleifend, id fringilla enim eleifend. Integer a malesuada nunc. Phasellus venenatis tristique sapien nec vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec elit risus. Nulla facilisi. Pellentesque non nisi quis libero scelerisque feugiat."`)
  })
})
