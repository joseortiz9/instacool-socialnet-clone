import {AnyAction, Dispatch} from "redux";
import {IServices} from "../services";
import { firestore } from "firebase";


const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-success'
const ERROR = 'posts/fetch-error'


export interface IDataPosts {
    [key: string]: {
        comment: string,
        userId: string,
        createdAt: firestore.Timestamp
        imageURL: string
    }
}

const fetchStart = () => ({
    type: START
})

const fetchSuccess = (payload: IDataPosts) => ({
    type: SUCCESS,
    payload,
})

const fetchError = (payload: Error) => ({
    type: ERROR,
    payload,
})


const initialState = {
    data: {},
    fetched: false,
    fetching: false
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case START:
            return {
                ...state,
                fetching: true
            }
        case SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false
            }
        case ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }
        default:
            return state
    }
}


export const fetchPosts = () =>
    async (dispatch: Dispatch, getState: () => any, { fireDB, fireStorage }: IServices) => {
        dispatch(fetchStart())
        try {
            const snaps = await fireDB.collection('posts').get()
            const posts: any = {}
            //fetch all the posts ids
            snaps.forEach(x => posts[x.id] = x.data())
            //make all the promises that can b generated trying to get the downloadURL of
            //every post image and adding this to the array
            const imgIds = await Promise.all(
                Object.keys(posts).map(async x => {
                    const ref = fireStorage.ref(`posts/${x}.jpg`)
                    const url = await ref.getDownloadURL()
                    return [x, url]
                }))
            //re-loop the array to make the id as a key and the downloadURL as the value
            const keyedImages: any = {}
            imgIds.forEach(x => keyedImages[x[0]] = x[1])

            //combine the post object and their respective imageURL in the same list object to
            //pass it to the fetchSuccess
            Object.keys(posts).forEach(x => posts[x] = {
                ...posts[x],
                imageURL: keyedImages[x]
            })
            dispatch(fetchSuccess(posts))
        } catch (e) {
            dispatch(fetchError(e))
        }
    }


export const like = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, {  }: IServices) => {

    }


export const share = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, {  }: IServices) => {

    }