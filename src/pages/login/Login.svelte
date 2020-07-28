<script lang="ts">
  import Button from "../../shared/Button.svelte";
  import Card from "../../shared/Card.svelte";
  import PlayerList from "../../shared/PlayerList.svelte";
  import { store } from "../../store";
  import { AppStatus } from "../../store/types";
  import { handleRoomName, login } from "./handlers";

  const players = [];

  // [Declaraciones reactivas]
  $: isAuthenticated = $store.status === AppStatus.AUTHENTICATED;

  $: if (isAuthenticated) {
    players.push({ name: $store.user.name, pic: $store.user.pic });
  }
</script>

<style>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .input-room {
    font-weight: 600;
    margin: 1rem auto;
    text-align: center;
    text-transform: uppercase;
    width: 50%;
  }
</style>

<template>
  <!-- Todo: Login -->
  <div class="login-page">
    <Card>

      <!-- Header -->
      <div slot="header" class="flex justify-center">
        <img src="assets/images/logo.png" alt="RunoxSvelte" />
      </div>

      <!-- Content -->
      <div slot="content" class="text-center">
        <div class="opacity-75 text-sm">SALA</div>

        {#if $store.roomName?.length > 0}
          <h1 class="text-2xl font-semibold uppercase">{$store.roomName}</h1>
        {/if}

        {#if isAuthenticated}
          <input
            value={$store.roomName}
            on:input={(e) => handleRoomName(store, e.target.value)}
            class="input-room"
            placeholder="Room name here..."
            type="text" />

          <div
            on:click={() => {
              console.log('crear');
            }}
            class="mt-6">
            <Button>CREATE ROOM!</Button>
          </div>
        {:else}
          <div on:click={() => login(store)} class="mt-6">
            <Button>LOGIN & CREATE ROOM!</Button>
          </div>
        {/if}

        <!--
        <div on:click={() => store.reset()} class='mt-6'>
        <Button>RESET!</Button>
        </div>
      -->
      </div>

      <!-- Footer -->
      <div slot="footer" class="footer">
        <div class="opacity-75 text-sm pb-2 mb-3 border-b border-gray-800">
          PLAYERS
        </div>

        <PlayerList {players} />

      </div>
    </Card>
  </div>

</template>

<!-- // const players = [
  //   {
  //     name: "Jonatan Rodríguez",
  //     pic:
  //       "https://pbs.twimg.com/profile_images/1124022231661723648/9vBMdvSb_400x400.jpg",
  //     badge: 4,
  //     active: false,
  //   },
  // ]; -->
