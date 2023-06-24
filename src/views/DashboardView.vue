<script setup>
import { onMounted } from "vue"
import axios from "axios";
import cheerio from 'cheerio';

onMounted(()=>{
  const url = 'https://www.noblepig.com';
  axios.get(url).then(response => {
    const $ = cheerio.load(response.data);
    const blogElements = $('.entry-image-link');

    const blogLinks = []
    for (let index = 0; index < blogElements.length; index++) {
      const element = blogElements[index];
      blogLinks.push(element.attribs.href)
    }

    for (let index = 0; index < blogLinks.length; index++) {
      const element = blogLinks[index];
      axios.get(element).then(response =>{
        const $ = cheerio.load(response.data);
        const blogTitleElement = $('.post');
        // const blogTitle = blogTitleElement[0]
        const blogTitle = $(element).find('.entry-title').attr('');

        // const blogTitle = blogTitleElement[0].children[0].data
        // const blogImage = blogTitleElement
        console.log(blogTitle)
      })
      return
    }

    // console.log(blogLinks)
    
    return 
    blogElements.each((index, element) => {
      const blog = {};
      blog.link = $(element).find('.entry-image-link a').attr('href');
      // blog.image = $(element).find('.entry-image img').attr('src');
      // blog.title = $(element).find('.entry-title').text().trim();
      this.blogs.push(blog);
    });
    console.log(blog)
  }).catch(error => {
    console.error('Error scraping blogs:', error);
  });
  
})
</script>

<template>
  <main>
    <div className="overflow-hidden bg-[#ece9e7] flex flex-col justify-start gap-2 relative w-full h-[800px] items-center">
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

    <div className="bg-white flex flex-row justify-start gap-4 relative w-80 items-center px-2 rounded">
      <img
        src="https://file.rendit.io/n/qmTfgDmvKgPOiWdFnYof.png"
        className="min-h-0 min-w-0 relative my-2"
      />
      <div className="flex flex-col justify-start gap-3 relative w-2/5 items-center">
        <div className="whitespace-nowrap text-sm font-Inter font-semibold text-black relative">
          Banana chocolate <br />
          chip muffins
        </div>
        <div className="flex flex-row justify-start gap-1 relative w-full items-center">
          <div className="border-solid border-[rgba(244,_208,_82,_0.9)] overflow-hidden bg-[rgba(243,_208,_82,_0.2)] flex flex-col justify-start relative w-12 shrink-0 h-4 items-center py-px border rounded-[40px]">
            <div className="text-xs font-Inter font-semibold text-black/50 relative">
              Banana
            </div>
          </div>
          <div className="border-solid border-[rgba(153,_64,_0,_0.9)] overflow-hidden bg-[rgba(153,_64,_0,_0.14)] flex flex-col justify-start relative w-16 shrink-0 h-4 items-center py-px border rounded-[40px]">
            <div className="text-xs font-Inter font-semibold text-black/20 relative">
              Chocolate
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white flex flex-row justify-start gap-4 relative w-80 items-center px-2 rounded">
      <img
        src="https://file.rendit.io/n/4SPm344EhkxCVhR8hhst.png"
        className="min-h-0 min-w-0 relative my-2"
      />
      <div className="flex flex-col justify-start gap-3 relative w-2/5 items-center">
        <div className="whitespace-nowrap text-sm font-Inter font-semibold text-black relative">
          Overnight breakfast
          <br />
          casserole
        </div>
        <div className="flex flex-row justify-start gap-1 relative w-full items-center">
          <div className="border-solid border-[rgba(244,_150,_82,_0.9)] overflow-hidden bg-[rgba(244,_150,_82,_0.2)] flex flex-col justify-start relative w-16 shrink-0 h-4 items-center py-px border rounded-[40px]">
            <div className="text-xs font-Inter font-semibold text-black/30 relative">
              Casserole
            </div>
          </div>
          <div className="border-solid border-[rgba(95,_0,_153,_0.9)] overflow-hidden bg-[rgba(95,_0,_153,_0.14)] flex flex-col justify-start relative w-16 shrink-0 h-4 items-center py-px border rounded-[40px]">
            <div className="text-xs font-Inter font-semibold text-black/30 relative">
              Breakfast
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white flex flex-row justify-start gap-4 relative w-80 items-center pb-2 px-2 rounded">
      <img
        src="https://file.rendit.io/n/7uYDqCIY25p5xuqXO2np.png"
        className="min-h-0 min-w-0 mt-2 relative"
      />
      <div className="self-end flex flex-col justify-start mb-2 gap-5 relative w-2/5 h-12 items-center">
        <div className="whitespace-nowrap text-sm font-Inter font-semibold text-black relative">
          Blueberry Margarita
        </div>
        <div className="flex flex-row justify-start gap-1 relative w-full items-center">
          <div className="border-solid border-[rgba(82,_137,_244,_0.9)] overflow-hidden bg-[rgba(82,_137,_244,_0.2)] flex flex-col justify-start relative w-16 shrink-0 h-4 items-center py-px border rounded-[40px]">
            <div className="text-xs font-Inter font-semibold text-black/30 relative">
              Blueberry
            </div>
          </div>
          <div className="border-solid border-[#88022a] overflow-hidden bg-[rgba(136,_2,_42,_0.14)] flex flex-col justify-start relative w-16 shrink-0 h-4 items-center py-px border rounded-[40px]">
            <div className="text-xs font-Inter font-semibold text-black/20 relative">
              Margarita
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>

<style>

</style>
