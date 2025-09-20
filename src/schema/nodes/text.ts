import { NodeSpec } from 'prosemirror-model';

// 段落中的文本
export const text: NodeSpec = {
  // 当前处于 inline 分株，意味着它是个 inline 节点。代表输入的文本
  group: 'inline',
};
