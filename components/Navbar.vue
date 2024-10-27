<template>
  <div class="w-full bg-[#F5F0E7]">
    <div class="container w-11/12 navbar my-5">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabIndex="{0}" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="{0}"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

        <NuxtLink to="/">
          <NuxtImg src="/logo.png"></NuxtImg>
        </NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <!-- <nuxt-link to="/course">課程介紹</nuxt-link> -->
            <NuxtLink :to="'course'"> 課程介紹 </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'yogaSpace'"> 瑜珈空間 </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'courseTable'"> 當月課表 </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end flex gap-4">
        <a class="btn btn-outline rounded-3xl bg-[#F5F0E7]">立即預約</a>
        <Link
          href="/"
          class="btn btn-primary rounded-3xl text-[#907A7B] border-[#907A7B] bg-[#F5F0E7]"
          >聯絡我們</Link
        >
      </div>
    </div>
  </div>
</template>
