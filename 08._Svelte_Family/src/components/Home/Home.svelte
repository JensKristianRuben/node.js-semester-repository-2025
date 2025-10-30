<script>
    import { fridgeMessages } from "../../store/fridgeStore.js";

    console.log($fridgeMessages);
    

</script>


<slot></slot>

{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage}</p>
{/each}

<!-- <h1>Home</h1> -->

<h2 id="welcome-mat">Velkommen til måtten</h2>

<style>
#welcome-mat {
    background-color: azure;
    padding: 2em;
    color: black;
    border-radius: 0 0 2em 2em;
    
}
</style>