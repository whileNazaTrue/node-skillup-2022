const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


const expect = chai.expect;

const url = 'http://localhost:3000/api';

const user = {
    firstName: 'Test',
    lastName: 'Test',
    email: 'tss@gmail.com',
    password: '123456',
    avatar: 'https://www.google.com',
    roleId: 1
};

const user2 = {
    firstName: 'Test2',
    lastName: 4,
    email: 'taass@gmail.com',
    password: '123456',
    avatar: 'https://www.google.com',
    roleId: 1

};

const user3 = {
    firstName: 'Test3',
    lastName: 'Test3',
    email: 'tata@gmail.com',
    password: '123456',
    avatar: 'https://www.google.com',
    roleId: 1
};


describe('Users', () => {
    
    it('should return a list of users', (done) => {
        chai.request(url)
        .get('/users')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
        });
    });

    it('should return a user', (done) => {
        chai.request(url)
        .get('/users/1')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            done();
        });
    });

    it('should create a user', (done) => {
        chai.request(url)
        .post('/users')
        .send(user)
        .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('firstName').to.be.an('string');
            expect(res.body).to.have.property('lastName').to.be.an('string');
            expect(res.body).to.have.property('email').to.be.an('string');
            expect(res.body).to.have.property('password').to.be.an('string');     
            done();
        });
    });
    

    it('should update a user', (done) => {
        chai.request(url)
        .put('/users/3')
        .send(user2)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('firstName').to.be.an('string');
            expect(res.body).to.have.property('lastName').to.be.an('string');
            expect(res.body).to.have.property('email').to.be.an('string');
            expect(res.body).to.have.property('password').to.be.an('string');
            done();
        });
    });

    it('should update a user', (done) => {
        chai.request(url)
        .put('/users/3')
        .send(user3)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('firstName').to.be.an('string');
            expect(res.body).to.have.property('lastName').to.be.an('string');
            expect(res.body).to.have.property('email').to.be.an('string');
            expect(res.body).to.have.property('password').to.be.an('string');
            done();
        });
    });

    it('should delete a user', (done) => {
        chai.request(url)
        .delete('/users/5')
        .end((err, res) => {
            expect(res).to.have.status(204);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message').to.be.an('string');
            done();
        });
    });


});