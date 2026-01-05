// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './_/index.js';

export function _ChatHistoryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ChatHistory extends Base {
    declare ID?: __.Key<string>
    declare Message?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ChatHistory>;
    declare static readonly elements: __.ElementsOf<ChatHistory>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ChatHistory extends _ChatHistoryAspect(__.Entity) {}
Object.defineProperty(ChatHistory, 'name', { value: 'ChatHistory' })
Object.defineProperty(ChatHistory, 'is_singular', { value: true })
export class ChatHistory_ extends Array<ChatHistory> {$count?: number}
Object.defineProperty(ChatHistory_, 'name', { value: 'ChatHistory' })
