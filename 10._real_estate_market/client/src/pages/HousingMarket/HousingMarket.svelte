<script>
  import { onMount } from "svelte";

  let housingMarket;

  onMount(() => {
    fetch("http://localhost:8080/houses", {
        credentials: "include"
    })
      .then((data) => data.json())
      .then((result) => {
        housingMarket = result.data;
      });
  });

  function addHouse() {
    const newhouse = {
        street: "Ugandavej"
    }
    fetch("http://localhost:8080/houses", {
    method: "POST",
    credentials: "include",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newhouse)
})
    .then((response) => response.json())
    .then(result => {
        console.log(result);
        housingMarket = result.data;
        
    })
  }
</script>

<button onclick={addHouse}>Add a new house</button>

<h1>Housing Market 🏠</h1>
{#each housingMarket as house }
    <h4>{house.street}</h4>
{/each}
