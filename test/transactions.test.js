const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

const url = 'http://localhost:3000/api';

const transaction = {
    description: 'Test',
    amount: 100,
    date: '2021-07-05',
    userId: 1,
    categoryId: 1
};

const transaction2 = {
    description: 'Test2',
    amount: 200,
    date: '2021-05-05',
    userId: 1,
    categoryId: 1
};

const transaction3 = {
    description: 'Test3',
    amount: 300,
    date: '2021-06-05',
    userId: 1,
    categoryId: 1
};

describe('Transactions', () => {
        it('should return a list of transactions', (done) => {
            chai.request(url)
            .get('/transactions')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
        });
    
        it('should return a transaction', (done) => {
            chai.request(url)
            .get('/transactions/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
        });
    
        it('should create a transaction', (done) => {
            chai.request(url)
            .post('/transactions')
            .send(transaction)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                done();
            });
        });
    
        it('should update a transaction', (done) => {
            chai.request(url)
            .put('/transactions/1')
            .send(transaction2)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
        });
    
        it('should delete a transaction', (done) => {
            chai.request(url)
            .delete('/transactions/1')
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
        });
    });

