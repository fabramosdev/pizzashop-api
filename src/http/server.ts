import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => {
        return {
            name: "Fabiano Ramos",
            age: 46,
            mail: "fabiano.suporteinfo@gmail.com"
        }
    })

app.listen(3333, () => {
    console.log("Server running")
})