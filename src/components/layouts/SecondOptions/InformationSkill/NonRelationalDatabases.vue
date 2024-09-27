<script setup>
import { ref, onMounted, inject } from "vue";

const isHovered = inject('isHovered')
const isHoveredPrimary = inject('isHoveredPrimary')
const isHoveredOption = inject('isHoveredOption')

</script>
<template>
    <template v-if="isHoveredOption === 58">
        <div class="w-full space-y-2">
            <div class="w-full h-full flex justify-center">
                <div class="w-28 h-28 rounded-md shadow-sm shadow-dark-600">
                    <img src="../../../../../public/mongodb_logo.png" class="w-28 h-28 object-fill rounded-md" alt="">
                </div>
            </div>
            <hr class="bg-[#4C4840] border-[#4C4840]">
            <div class="grid grid-cols-3 justify-between gap-2 w-full text-sm">
                <div class="flex flex-col">
                    <div>Fundamentals:</div>
                    <div class="flex flex-col space-y-1">
                        <div class="grid grid-cols-2 space-x-1">
                            <div class="order-1">Syntax</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class=" text-primary-bgLayoutLeft bg-primary-buttonText w-4 h-4 items-center">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check w-4 h-4">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row space-x-1">
                            <div class="order-1 col-span-2 text-start">Functions and methods</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div>Protocol:</div>
                    <div class="flex flex-col space-y-1">
                        <div class="grid grid-cols-3 space-x-1">
                            <div class="order-1 col-span-2 text-start">MVC</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class=" text-primary-bgLayoutLeft bg-primary-buttonText w-4 h-4 items-center">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check w-4 h-4">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 flex flex-auto justify-start">REST</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div>Architecture:</div>
                    <div class="flex flex-col space-y-1">
                        <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 text-start">Microservices</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 flex flex-auto justify-start">Monolithic</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class=" text-primary-bgLayoutLeft bg-primary-buttonText w-4 h-4 items-center">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check w-4 h-4">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div>Concurrency:</div>
                    <div class="flex flex-col space-y-1">
                        <div class="grid grid-cols-3 space-x-1">
                            <div class="order-1 col-span-2 text-start items-center">Asynchronous Programming</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 flex flex-auto justify-start items-center">Threads</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div>Data access (DB):</div>
                    <div class="flex flex-col space-y-1">
                        <div class="grid grid-cols-3 space-x-1">
                            <div class="order-1 col-span-2 text-start items-center">Relational</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 flex flex-auto justify-start items-center">Non-relational</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class=" text-primary-bgLayoutLeft bg-primary-buttonText w-4 h-4 items-center">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check w-4 h-4">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div>Testing:</div>
                    <div class="flex flex-col space-y-1">
                        <div class="grid grid-cols-3 space-x-1">
                            <div class="order-1 col-span-2 text-start items-center">Unitary</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 flex flex-auto justify-start items-center">Integration</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 flex flex-auto justify-start items-center">Performance</div>
                            <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-bgLayoutLeft border border-primary-buttonText w-4 h-4 items-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>