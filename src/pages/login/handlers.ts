import { Player } from '@runox-game/game-engine/lib/models/player.model';
import type { IPlayer } from '@runox-game/game-engine/lib/models/player.model';
import firebase from "../../services/firebase-app";
import { AppStatus, IStore } from "../../store/types";

export const login = async (store: IStore) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    const _user: IPlayer = new Player(
      result.user.email,
      result.user.displayName,
      result.user.photoURL
    );
    store.setUser(_user);
    store.setStatus(AppStatus.AUTHENTICATED);
  } catch (err) {
    console.log(err);
  }

};

export const handleRoomName = (store: IStore, roomName: string) => {
  store.setRoomName(roomName)
}
