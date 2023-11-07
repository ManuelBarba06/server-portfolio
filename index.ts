import dotenv from 'dotenv';

import Server from './src/server';
import db from './src/db/connection';

dotenv.config();

const server = new Server();

server.listen()

//Conntect to db
db();