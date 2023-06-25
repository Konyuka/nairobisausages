<script setup>
import { onMounted, ref, watch } from "vue"
import axios from "axios";

const posts = ref(null)
watch(posts, (newX)=>{
  
  for (let index = 0; index < posts.value.length; index++) {
    const element = posts.value[index];
    axios.get(element.link['wp:featuredmedia'][0].href)
      .then(response => {
        let objectData = {
          id: null,
          imageLink: null
        }
        objectData.id = element.id
        objectData.imageLink = response.data.guid.rendered
        imageUrls.value.push(objectData)
      })
      .catch(err => {
        console.error(err);
      });
  }


})

const tags = ref(null)
const imageUrls = ref([])

const getImage = (postId) => {
  const obj = imageUrls.value.find(o => o.id === postId);
  if(obj){
    return obj.imageLink
  }

}

onMounted( () => {

  const postsUrl = 'https://www.noblepig.com/wp-json/wp/v2/posts';
  const tagsUrl = 'https://www.noblepig.com/wp-json/wp/v2/tags';

  axios.get(postsUrl).then(response => {
    const postData = response.data.map(post => ({ id: post.id, title: post.title, tags: post.tags, link: post._links  }));
    posts.value = postData.splice(0, 5);
  }).catch(error => {
    console.error('Error scraping posts:', error);
  });

  axios.get(tagsUrl).then(response => {
    const tagData = response.data.map(tag => ({ id: tag.id, name: tag.name }));
    tags.value = tagData
  }).catch(error => {
    console.error('Error scraping tags:', error);
  });
  
})
</script>



<template>
  <main>
    <div className="overflow-hidden overflow-x-hidden bg-[#ece9e7] flex flex-col justify-start gap-2 relative w-full h-[800px] items-center">
    <div className="relative flex flex-col justify-end mb-4 pt-12 w-full items-center">
      <div className="w-full h-12 overflow-hidden bg-[#edeae7] absolute top-0 left-0 flex flex-row justify-start gap-1 items-end px-5 py-2">
        <div className="text-xs font-sans font-medium tracking-[0.12233009338378906] leading-[17.5px] text-[#1c1b1f] self-start relative mt-2 mr-64">
          9:30
        </div>
        <div className="relative flex flex-col justify-start w-8 shrink-0 items-end">
          <img
            src="https://file.rendit.io/n/Pu2mZMTCkABS0NAtcRRG.svg"
            className="w-4 h-4 min-h-0 min-w-0 absolute top-0 left-0"
          />
          <img
            src="https://file.rendit.io/n/32S0H4XMjXmqQKyvTJB6.svg"
            className="min-h-0 min-w-0 relative w-4"
          />
        </div>
        <img
          src="https://file.rendit.io/n/hPjdMedEnSL2jPLgJYLP.svg"
          className="min-h-0 min-w-0 mb-px relative w-2 shrink-0"
        />
      </div>
      <div className="bg-[linear-gradient(180deg,_#edeae7_0%,#edeae7_100%)] bg-cover bg-50%_50% bg-blend-normal relative flex flex-row justify-start gap-4 w-full h-12 shrink-0 items-center px-3">
        <img
          src="https://file.rendit.io/n/1WiQ2Ex8bT0xtL2Th8V9.svg"
          className="min-h-0 min-w-0 relative w-5 shrink-0"
        />
        <div className="text-center text-xl font-Inter font-bold leading-[24.5px] text-[#1c1b1f] relative w-4/5">
          Nairobi Sausages
        </div>
        <img
          src="https://file.rendit.io/n/o3sCsZgrHlDRlZpRJzWn.svg"
          className="min-h-0 min-w-0 relative w-5 shrink-0"
        />
      </div>
    </div>
    <div className="text-sm font-Inter font-semibold leading-[24.5px] text-[#595959] self-start ml-4 relative">
      Dashboard
    </div>

    <div className="flex flex-row justify-start mb-4 gap-2 relative w-80 items-center">
      <div className="bg-white flex flex-col justify-start gap-2 relative w-1/2 h-32 items-start pt-3 pb-4 pl-3 rounded">
        <div className="text-xs font-Inter font-bold uppercase text-[#507047] mb-px relative">
          Farms
        </div>
        <div className="flex flex-row justify-start ml-2 gap-2 relative w-20 items-center">
          <div className="text-center text-3xl font-Inter font-semibold uppercase text-black mr-1 relative ">
            2
          </div>
          <div className="border-solid border-2 relative w-px shrink-0 h-4 borderr borderl-0 bordery-0 rounded-none" />
          <div className="whitespace-nowrap text-xs font-Inter font-semibold uppercase text-[#595959] relative">
            KIAMBU <br />
            COUNTY
          </div>
        </div>
        <button className="overflow-hidden bg-[#f3d052] self-center flex flex-col justify-start relative w-5/6 h-8 shrink-0 items-center py-2 rounded-[50px]">
          <div className="whitespace-nowrap text-xs font-Inter font-bold text-black relative">
            Order Feeds
          </div>
        </button>
      </div>
      <div className="bg-white flex flex-col justify-start gap-2 relative w-1/2 h-32 items-start pt-3 pb-4 pl-3 rounded">
        <div className="text-xs font-Inter font-bold uppercase text-[#507047] mb-px relative">
          PIGS
        </div>
        <div className="flex flex-row justify-start gap-2 relative w-20 items-center">
          <div className="text-center text-3xl font-Inter font-semibold uppercase text-black relative">
            36
          </div>
          <div className="border-solid border-2 mr-px relative w-px shrink-0 h-4 borderr borderl-0 bordery-0 rounded-none" />
          <div className="text-xs font-Inter font-semibold uppercase text-[#595959] relative">
            LARGE
            <br />
            WHITE
          </div>
        </div>
        <router-link to="/submit_batch" className="overflow-hidden bg-[#507047] self-center flex flex-col justify-start relative h-8 shrink-0 items-center py-2 rounded-[50px]">
          <div className="whitespace-nowrap text-xs font-Inter font-bold text-white relative mx-8">
            Sell a Batch
          </div>
        </router-link>
      </div>
    </div>

    <div className="text-sm font-Inter font-semibold leading-[24.5px] text-[#595959] self-start ml-4 relative">
      Latest
    </div>
    <div class="pb-3 overflow-y-auto">
      <div v-for="(post, index) in posts" :key="index" className="mb-4 bg-white flex flex-row justify-start gap-4 relative w-80 items-center px-2 rounded">
        <img
          :src="getImage(post.id)"
          className="h-32 w-40 min-h-0 min-w-0 relative my-2"
        />

        <div className="flex flex-col justify-start gap-3 relative w-2/5 items-center">
          <div className="text-sm font-Inter font-semibold text-black relative">
            <span class="">{{ post.title.rendered }}</span>
          </div>
          <div className="flex flex-row justify-start gap-1 relative w-full items-center">

            <span class="text-[10px] inline-flex items-center border-solid border-[rgba(244,_208,_82,_0.9)] bg-[rgba(243,_208,_82,_0.2)] text-black font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Banana
              </span>
            <span class="text-[10px] inline-flex items-center border-solid border-[rgba(153,_64,_0,_0.9)] bg-[rgba(153,_64,_0,_0.14)] text-black font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Chocolate
              </span>

            <!-- <div className="border-solid border-[rgba(244,_208,_82,_0.9)] overflow-hidden bg-[rgba(243,_208,_82,_0.2)] flex flex-col justify-start relative w-12 shrink-0 h-4 items-center py-px border rounded-[40px]">
              <div className="mb-1 text-xs font-Inter font-semibold text-black/50 relative">
                Banana
              </div>
            </div>
            <div className="border-solid border-[rgba(153,_64,_0,_0.9)] overflow-hidden bg-[rgba(153,_64,_0,_0.14)] flex flex-col justify-start relative w-16 shrink-0 h-4 items-center py-px border rounded-[40px]">
                <div className="text-xs font-Inter font-semibold text-black/20 relative">
                  Chocolate
                </div>
              </div> -->

            
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </main>
</template>

<style>

</style>
