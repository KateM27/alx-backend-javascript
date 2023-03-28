export default function cleanSet(set, startString) {
    const mySet = [];
    if (startString === '' || typeof startString !== 'string') {return '';}
    set.forEach((s) => {
        if (typeof s === 'string' && s.startsWith(startString)) {
            mySet.push(s.slice(startString.length));
        }
    });
}
