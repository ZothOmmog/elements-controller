import { createEffect, createStore } from 'effector';
import { changeStatus, getElements } from '../../api/elements';
import { getNewStatus } from '../../helpers/getNewStatus';
import * as types from './elementsTypes';

export const fetchElementsFx = createEffect<typeof fetchElementsFxHandler>(fetchElementsFxHandler);
export const changeStatusFx = createEffect<typeof changeStatusFxHandler>(changeStatusFxHandler);

export const $elements = createStore<types.Element[]>([]);
export const $filters = createStore<types.Filter[]>([]);
export const $elementsFiltered = createStore<types.Element[]>([]);

async function fetchElementsFxHandler(): Promise<types.Element[]> {
    return await getElements();
}

async function changeStatusFxHandler({
    elements,
    editingType,
    comment,
}: types.ChangeStatusArgs): Promise<types.Element[]> {
    return changeStatus({ elements, comment, statusId: getNewStatus(editingType) });
}
