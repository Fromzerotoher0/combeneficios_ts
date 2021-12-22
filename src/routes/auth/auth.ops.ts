import { getRepository, getConnection } from 'typeorm';
import { usuarios } from '../../config/entity/usuarios.model';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import HttpException from '../../helpers/httpException';

module.exports = {
  // db transactions to register a new user
  register(
    tipo: string,
    documento: string,
    nombres: String,
    apellidos: string,
    correo: string,
    contrasena: string,
    telefono: string,
    sexo: String,
    fecha_nac: string,
    departamento: string,
    ciudad: String,
    imgUrl: string,
    fechaYHora: string
  ) {
    return new Promise(async (resolve, reject) => {
      // validate if a user is already registered
      const documentValidation = await getRepository(usuarios).find({
        where: { documento: documento },
      });
      if (documentValidation) {
        reject(new HttpException('este usuario ya esta registrado', 400));
      } else {
        // regular expression validation for email and password
        let regex_pass = /^[a-z0-9_-]{4,30}$/;

        let regex_email =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        //condition to validate email
        if (regex_pass.test(contrasena) == false) {
          reject(
            new HttpException(
              'la contraseña debe tener Mínimo 4 caracteres',
              400
            )
          );
          //condition to validate email
        } else if (regex_email.test(correo) == false) {
          reject(new HttpException('correo electronico invalido', 400));
        } else {
          const phoneValidation = await getRepository(usuarios).find({
            where: { telefono: telefono },
          });
          if (phoneValidation) {
            reject(
              new HttpException('este telefono ya esta siendo utilizado', 400)
            );
          } else {
          }
        }
      }
    });
  },
};
