import {Dispatch} from "redux";
import { IServices } from '../services';

export interface ILogin {
    email: string
    password: string
}

export default function reducer(state = {}, /*action*/) {
    return state;
}

export const login = ({ email, password }: ILogin) =>
    async (dispatch: Dispatch, getState: () => any, { fireAuth }: IServices) => {
        const result = await fireAuth.signInWithEmailAndPassword(email, password)
    }

export const register = ({ email, password }: ILogin) =>
    async (dispatch: Dispatch, getState: () => any, { fireAuth, fireDB }: IServices) => {
        const userCredential = await fireAuth.createUserWithEmailAndPassword(email, password)
        const { user } = userCredential
        const id = user ? user.uid : undefined //if user is not null return uid
        const doc = fireDB.collection('users').doc(id)
        await doc.set({ role: 'user' })
    }