const Helloworld = artifacts.require("Helloworld");

contract("Helloworld", accounts => {
    it("constructor should set the message correctly", async () =>{
        let instance = await Helloworld.deployed();
        let message = await instance.message();
        assert.equal(message, "Hello world constructor");
    })

    it("owner should be accounts[0]", async () =>{
        let instance = await Helloworld.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
    })

    it("setMessage() should set the string passed into it", async () =>{
        let instance = await Helloworld.deployed();
        let oldMessage = await instance.message();
        await instance.setMessage("I am egon.isnoise, coder of meta worlds!! Buaaaaahahahahah");
        let newMessage = await instance.message();
        assert.equal(oldMessage, "Hello world constructor");
        assert.equal(newMessage, "I am egon.isnoise, coder of meta worlds!! Buaaaaahahahahah");
    })
})