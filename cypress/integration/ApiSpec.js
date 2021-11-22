describe('Rest API tests ', () => {
    it('API test-validate Headers', () => {
   cy.request('https://jsonplaceholder.typicode.com/todos').as('todos')
   cy.get('@todos').
   its('headers').
   its('content-type')
   .should('include','application/json')
       
    })
   
     it('API test-validate Status code', () => {
      cy.request('https://jsonplaceholder.typicode.com/todos').as('todos')
      cy.get('@todos').
      its('status')
      .should('equal',200)
          
       })
       it('Get', () => {
        cy.request({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/todos/1',
            body:{
                completed:false,
        },
     })
    })


    it('post', () => {
             cy.request( {
                method: 'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                body: {
                     userId: 1,
                        id: 8,
                        title: "dolorem dolore est ipsam",
                        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
                      
                },
                
              })
            })

    it("Delete",()=>{

                cy.request( {
                method: 'DELETE',
                url:'https://jsonplaceholder.typicode.com/posts/1',
             
                
              })
              
         })
         it('load todo from particular user ID', () => {
            cy.request('https://jsonplaceholder.typicode.com/todos/?userId=2').then((res) => {
              res.body.forEach((item) => expect(item.userId).to.equal(2))
            })
          })

          
    it('marks todo completed ', () => {
        cy.request({
            method:'PATCH',
            url:'https://jsonplaceholder.typicode.com/todos/1',
            body:{
                completed:true,
        },
     })
     .its('body').its('completed').should('be.equal',true)
            
         })

      
    })