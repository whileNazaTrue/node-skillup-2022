const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

const url = 'http://localhost:3000/api';


const category = {
    name: 'Test',
    description: 'Testing'
}

const category2 = {
    name: 'Test2',
    description: 'Testing2'
}

const category3 = {
    name: 'Test3',
    description: 'Testing3'
}

describe('Categories', () => {
    it('should return a list of categories', (done) => {
        chai.request(url)
        .get('/categories')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
        });
    });

    it('should return a category', (done) => {
        chai.request(url)
        .get('/categories/1')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            done();
        });
    });

    it('should create a category', (done) => {
        chai.request(url)
        .post('/categories')
        .send(category)
        .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            done();
        });
    });

    it('should update a category', (done) => {
        chai.request(url)
        .put('/categories/1')
        .send(category2)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            done();
        });
    });

    it('should delete a category', (done) => {
        chai.request(url)
        .delete('/categories/2')
        .end((err, res) => {
            expect(res).to.have.status(204);
            expect(res.body).to.be.an('object');
            done();
        });
    });
});