<script>
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  export let data;
</script>

<body>
<!-- welcome card -->
  <section class="bg-[#373828]/50  border-[#373828] border border-8 rounded-md max-w-2xl min-h-80 m-auto mt-8">
    <h1 class=" h1 text-[#BBA786] text-center m-auto p-16">Welcome to the Wallflower Post!</h1>
  </section>

  <!-- new announcement section -->
<div class="grid grid-cols-6 grid-rows-2 m-60">
<div class="w-[600px] h-[600px] border border-4 border-[#412733] col-start-1 col-end-4 row-start-1"></div>
<!-- new announcement section one -->
<section class="w-[800px] h-[400px] bg-[#565462] rounded-lg col-start-2 col-end-5 row-start-1 p-4 m-auto"><p class="text-[#BBA786]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus massa vehicula lacus rutrum, nec efficitur neque ultrices. Curabitur laoreet ultricies sagittis. Aenean dignissim scelerisque est, a gravida elit porttitor interdum. Maecenas id leo in nisi pulvinar cursus at sit amet quam. Nulla facilisi. Nulla tincidunt vestibulum ex, in vestibulum arcu ornare vitae. Nullam tempus eu eros a blandit. Quisque bibendum nisi vitae felis blandit tincidunt. Ut congue scelerisque odio, non ornare enim imperdiet ut. Curabitur accumsan felis vitae ornare gravida. Nunc elementum molestie sem, vel fermentum arcu mattis sed. Maecenas vulputate ut mi a congue. Phasellus at arcu porttitor nisl dignissim tincidunt quis at risus. Nulla facilisi. Vestibulum id ante rhoncus mi semper condimentum in vel massa. Cras ut tortor arcu.</p></section>
<div class="w-[600px] h-[600px] border border-4 border-[#412733] col-start-3 col-end-7 row-start-2"></div>
<!-- new announcement section two -->
<section class="w-[800px] h-[400px] bg-[#373828] rounded-lg col-start-1 row-start-2  p-4 m-auto "><p class="text-[#BBA786]">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus massa vehicula lacus rutrum, nec efficitur neque ultrices. Curabitur laoreet ultricies sagittis. Aenean dignissim scelerisque est, a gravida elit porttitor interdum. Maecenas id leo in nisi pulvinar cursus at sit amet quam. Nulla facilisi. Nulla tincidunt vestibulum ex, in vestibulum arcu ornare vitae. Nullam tempus eu eros a blandit. Quisque bibendum nisi vitae felis blandit tincidunt. Ut congue scelerisque odio, non ornare enim imperdiet ut. Curabitur accumsan felis vitae ornare gravida. Nunc elementum molestie sem, vel fermentum arcu mattis sed. Maecenas vulputate ut mi a congue. Phasellus at arcu porttitor nisl dignissim tincidunt quis at risus. Nulla facilisi. Vestibulum id ante rhoncus mi semper condimentum in vel massa. Cras ut tortor arcu.</p></section>

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
</style>