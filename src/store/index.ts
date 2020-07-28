import { writable } from 'svelte/store';

import type { IPlayer } from '@runox-game/game-engine/lib/models/player.model';
import { AppStatus, IState, IStore } from './types';

const initialState: IState = {
  isOwner: false,
  roomName: null,
  status: AppStatus.UNINITIALIZED,
  user: null
}

const STORE_KEY = 'RunoxSvelte';

function createStore(): IStore {
  const { subscribe, set, update } = writable(initialState);

  const _json = localStorage.getItem(STORE_KEY);

  if (_json) {
    // const tmp = JSON.parse(_json)
    // console.log(tmp);
    set(JSON.parse(_json));
  }

  const _update = (target: string, value: any) => {
    update(state => {
      const newState = Object.assign({}, { ...state, [target]: value })
      console.log(newState);
      localStorage.setItem(STORE_KEY, JSON.stringify(newState));
      return newState;
    });
  }

  return {
    subscribe,
    setIsOwner: (value: boolean) => _update('isOwner', value),
    setRoomName: (value: string) => _update('roomName', value),
    setStatus: (value: AppStatus) => _update('status', value),
    setUser: (value: IPlayer) => _update('user', value),
    reset: () => set(initialState)
  }
}

export const store = createStore();
