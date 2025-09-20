import { MarkSpec } from 'prosemirror-model';

// 文本加粗
export const strong: MarkSpec = {
  // 对于加粗的部分，使用 strong 标签包裹，加粗的内容位于 strong 标签内(这里定义的 0 与上面一致，也念做 “洞”，也类似 vue 中的 slot)
  toDOM() {
    return ['strong', 0];
  },
  // 从别的地方复制过来的富文本，如果有 strong 标签，则被解析为一个 strong mark
  parseDOM: [{ tag: 'strong' }],
};
