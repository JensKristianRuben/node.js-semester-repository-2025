<script>
  import { fridgeMessages } from "../../store/fridgeStore.js";
  const { name, familySheep, isGirl, onShowLove, onEatCookie } = $props();

  let fridgeMessageInput = $state("");

  function handleWriteFridgeMessage() {
    fridgeMessages.set([...$fridgeMessages, fridgeMessageInput])
    fridgeMessageInput = "";
  }
</script>

<div class={familySheep || "not-a-sheep"} class:is-girl={isGirl}>
  <h3>{name}</h3>
</div>

<button onclick={() => onShowLove(name)}>Show you parents love</button>
<button onclick={onEatCookie}>Eat a Cookie</button>

<input bind:value={fridgeMessageInput}/>
<button onclick={handleWriteFridgeMessage}>write fridge message</button>

<style>
  .black-sheep {
    background-color: crimson;
  }

  .grey-sheep {
    background-color: navajowhite;
  }

  .not-a-sheep {
    background-color: yellowgreen;
  }

  .is-girl {
    border: 1em solid rebeccapurple;
  }

  .is-boy {
    border: 1em solid cadetblue;
  }
</style>
