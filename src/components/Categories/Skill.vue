<script setup>
import { ref, onMounted, inject } from "vue";
import ProgrammingLanguages from "../layouts/SecondOptions/InformationSkill/ProgrammingLanguages.vue";
import StyleSheetLanguages from "../layouts/SecondOptions/InformationSkill/StyleSheetLanguages.vue";
import FrameworkFrontend from "../layouts/SecondOptions/InformationSkill/FrameworkFrontend.vue";
import FrameworkBackend from "../layouts/SecondOptions/InformationSkill/FrameworkBackend.vue";
import RelationalDatabases from "../layouts/SecondOptions/InformationSkill/RelationalDatabases.vue";
import NonRelationalDatabases from "../layouts/SecondOptions/InformationSkill/NonRelationalDatabases.vue";
import VersionControl from "../layouts/SecondOptions/InformationSkill/VersionControl.vue";

const isHovered = inject('isHovered')
const isHoveredPrimary = inject('isHoveredPrimary')
const isHoveredOption = inject('isHoveredOption')

</script>
<template>
  <div class="w-full h-full">
    <div class="w-full mt-20 mb-14 flex flex-col overflow-y-clip">
      <div class="flex justify-center relative">
        <div class="relative">
          <div class="flex flex-col w-36 h-[24.4rem] ">
            <div class="relative flex flex-col sm:gap-[2px] md:gap-[2px] lg:gap-[2px] xl:gap-[2px] w-[9rem] h-96 bg-secundary-boxColor">
              <!-- SOFT SKILLS -->
              <div class="relative flex justify-center w-full h-1 mx-auto" :class="isHoveredOption === 1 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 1 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 2 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 3 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 4 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 5 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 7 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 9 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 10 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 11 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 12 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
              </div>
              <!-- PROGRAMMING LENGUAGES -->
              <div class="relative flex justify-center w-full h-2 mx-auto">
                <div class="absolute top-0 mx-auto h-2 bg-boxColor-two" :class="isHoveredOption === 13 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-7 mx-auto">
                <div class="absolute top-0 mx-auto h-7 bg-boxColor-two" :class="isHoveredOption === 17 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-6 mx-auto">
                <div class="absolute top-0 mx-auto h-6 bg-boxColor-two" :class="isHoveredOption === 18 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-3 mx-auto">
                <div class="absolute top-0 mx-auto h-3 bg-boxColor-two" :class="isHoveredOption === 19 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-5 mx-auto">
                <div class="absolute top-0 mx-auto h-5 bg-boxColor-two" :class="isHoveredOption === 20 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
              </div>
              <!-- Style Sheet Languages -->
              <div class="relative flex justify-center w-full h-4 mx-auto">
                <div class="absolute top-0 mx-auto h-4 bg-boxColor-three" :class="isHoveredOption === 23 || isHoveredPrimary === 3 ? 'w-40' : 'w-full'"/>
              </div>
              <!-- Framework Frontend -->
              <div class="relative flex justify-center w-full h-2 mx-auto">
                <div class="absolute top-0 mx-auto h-2 bg-boxColor-four" :class="isHoveredOption === 29 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-8 mx-auto">
                <div class="absolute top-0 mx-auto h-8 bg-boxColor-four" :class="isHoveredOption === 36 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
              </div>
              <!-- Framework Backend -->
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-five" :class="isHoveredOption === 37 || isHoveredPrimary === 5 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-6 mx-auto">
                <div class="absolute top-0 mx-auto h-6 bg-boxColor-five" :class="isHoveredOption === 43 || isHoveredPrimary === 5 ? 'w-40' : 'w-full'"/>
              </div>
              <!-- Relational Databases -->
              <div class="relative flex justify-center w-full h-5 mx-auto">
                <div class="absolute top-0 mx-auto h-5 bg-boxColor-six" :class="isHoveredOption === 49 || isHoveredPrimary === 6 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-3 mx-auto">
                <div class="absolute top-0 mx-auto h-3 bg-boxColor-six" :class="isHoveredOption === 50 || isHoveredPrimary === 6 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-5 mx-auto">
                <div class="absolute top-0 mx-auto h-5 bg-boxColor-six" :class="isHoveredOption === 51 || isHoveredPrimary === 6 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-4 mx-auto">
                <div class="absolute top-0 mx-auto h-4 bg-boxColor-six" :class="isHoveredOption === 53 || isHoveredPrimary === 6 ? 'w-40' : 'w-full'"/>
              </div>
              <!-- Non-Relational DataBases -->
              <div class="relative flex justify-center w-full h-2 mx-auto">
                <div class="absolute top-0 mx-auto h-2 bg-boxColor-seven" :class="isHoveredOption === 58 || isHoveredPrimary === 7 ? 'w-40' : 'w-full'"/>
              </div>
              <!-- Version Control -->
              <div class="relative flex justify-center w-full h-3 mx-auto">
                <div class="absolute top-0 mx-auto h-3 bg-boxColor-eight" :class="isHoveredOption === 60 || isHoveredPrimary === 8 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-1 mx-auto">
                <div class="absolute top-0 mx-auto h-1 bg-boxColor-eight" :class="isHoveredOption === 61 || isHoveredPrimary === 8 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-3 mx-auto">
                <div class="absolute top-0 mx-auto h-3 bg-boxColor-eight" :class="isHoveredOption === 62 || isHoveredPrimary === 8 ? 'w-40' : 'w-full'"/>
              </div>
              <div class="relative flex justify-center w-full h-2 mx-auto">
                <div class="absolute top-0 mx-auto h-2 bg-boxColor-eight" :class="isHoveredOption === 63 || isHoveredPrimary === 8 ? 'w-40' : 'w-full'"/>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute mr-12 w-[24rem] h-[24.4rem] top-0 right-0 bg-primary-bgLayoutLeft text-[#4C4840]">
          <div class="h-8 w-fuull text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
            Information
          </div>
          <div class="mx-3 space-y-1 mt-2">
            <div class="flex justify-between">
              <h2>Nicolas</h2>
              <h2>Lv: Junior</h2>
            </div>
            <hr class="bg-[#4C4840] border-[#4C4840]">
            <template v-if="isHoveredOption != 0 && isHoveredOption >= 12">
              <programming-languages></programming-languages>
              <style-sheet-languages></style-sheet-languages>
              <framework-frontend></framework-frontend>
              <framework-backend></framework-backend>
              <relational-databases></relational-databases>
              <non-relational-databases></non-relational-databases>
              <version-control></version-control>
            </template>
            <template v-if="isHoveredOption === 0 && isHoveredOption <= 12">
              <div class="w-full space-y-2">
                <div class="w-full h-full flex justify-center">
                  <div class="w-28 h-28 rounded-md shadow-sm shadow-dark-600">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-zoom-question w-28 h-28 ">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-4 8.928a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1m-1.9 -5.123a1 1 0 0 0 1.433 1.389l.088 -.09a.5 .5 0 1 1 .379 .824a1 1 0 0 0 -.002 2a2.5 2.5 0 1 0 -1.9 -4.123" />
                    </svg>
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
                              <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                                <div class="w-full h-full text-center flex justify-center">
                                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                    <path d="M12 19l0 .01" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-row space-x-1">
                            <div class="order-1 col-span-2 text-start">Functions and methods</div>
                              <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                                  <div class="w-full h-full text-center flex justify-center">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                      <path d="M12 19l0 .01" />
                                    </svg>
                                  </div>
                                </div>
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
                              <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                                <div class="w-full h-full text-center flex justify-center">
                                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                    <path d="M12 19l0 .01" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 flex flex-auto justify-start">REST</div>
                              <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                                  <div class="w-full h-full text-center flex justify-center">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                      <path d="M12 19l0 .01" />
                                    </svg>
                                  </div>
                                </div>
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
                          <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                            <div class="w-full h-full text-center flex justify-center">
                              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                <path d="M12 19l0 .01" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                        <div class="grid grid-cols-3 space-x-1 items-center">
                          <div class="order-1 col-span-2 flex flex-auto justify-start">Monolithic</div>
                          <div class="order-2 flex justify-end items-center">
                            <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                              <div class="w-full h-full text-center flex justify-center">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                  <path d="M12 19l0 .01" />
                                </svg>
                              </div>
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
                            <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                              <div class="w-full h-full text-center flex justify-center">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                  <path d="M12 19l0 .01" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 space-x-1 items-center">
                          <div class="order-1 col-span-2 flex flex-auto justify-start items-center">Threads</div>
                            <div class="order-2 flex justify-end items-center">
                              <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                                <div class="w-full h-full text-center flex justify-center">
                                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                    <path d="M12 19l0 .01" />
                                  </svg>
                                </div>
                              </div>
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
                              <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                                <div class="w-full h-full text-center flex justify-center">
                                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                    <path d="M12 19l0 .01" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="grid grid-cols-3 space-x-1 items-center">
                            <div class="order-1 col-span-2 flex flex-auto justify-start items-center">Non-relational</div>
                              <div class="order-2 flex justify-end items-center">
                                <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                                  <div class="w-full h-full text-center flex justify-center">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                      <path d="M12 19l0 .01" />
                                    </svg>
                                  </div>
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
                          <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                            <div class="w-full h-full text-center flex justify-center">
                              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                <path d="M12 19l0 .01" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-3 space-x-1 items-center">
                        <div class="order-1 col-span-2 flex flex-auto justify-start items-center">Integration</div>
                        <div class="order-2 flex justify-end items-center">
                          <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                            <div class="w-full h-full text-center flex justify-center">
                              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                <path d="M12 19l0 .01" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-3 space-x-1 items-center">
                        <div class="order-1 col-span-2 flex flex-auto justify-start items-center">Performance</div>
                        <div class="order-2 flex justify-end items-center">
                          <div class="text-primary-buttonText border border-primary-buttonText w-4 h-4 items-center">
                            <div class="w-full h-full text-center flex justify-center">
                              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark w-[0.85rem] h-[0.85rem]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                <path d="M12 19l0 .01" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="relative h-12 mt-7 ml-12 mr-12">
        <div class="absolute bottom-2 right-2 z-30 text-primary-bgLayoutLeft border border-primary-buttonText bg-primary-buttonText w-[0.70rem] h-[0.70rem] items-center">
        </div>
        <div class="absolute top-0 left-0 w-[99.8%] h-[2.8rem] bg-primary-bgLayoutLeft z-20 text-primary-bgLayoutLeft flex justify-between">
          <div class="order-1 flex justify-start space-x-7 items-center">
            <div class="flex flex-row space-x-1">
              <div class="w-[0.7rem] h-[2.8rem] bg-[#4C4840]"/>
              <div class="w-[0.2rem] h-[2.8rem] bg-[#4C4840]"/>
            </div>
            <div class="items-center text-[#4C4840]">
              My portfolio is under development, so there may be interface errors on certain screen sizes.
            </div>
          </div>
          <div class="order-2 flex flex-row items-center space-x-1 mr-7">
            <div class="w-10 h-6 rounded-md bg-[#4C4840] text-primary-bgLayoutLeft text-center items-center">
              <div class="w-full h-full flex justify-center items-center">
                <div class="w-8 h-5 flex justify-center text-center items-center text-sm"><p class="text-center">ESC</p></div>
              </div>
            </div>
            <div class="text-[#4C4840]">
              Back
            </div>
          </div>
        </div>
        <div class="absolute top-[0.2rem] left-[0.15rem] z-10 bg-secundary-boxColorBack w-[99.8%] h-[2.8rem]"/>
      </div>
    </div>
  </div>
</template>
<style>

:root{
  --spacing: 0.25rem;
}
@media (min-width: 768){
  :root{
    --spacing: 0.25rem;
  }
}
@media (min-width: 1024){
  :root{
    --spacing: 0.25rem;
  }
}

.efect-color{
  width: 10rem;
  --tw-bg-opacity: 1;
  background-color: rgb(253 186 116 / var(--tw-bg-opacity));
}

.boton-ola::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #716858;
  transition: left 0.2s ease;
}

.boton-ola:hover::before {
  left: 0%;
}

.hovered-class {
  /* Estilos cuando está en hover */
  background: red;
}
.active {
  /* Estilos del botón cuando está en hover */
  background: rebeccapurple;
}
</style>