import * as Y from 'yjs';
import { ProsemirrorBinding } from 'y-prosemirror';
import { WebsocketProvider } from 'y-websocket';
import { EditorView } from 'prosemirror-view';
import { setupEditor } from './view';
import { createEditorState } from './state';
import { useEffect, useRef } from 'react';

function Editor() {
  const editorRef = useRef(null);

  useEffect(() => {
    // 1.初始化yjs实例
    const doc = new Y.Doc();
    const type = doc.getXmlFragment('proseMirrorType');

    // 2.启动websocket协同服务
    // 注意，最新的websocket 3.0版本有问题，建议安装2.x版本
    // npx y-websocket

    // 3.连接yjs和websocket，建立协同服务
    // 地址、房间号（房间里的人互不干扰）、yjs实例
    const wsProvider = new WebsocketProvider(
      'ws://localhost:1234',
      'proseMirrorRoom1',
      doc
    );
    wsProvider.on('status', (event) => {
      console.log(event.status); // logs "connected" or "disconnected"
    });

    // 4.挂载编辑器
    let editorView: EditorView | null = null;
    let binding: ProsemirrorBinding | null = null;

    if (editorRef.current) {
      // 4.1 定义schema
      // 4.2 基于schema创建editorState
      // 4.3 基于el和editorState创建editorView
      editorView = setupEditor(
        editorRef.current,
        createEditorState({ provider: wsProvider, type })
      );
      // 4.4 连接editorView和协同服务
      binding = new ProsemirrorBinding(type);
      binding.initView(editorView);
    }
    return () => {
      if (binding) {
        binding.destroy();
      }
      if (editorView) {
        editorView.destroy();
      }
      wsProvider.destroy();
      doc.destroy();
    };
  }, []);

  return <div ref={editorRef}></div>;
}

export default Editor;
