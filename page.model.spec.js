const models = require('../models/index')
const Page = models.Page
const chai = require('chai')
const spies = require('chai-spies')
const expect = chai.expect



describe('Page model', function () {

  beforeEach(function(done){

    models.db.sync({force:true}).then(function(){

        return Page.create({
        name: 'First',
        title: 'orange banana',
        
        content: 'This is a paragraph',
        tags: ['kiwi','orange','banana']
      })
      .then(function(table){
        console.log('Database synced')
        done()
      })
    })
    .catch(done)
  })


    describe('Virtuals', function () {

      
   

      describe('route', function () {
        it('returns the urlTitle prepended by "/wiki/"', function(){
          
          return Page.findAll({})
          .then(function(pages){
             expect(pages[pages.length-1].urlTitle).to.equal('orange_banana')
          })
        }) 
      });
      describe('renderedContent', function () {
        it('converts the markdown-formatted content into HTML');
      });
    });
  
    describe('Class methods', function () {
      describe('findByTag', function () {
        it('gets pages with the search tag',function(){
          Page.findByTag('kiwi').then(function(pages){
            expect(pages).to.equal(1)
          })
        });
        it('does not get pages without the search tag');
      });
    });
  
    describe('Instance methods', function () {
      describe('findSimilar', function () {
        it('never gets itself');
        it('gets other pages with any common tags');
        it('does not get other pages without any common tags');
      });
    });
  
    describe('Validations', function () {
      it('errors without title');
      it('errors without content');
      it('errors given an invalid status');
    });
  
    describe('Hooks', function () {
      it('it sets urlTitle based on title before validating');
    });
  
  });