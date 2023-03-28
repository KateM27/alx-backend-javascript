export default function updateUniqueItems(myItem) {
    if (Object.getPrototypeOf(myItem) !== Map.prototype) {
        throw new TypeError('Cannot process');
    }
    myItem.forEach((name, quantity) => {
        if (quantity === 1) {
            myItem.set(name, 100);
        }
    });
    return myItem;
}
