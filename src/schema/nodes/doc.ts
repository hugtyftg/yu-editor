import { NodeSpec } from 'prosemirror-model';

// 整个文档
export const doc: NodeSpec = {
  // 文档内容规定必须是 block 类型的节点（block 与 HTML 中的 block 概念差不多） `+` 号代表可以有一个或多个（规则类似正则）
  content: 'block+',
};
