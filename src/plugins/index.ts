import {
  ySyncPlugin,
  yCursorPlugin,
  yUndoPlugin,
  undo,
  redo,
} from 'y-prosemirror';
import { keymap } from 'prosemirror-keymap';
import { WebsocketProvider } from 'y-websocket';

export interface CreatePluginsOptions {
  provider: WebsocketProvider;
  type: any;
}

export const createPlugins = ({ provider, type }: CreatePluginsOptions) => [
  ySyncPlugin(type),
  yCursorPlugin(provider.awareness),
  yUndoPlugin(),
  keymap({
    'Mod-z': undo,
    'Mod-y': redo,
    'Mod-Shift-z': redo,
  }),
];
