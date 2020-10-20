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