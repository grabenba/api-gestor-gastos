# Enpoints:

GET /v1/api/status
POST /v1/ap/users
POST /v1/api/users
GET /v1/apiusers
GET /v1/api/users
GET /v1/api/users
POST /v1/api/users
GET /users/vxZDzKEfwt1YOuo5YHU8/movements
GET /v1/api/users/vxZDzKEfwt1YOuo5YHU8/movements
POST /v1/api/users/vxZDzKEfwt1YOuo5YHU8/movements

POST /v1/api/users/auth/token

Clase 23 Nov crear un user, agregarle el token y consultar con el token
POST /v1/api/users  // creo un nuevo user -- sin login
POST /v1/api/users/auth/token  // login del user: genera el token
GET /v1/api/users/me  // Get user con Token

POST /v1/api/users/me/movements
GET /v1/api/users/me/movements




// ALGUNOS PASOS QUE HICIMOS 
// CARGAR LAS VARIABLES De entorno CADA VEZ QUE DESCARGMOS LA APP O LA SUBIMOS AL SERVIDOR
//  en database/index.ts teniamos:

// import { initializeApp, cert } from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';
// import { ADMIN_SKD } from '../../constants';

// import serviceAccount from './adminsdk.json';  // el JSON Estaba en este archivo

// //console.log(JSON.stringify(serviceAccount));
// //console.log(ADMIN_SKD); // habiamos hecho un copy paste de la var serviceAccount


// initializeApp({
// 	credential: cert(serviceAccount as any),
// });

// const firestore = getFirestore();

// export default firestore;


// el admin_sdk.json era: 
// {
// 	"type": "service_account",
// 	"project_id": "greenback-6e51f",
// 	"private_key_id": "7f173cf9b498e620311ba302a4784ea67dbe5d46",
// 	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCm+H6wiWXMyjdV\nWmrEM6Dxc2Za4NccQZ3eTzKUKQhyB2+7WQrVtWV/+Dfh45CT1alDA8dYMLxYzfz3\nW0LhAV9hce9zY5e2lrqXxO2oZGnm9QHPjHJGHGzJqtJ5v+75zQgTwM9MJr4JB4ZD\nLXkM2FxEzUe3sdByLSfZcj0g6wlcJeP4miMqVX/RSGhHG+2kchWq2a8cSQKvVYWx\nS87oTi42Mq2FKf5ax4AeuH4wwejTFboboanHJZqu1Fw0VnoRoqx9S06Tm4oo1jmf\nXHomujcakuwsx4cP4EYaC5u0mRFddzjSIV/b9lQ+dhh2Xf3tupXg7qRTyuUa/XXl\nKqMJwr99AgMBAAECggEAAzUUL4byiVyiQHj6qQ2TopLrA4VJjIjnVyBiIj3bJCzO\nMb6abZPmjbulmY8gaIthQEczAP4t3m5vVNip1oTX7kxc40E/Mx1lGzChhUUPuOu6\nHuCdrbwZDBMRQcNByQZuIjCaqswc68zhs6oMpuydcex+W3us1RMJ+2xtQS2F1TSU\nx/igCRjB+hTpbL/OUVqcJGq5Qj8nAc5h0sbVJaBPImx8Ej6FwR3ed00DKO/W9VHh\nRzgtYbsXI/hbQ17u5cW0VSWpQYkjHHctFJ5p7f4WcXMkNagy2I9OyXtzOfbvgcBj\nQNXHmebXYoW2xpd+1uDwy1TRdPv9f0X/WtZOIBKwTwKBgQDPq6J6iI5zoOsLpZ4r\niLY6KE9oJUI4TfDhgvSZtaRvC5gnm8HgAzfT2PrT56KxO7RyVplYz1BdIt7nYVeW\n22pCVyGiObhQ8Nu3hQ11QzVqi45CoU8rv7MhUdpeGCX9ruHB53UAkLhw7wzM49uN\nYQRof6+wiyhgwX1k3vxMuMN3TwKBgQDN1Bf4UjpAgN/FLpyDBC4UxLfFo5bAv/6n\ne9OnjRpKMQvFWgtzhK4osHwcyIB2DIsxDiq+WX0DAnkZiKvTGu4b2Rf17LBbCRvE\narxPno760Ewg5HnHkOR0wy6tOmaeATT5E+gMeO0juB4Ykgb/oitasUMvM+S7cfG8\nDnxkMH+pcwKBgBIif9bJc/8e70eeF9jfYGJlwMFsd4LpM37N68Q8e3aDAa97x4tj\nXI2wZf75PFjTyOcvLsb1m6P2dpaoBnkTAg13BGXhOno+/kDhapJx4wlB1JN2+K3u\nWJsxRatv2mlzyx0etDXvbVvXVDvULgkDjtn9RH9bN5RzcRrM6iVdARy7AoGBAKff\nsJ0sE67AbcIZPjXtltgBihF8V1xmO4DGkd46S5LvZbZUtrpFIPa22sNvFLczi+M6\ntsoBmuB1h+e3fMz1TfcQnWZK4ZueVjNhCq21mNAgS7cYIesO1gYVm2BWHZQJT/dG\nsSBbEK7tYD6R+3tL/Sg/I5jALnJjgNHszq+4jqbZAoGBAMV1uMkAus0IqZnlGoAc\nlTQbI5uE5ZpAQ1RXHI6A+KDLg/FCXYMC62EdJ52XRZAiHz5vPrPcBZfpCpZL1W0r\nhIrsm8SkqpG83SF03fPP5CfMhbunbSR9jr6mKds7KGP4FErug5zXTriLgpeJjQDq\n0ourwAZbWqU3NpM09m3nKYfj\n-----END PRIVATE KEY-----\n",
// 	"client_email": "firebase-adminsdk-8zz1a@greenback-6e51f.iam.gserviceaccount.com",
// 	"client_id": "105662508634971596913",
// 	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
// 	"token_uri": "https://oauth2.googleapis.com/token",
// 	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
// 	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8zz1a%40greenback-6e51f.iam.gserviceaccount.com",
// 	"universe_domain": "googleapis.com"
//   }

// lo borramos y reemplazamos en index.ts de database la inicializaion de la app con la variable json  ADMIN_SDK