import { firestore, storage, auth } from 'firebase';
import * as firebase from "./firebase";

const services = {
    ...firebase,
}

export default services;

export interface IServices {
    fireAuth: auth.Auth
    fireDB: firestore.Firestore
    fireStorage: storage.Storage
}