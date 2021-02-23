import { forward, sample } from 'effector';
import { getFilteredElements } from '../../helpers/getFilteredElements';
import * as model from './elementsModel';

forward({
    from: model.FetchElementsFx.doneData,
    to: model.$elements,
});

forward({
    from: model.ChangeStatusFx.doneData,
    to: model.$elements,
});

sample({
    source: model.$filters,
    clock: model.$elements,
    target: model.$elementsFiltered,
    fn: getFilteredElements,
});

sample({
    source: model.$elements,
    clock: model.$filters,
    target: model.$elementsFiltered,
    fn: (elements, filters) => getFilteredElements(filters, elements),
});
