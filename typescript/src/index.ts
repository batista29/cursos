let age: number = 5
const nome: string = 'Natã'
const isValid: boolean = true
let idk: any = 5

idk = '12'
idk = true

const ids: number[] = [1, 2, 3, 4]

//tupla
const person: [number, string] = [1, 'Natã']

//Lista de tuplas
const people: [number, string][] = [
    [1, 'Jane'],
    [2, 'Lucas']
]

//Intersections
const productId: string | number = '1'

//Enum
enum direction {
    Up = 1,
    Down = 2
}

console.log(direction)