<script>
import Home from "./components/Home/Home.svelte";
import Parent from "./components/Parent/Parent.svelte";

const parents = ["Henning", "Dorthe"];
const children = [
  {
    name: "Ib",
    FamilySheep: "black-sheep"
  },
  {
    name: "Lone",
    isGirl: true
  },
  {
    name: "Kurt",
    familySheep: "grey-sheep"
  }
]

</script>


<Home>

 <Parent parentName={parents[0]} {children}/>


 <Parent parentName={parents[1]} {children} />
</Home>
  
