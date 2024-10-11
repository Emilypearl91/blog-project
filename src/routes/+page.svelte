<script>
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  export let data;
</script>

<body>
<!-- welcome card -->
  <section class="bg-[#373828] opacity-50  border-[#373828] border-solid border-8 rounded-md max-w-2xl min-h-80 m-auto">
    <h1 class=" h1 text-[#BBA786] text-center m-auto">Welcome to the Wallflower Post!</h1>
  </section>

  <!-- new announcement section -->
<div class="grid grid-cols-6 grid-rows-2 m-60">
<div class="w-[600px] h-[600px] border border-4 border-[#412733] col-start-1 col-end-4 row-start-1"></div>
<!-- new announcement section one -->
<section class="w-[800px] h-[400px] bg-[#565462] rounded-lg col-start-2 col-end-5 row-start-1 p-4 m-auto"></section>
<div class="w-[600px] h-[600px] border border-4 border-[#412733] col-start-3 col-end-7 row-start-2"></div>
<!-- new announcement section two -->
<section class="w-[800px] h-[400px] bg-[#373828] rounded-lg col-start-1 row-start-2  p-4 m-auto "></section>

</div>
<!-- newest posts -->
  <Accordion autocollapse class="max-w-2xl bg-[#211B27] text-[#BBA786] m-auto rounded-md">
    {#each data.blog as post}
    <AccordionItem open>
      <svelte:fragment slot="lead">{post.title}</svelte:fragment>
      <svelte:fragment slot="summary">{post.date}</svelte:fragment>
      <svelte:fragment slot="content">{post.description}</svelte:fragment>
    </AccordionItem>
    {/each}
  </Accordion>
</body>

<style>
  :global(body) {
   background-color: #BBA786;
  }
  /* .box-one {
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;

  }
  .box-two {
grid-row-start: 3.5;
grid-column-start: 1.5;

  }
  .a-one {
grid-column-start: 2;
grid-column-end: ;
grid-row-start: 1.5;
  }
  .a-two {
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 3;
  } */
 </style>