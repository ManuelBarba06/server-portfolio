import express, { Application, json } from 'express';
import fileUpload from 'express-fileupload'

import contactRoutes from './contact/contact.route'

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
        
        this.app.use(
            fileUpload({
                useTempFiles: true
            })
        )
        
        //Set server port
        this.port = process.env.PORT || '4000'
        
        this.routes()
    }
    
    routes(){
        this.app.use(`${this.PATH}${this.apiPaths.contact}`, contactRoutes)
    }
    
    listen() {
        //Set server PORT
        this.app.listen(this.port, () => {
            console.log(`Server is running in port: ${this.port}`)
        })
    }
}

export default Server