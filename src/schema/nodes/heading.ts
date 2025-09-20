import { NodeSpec } from 'prosemirror-model';

// 1-6 级标题
export const heading: NodeSpec = {
  // attrs 与 vue/react 组件中 props 的概念类似，代表定义当前节点有哪些属性，这里定义了 level 属性，默认值 1
  attrs: {
    level: {
      default: 1,
    },
  },
  // 当前节点内容可以是 0 个或多个 inline 节点
  content: 'inline*',
  // 当前节点分组为 block 分组
  group: 'block',
  // defining: 特殊属性，为 true 代表如果在当前标签内（以 h1 为例），全选内容，直接粘贴新的内容后，这些内容还会被 h1 标签包裹
  // 如果为 false, 整个 h1 标签（包括内容与标签本身）将会被替换为其他内容，删除亦如此。
  // 还有其他的特殊属性，后续细说
  defining: true,
  // 转为 html 标签时，根据当前的 level 属性，生成对应的 h1 - h6 标签，节点的内容填充在 h 标签中（“洞”在）。
  toDOM(node) {
    const tag = `h${node.attrs.level}`;
    return [tag, 0];
  },
  // 从别处复制进来的富文本内容，根据标签序列化为当前 heading 节点，并填充对应的 level 属性
  parseDOM: [
    { tag: 'h1', attrs: { level: 1 } },
    { tag: 'h2', attrs: { level: 2 } },
    { tag: 'h3', attrs: { level: 3 } },
    { tag: 'h4', attrs: { level: 4 } },
    { tag: 'h5', attrs: { level: 5 } },
    { tag: 'h6', attrs: { level: 6 } },
  ],
};
