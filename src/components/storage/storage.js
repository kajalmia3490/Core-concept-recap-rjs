// local storage to manage cart data:
export const storage = id => {
    let lists = {};

    // get the employee lists from local storage:;
    const stored = localStorage.getItem('your-candidate-lists');
    if (stored) {;
        lists = JSON.parse(stored);
    };

    // add quantity 
    const quantity = lists[id]
    if (quantity) {
        const newQuantity = quantity + 1
        lists[id] = newQuantity
        console.log(lists[id])
    } else {
        lists[id] = 1
    }
    localStorage.setItem('your-candidate-lists', JSON.stringify(lists))
}

export const removeFormDb = id => {
    // console.log('Removing this content!', id);
    const stored = localStorage.getItem('your-candidate-lists');
    if (stored) {
        const lists = JSON.parse(stored);
        if (id in lists) {
            console.log('Removing this content!');
        } else {
            console.log("Won't be removed!");
            delete lists[id];
            localStorage.setItem('your-candidate-lists', JSON.stringify(lists));
        }

    }
}

export const deleteLists = () => {
    localStorage.removeItem('your-candidate-lists');
}

// const arr = [23, 5432, 34, 23, 64];
// const sumReducer = (previous, current) => previous + current;
// arr.reduce(sumReducer, 0);

export const totalList = list => {
    const reducer = (previous, current) => previous + current.id
    const total = list.reduce(reducer, 0);
    return total;
}