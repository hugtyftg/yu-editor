import { Schema } from 'prosemirror-model';
// import { addListNodes } from 'prosemirror-schema-list';
// import { schema as basicSchema } from 'prosemirror-schema-basic';
import { nodesSchema } from './nodes';
import { markSchema } from './marks';

export const schema = new Schema({
  nodes: nodesSchema,
  marks: markSchema,
});
// console.log(
//   'orderedMap',
//   addListNodes(schema.spec.nodes, 'paragraph block*', 'block')
// );
// console.log('basicSchema: ', basicSchema);
console.log('schema: ', schema);
