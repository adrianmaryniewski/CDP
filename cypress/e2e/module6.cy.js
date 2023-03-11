const url = 'https://jsonplaceholder.typicode.com/posts'
const url2 = 'https://jsonplaceholder.typicode.com/posts/1/'
describe('my first scenario', () => {
    it('should test json placeholder API - POST', function() {

        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
        })

        cy.request({
            method: 'POST',
            url: url,
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(201)
        })
    })

    it('should test json placeholder API - PUT', function() {

        cy.request(url2).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
        })

        cy.request({
            method: 'PUT',
            url: url2,
            body: {
                title: 'Harry Potter',
                body: 'and the Deathly Hallows',
                userId: 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            expect(body).to.include('Harry Potter')
        })
    })

    it('should test json placeholder API - DELETE', function() {

        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            cy.log(body)
            expect(response.status).to.eq(200)
        })

        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            }).then((response) => {
                const body = JSON.stringify(response.body)
                cy.log(body)
                expect(body).to.eq('{}')
            })
        })

})