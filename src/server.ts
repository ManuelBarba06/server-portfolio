import express, { Application, json } from 'express';

class Server {
    private app: Application
    private port: string
    
    private apiPaths = {
        contact: '/contact'
    }
    
    private PATH = '/api/v1'
    
    constructor() {
        //Initialize express
        this.app = express();
        
        //Allow receive jsons in server
        this.app.use(json())
        
        //Set server port
        this.port = process.env.PORT || '4000'
        
    }
    
    listen() {
        //Set server PORT
        this.app.listen(this.port, () => {
            console.log(`Server is running in port: ${this.port}`)
        })
    }
}

export default Server