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
  <div class="w-full h-full pt-20">
    <div class="w-full mt-20 mb-14 flex flex-col">
      <div class="flex justify-center relative">
        <div class="relative">
          <div class="flex flex-col w-36 h-[24.4rem] ">
            <div class="relative flex flex-col sm:gap-[2px] md:gap-[2px] lg:gap-[2px] xl:gap-[2px] w-[9rem] h-96 bg-secundary-boxColor">
              <!-- SOFT SKILLS -->
              <div class="relative flex justify-center w-full h-1 mx-auto">
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
            <template v-if="isHoveredOption != 0">
              <ProgrammingLanguages></ProgrammingLanguages>
              <StyleSheetLanguages></StyleSheetLanguages>
              <FrameworkFrontend></FrameworkFrontend>
              <FrameworkBackend></FrameworkBackend>
              <RelationalDatabases></RelationalDatabases>
              <NonRelationalDatabases></NonRelationalDatabases>
              <VersionControl></VersionControl>
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