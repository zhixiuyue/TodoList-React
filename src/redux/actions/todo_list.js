import { ADD_ITEM, DETE_ITEM, MODIFY_ITEM, MODIFYSTATE, DELETDONE_ITEM } from '../constant'

export const addAction = value => ({ type: ADD_ITEM, value })

export const deleteAction = value => ({ type: DETE_ITEM, value })

export const modifyStateAction = value => ({ type: MODIFY_ITEM, value })

export const modifyAllStateAction = value => ({ type: MODIFYSTATE, value })

export const deleteDoneAction = value => ({ type: DELETDONE_ITEM, value })