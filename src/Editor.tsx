import { useEditor } from './hooks/useEditor';

function Editor() {
  const { editorRef } = useEditor({
    websocketUrl: 'ws://localhost:1234',
    roomName: 'proseMirrorRoom1',
    fragmentName: 'proseMirrorType',
  });

  return <div ref={editorRef}></div>;
}

export default Editor;
