export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        payload: data
    }
}

export function setFilters(newfilters) {
    return {
        type: 'SET_FILTERS',
        payload: newfilters
    }
}

export function setEditStatus(status) {
    return {
        type: 'ENABLE_EDIT',
        payload: status
    }
}

export function startEdit(direction, index) {
    return {
        type: 'START_EDIT',
        payload: {
            'direction': direction,
            'index': index
        }
    }
}

export function endEdit() {
    return {
        type: 'END_EDIT'
    }
}