import { SignJWT } from "jose";
import {JWT_SECRET} from './getJWTSecret.js';

//**
// *Generates a JWT
//* @param {Object} payload - Data to be embed in the token
//* @param {string} expiresIn - Expiration time

export const generateToken = async (payload, expiresIn = '15m') => {
  return await new SignJWT(payload)
  .setProtectedHeader({alg: 'HS256'})
  .setIssuedAt()
  .setExpirationTime(expiresIn)
  .sign(JWT_SECRET)
};

