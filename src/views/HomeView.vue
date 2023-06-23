<script setup>
</script>

<template>
  <main>

    <div className="overflow-hidden bg-white flex flex-col justify-start gap-2 relative w-full h-[800px] items-center">
      <div className="relative flex flex-col justify-end mb-10 w-full items-start pt-56 pb-12 px-24">
        <div
          className="w-full h-[283px] bg-[url(https://file.rendit.io/n/j40q1Vg6sFKesp7fw0jS.png)] bg-cover bg-50%_50% bg-blend-normal absolute top-0 left-0 flex flex-row justify-start gap-1 items-start pt-5 px-5">
          <div
            className="text-xs font-sans font-medium tracking-[0.12233009338378906] leading-[17.5px] text-[#eeeeee] mr-64 relative">
            9:30
          </div>
          <div className="relative flex flex-col justify-start mt-1 w-8 shrink-0 items-end">
            <img src="https://file.rendit.io/n/XkZe1uqJ78jzNC4rcJ1v.svg"
              className="w-4 h-4 min-h-0 min-w-0 absolute top-0 left-0" />
            <img src="https://file.rendit.io/n/wsIura7ZqREsHyZsD7Bj.svg" className="min-h-0 min-w-0 relative w-4" />
          </div>
          <img src="https://file.rendit.io/n/tI3DUayeM3MSBEAttOl1.svg"
            className="min-h-0 min-w-0 mt-1 relative w-2 shrink-0" />
        </div>
        <img src="https://file.rendit.io/n/Tf7Ibk3uHK7LlKoRpnrl.svg"
          className="w-[175px] h-20 min-h-0 min-w-0 absolute top-64 left-24" />
        <img src="https://file.rendit.io/n/sm7fCSWtwkLBxVQGJLZV.svg" className="min-h-0 min-w-0 relative w-10" />
      </div>
      <div
        className="whitespace-nowrap text-sm font-sans tracking-[0.3764705955982208] leading-[15.1px] text-[#1c1b1f] self-start ml-8 relative">
        Enter your email address
      </div>

      <input
        className="overflow-hidden bg-[#eeeeee] flex flex-col justify-center mb-4 pl-5 relative w-5/6 h-12 shrink-0 items-start rounded"
        placeholder="Email address" />

      <div
        className="whitespace-nowrap text-sm font-sans tracking-[0.3764705955982208] leading-[15.1px] text-[#1c1b1f] self-start ml-8 relative">
        Enter your Password
      </div>
      <input
        className="overflow-hidden bg-[#eeeeee] flex flex-col justify-center mb-6 pl-5 relative w-5/6 h-12 shrink-0 items-start rounded" placeholder="Password"/>

      <button
        className="overflow-hidden bg-[#212427] flex flex-col justify-center mb-3 relative w-5/6 h-12 shrink-0 items-center rounded-[40px]">
        <div className="font-Inter font-bold tracking-[0.47058823704719543] leading-[22.6px] text-white relative">
          Login
        </div>
      </button>

      <div
        className="whitespace-nowrap text-sm font-Inter font-medium tracking-[0.47058823704719543] leading-[22.6px] text-[#595959] self-start justify-start relative mb-px ml-16">
        Don’t have an account?
        <button
          className="text-sm font-Inter  tracking-[0.47058823704719543] leading-[22.6px] text-[#507047] contents">
           <span class="underline-offset-4 underline">Register</span>
        </button>
      </div>
      <div
        className="text-center whitespace-nowrap text-sm font-Inter font-medium tracking-[0.47058823704719543] leading-[22.6px] text-[#507047] self-start ml-32 relative">
         <span class="underline-offset-4 underline">Forgot Password</span>
      </div>
    </div>

  </main>
</template>
