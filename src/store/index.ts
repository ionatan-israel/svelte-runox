import { writable } from 'svelte/store';

import type { IPlayer } from '@runox-game/game-engine/lib/models/player.model';
import { AppStatus, IState } from './types';

const initialState: IState = {
  isOwner: false,
  roomName: null,
  status: AppStatus.UNINITIALIZED,
  user: null
}

function createStore() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    setIsOwner: (isOwner: boolean) => update(state =>
      Object.assign({}, { ...state, isOwner })
    ),
    setRoomName: (roomName: string) => update(state =>
      Object.assign({}, { ...state, roomName })
    ),
    setStatus: (status: AppStatus) => update(state =>
      Object.assign({}, { ...state, status })
    ),
    setUser: (user: IPlayer) => update(state =>
      Object.assign({}, { ...state, user })
    ),
    reset: () => set(initialState)
  }
}

export const store = createStore();

