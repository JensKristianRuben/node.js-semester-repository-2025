<script>
let realEstateAgents;
    import { BASE_URL } from "../../store/generalStore.js";


    fetch($BASE_URL + "/realestateagents")
    .then(data => data.json())
    .then(result => {
        console.log(result);
        realEstateAgents = result.data;
    });

</script>

<h1>About</h1>
{#each realEstateAgents as realEstateAgent (realEstateAgent)}
    <p>{realEstateAgent}</p>
{/each}

