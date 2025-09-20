import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

export function setupEditor(
  docElement: HTMLElement,
  state: EditorState
): EditorView {
  // 创建编辑器视图实例，并挂在到 el 上
  const editorView = new EditorView(docElement, {
    state,
  });
  return editorView;
}
