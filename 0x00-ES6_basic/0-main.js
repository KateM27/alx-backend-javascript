// import { taskFirst, taskNext } from './0-constants';

// console.log(`${taskFirst()} ${taskNext()}`);

import getNeighborhoodsList from './2-arrow';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);