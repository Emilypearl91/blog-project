<script>

import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
 export let data;
</script>
<Accordion autocollapse class="max-w-2xl bg-[#211B27] text-[#BBA786] m-auto rounded-md">
  {#each data.blog as post}
  <AccordionItem open>
    <svelte:fragment slot="lead">{post.title}</svelte:fragment>
    <svelte:fragment slot="summary">{post.date}</svelte:fragment>
    <svelte:fragment slot="content">{post.body}</svelte:fragment>
  </AccordionItem>
  {/each} 
</Accordion>