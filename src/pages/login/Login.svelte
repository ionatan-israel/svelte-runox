<script lang="ts">
  import Card from "../../shared/Card.svelte";
  import Button from '../../shared/Button.svelte';
  import PlayerList from "../../shared/PlayerList.svelte";
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

<div class="login-page">
  <Card>
    <!-- Header -->
    <div slot="header" class="flex justify-center">
      <img src="assets/images/logo.png" alt="RunoxSvelte" />
    </div>

    <!-- Content -->
    <div slot="content" class="text-center">
      <div class="opacity-75 text-sm">SALA</div>

      <h1 class="text-2xl font-semibold uppercase">hardcodeado</h1>

      <input class="input-room" placeholder="Room name here..." type="text" />

      <div class='mt-6'>
        <Button>LOGIN & CREATE ROOM!</Button>
      </div>
    </div>

    <!-- Footer -->
    <div slot="footer" class="footer">
      <div class="opacity-75 text-sm pb-2 mb-3 border-b border-gray-800">
        PLAYERS
      </div>

      <PlayerList
        players={[{
          name: 'Jonatan Rodríguez',
          pic: 'https://pbs.twimg.com/profile_images/1124022231661723648/9vBMdvSb_400x400.jpg',
          badge: 4,
          active: false
        }]} />

    </div>
  </Card>
</div>
