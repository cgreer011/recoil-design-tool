// @ts-ignore
import randomMC from 'random-material-color'
import {atomFamily, atom, selectorFamily} from 'recoil'

type RectangleState = {
    type: 'rectangle'
    color: string
}

type ImageState = {
    type: 'image'
    url: string
}

export type ElementState = {
    style: {
        top: number
        left: number
        width: number
        height: number
    }
} & (RectangleState | ImageState)

export const elementState = atomFamily<ElementState, number>({
    key: 'element',
    default: () => ({
        type: 'rectangle',
        style: {
            top: 0,
            left: 0,
            width: 200,
            height: 170,
        },
        color: randomMC.getColor({shades: ['500']}),
    }),
})

export const selectedElementIdState = atom<null | number>({
    key: 'selectedElementId',
    default: null,
})

export const isSelectedState = selectorFamily({
    key: 'isSelected',
    get: (id) => ({get}) => {
        const selectedElementId = get(selectedElementIdState)
        return selectedElementId === id
    },
})