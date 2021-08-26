const express = require('express')

const app = express()

app.use(express.json())

/**
 * Router params => Identificar um recurso editar/deletar/buscar
 * 
 */

const courses = ["curso 0", "curso 2", "curso 3", "curso 4", "curso 5"]

app.get('/courses', (request, response) => {
    return response.json(courses)
})

app.post('/courses', (request, response) => {
    return response.json(courses)
})

app.put('/courses/:id', (request, response) => {
    const { id } = request.params

    if(id > courses.length || id <= 0)
        return response.status(401).json({ error: 'error value not found' })

    const newCourses = courses.map((value, index) => {
        if(index == (id - 1)){
            return (
                "new curso" 
            )
        }
        return value
    })

    return response.json(newCourses)
})

app.delete('/courses/:id', (request, response) => {
    const { id } = request.params

    if(id > courses.length || id <= 0)
        return response.status(401).json({ error: 'error value not found' })

    const deleteCourse = courses.filter((value, index) => {
        if(index == (id - 1))
            return
        return value
    })

    return response.json(deleteCourse)


})

app.patch('/courses/:id', (request, response) => {
    return response.json(["curso 2", "curso 3", "curso 4", "curso 5", "curso 1"])
})

app.listen(3333, () => {
    console.log('Server success run  🚀')
})