import { forward, sample } from 'effector';
import { getFilteredElements } from '../../helpers/getFilteredElements';
import * as model from './elementsModel';

forward({
    from: model.FetchElementsFx.doneData,
    to: model.$elemets,
});

forward({
    from: model.ChangeStatusFx.doneData,
    to: model.$elemets,
});

sample({
    source: model.$filters,
    clock: model.$elemets,
    target: model.$elementsFiltered,
    fn: getFilteredElements,
});

sample({
    source: model.$elemets,
    clock: model.$filters,
    target: model.$elementsFiltered,
    fn: (elements, filters) => getFilteredElements(filters, elements),
});
