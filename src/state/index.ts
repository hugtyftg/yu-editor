import { EditorState } from 'prosemirror-state';
import { WebsocketProvider } from 'y-websocket';
import { createPlugins } from '../plugins';
import { schema } from '../schema';

export interface CreateEditorStateOptions {
  provider: WebsocketProvider;
  type: any;
}

// 根据 schema 定义，创建 editorState 数据实例
export const createEditorState = ({
  provider,
  type,
}: CreateEditorStateOptions) =>
  EditorState.create({
    schema,
    plugins: createPlugins({ provider, type }),
  });
