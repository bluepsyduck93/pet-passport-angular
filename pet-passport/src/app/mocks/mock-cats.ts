import { Cat } from "../interfaces/cat";

export const CATS: Cat[] = [
    {
        id: 1,
        name: 'Suki',
        details:{
            toy: 'Fish',
            owner: 'Christine',
            breed: 'Russian Blue Mix',
            size: 'small',
        },
        vaccinated: true

    },
    {
        id: 2,
        name: 'Eternity',
        details: {
            toy: 'Ball',
            owner: 'Emily and Ben',
            breed: 'American Shorthair',
            size: 'small'
        },
        vaccinated: true

    },
    {
        id: 3,
        name: 'Willie',
        details: {
            toy: 'Laser',
            owner: 'Terence and Denia',
            breed: 'American Shorthair',
            size: 'small'
        },
        vaccinated: true
    },
    {
        id: 4,
        name: 'Rosie',
        details:{
            toy: 'Mouse',
            owner: 'Terence and Denia',
            breed: 'American Shorthair',
            size: 'small'
        },
        vaccinated: false
    }
]