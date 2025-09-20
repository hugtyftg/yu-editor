import { NodeSpec } from 'prosemirror-model';

// 文档段落
export const paragraph: NodeSpec = {
  // 段落内容规定必须是 inline 类型的节点（inline 与 HTML 中 inline 概念差不多）, `*` 号代表可以有 0 个或多个（规则类似正则）
  content: 'inline*',
  // 分组：当前节点所在的分组为 block，意味着它是个 block 节点
  group: 'block',
  // 渲染为 html 时候，使用 p 标签渲染，第二个参数 0 念做 “洞”，类似 vue 中 slot 插槽的概念，
  // 证明它有子节点，以后子节点就填充在 p 标签中
  toDOM: () => {
    return ['p', 0];
  },
  // 从别处复制过来的富文本，如果包含 p 标签，将 p 标签序列化为当前的 p 节点后进行展示
  parseDOM: [
    {
      tag: 'p',
    },
  ],
};
