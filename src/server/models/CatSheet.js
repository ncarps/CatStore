import {createSchema , createModel} from 'gsheeez';

const schema = createSchema({
  range: 'A:C',
  header: ['name', 'lastname', 'breed'],
});

export default createModel( schema )
