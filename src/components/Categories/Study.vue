<script setup>
import { inject, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const isHoveredStudy = inject('isHoveredStudy')
</script>
<template>
<div class="flex flex-col h-full px-12 pt-20 pb-[7rem] ml-[27rem]">
  <template v-if="isHoveredStudy === 0 || isHoveredStudy === 1">
    <div class="w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 overflow-y-auto">
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              October - 2022
            </div>
            <div class="w-full h-44">
              <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2023/12/diploma_ingeniero_de_sistemas.pdf" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Academic_Degrees/systems_engineer.png" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Systems Engineer
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              Jul 2022
            </div>
            <div class="w-full h-44">
              <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2023/12/cretif-diplom.pdf" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Academic_Degrees/cretif-diplom.jpg" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Diploma in Computer Security
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="isHoveredStudy === 2">
    <div class="w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 overflow-y-auto">
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              April - 2024
            </div>
            <div class="w-full h-44">
              <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2024/05/calidad-en-el-desarrollo-de-software-certificado.pdf" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Certificates/CALIDAD_EN_EL_DESARROLLO_DE_SOFTWARE-certificado.png" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Quality In Software Development
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              May 2024
            </div>
            <div class="w-full h-44">
              <a href="https://www.udemy.com/certificate/UC-8526fb10-a4c0-4b31-a9d2-dd3580f1f395/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Certificates/curso_ros.png" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Boost Your Career with ROS: From Beginner to Robotics Engineer
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
        
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              Feb - 2024
            </div>
            <div class="w-full h-44 items-start">
              <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2024/03/certificadodefinalizacion_introduccion-a-las-habilidades-profesionales-en-analisis-de-datos.pdf" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Certificates/CertificadoDeFinalizacion_Introduccion_a_las_habilidades_profesionales_en_analisis_de_datos.png" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Introduction To Professional Skills In Data Analysis
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              Feb - 2024
            </div>
            <div class="w-full h-44">
              <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2024/03/certificado_acelerador_carrera_powerbi.pdf" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Certificates/certificado_acelerador_carrera_PowerBI.png" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Power BI Career Accelerator
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              Feb - 2024
            </div>
            <div class="w-full h-44">
              <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2024/03/certificadodefinalizacion_arquitectura-de-software-creacion-de-sistemas-sustentables-esencial.pdf" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Certificates/CertificadoDeFinalizacion_Arquitectura_de_software_Creacion_de_sistemas_sustentables_esencial.png" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Software Architecture Creation Of Essential Sustainable Systems
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              May - 2024
            </div>
            <div class="w-full h-44">
              <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2023/12/certificado-complementaria-virtual-en-procesos-para-software-de-calidad.pdf" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Certificates/Certificado-COMPLEMENTARIA_VIRTUAL_EN_PROCESOS_PARA_SOFTWARE_DE_CALIDAD.png" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Processes For Quality Software
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col w-full relative">
          <div class="w-full h-[18.5rem] bg-primary-bgLayoutLeft text-[#4C4840]">
            <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
              May - 2024
            </div>
            <div class="w-full h-44">
              <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2023/12/certificado-aplicacion-del-marco-de-trabajo-scrum-para-proyectos-de-desarrollo-de-software.pdf" class="w-full h-full flex justify-center items-center ease-in-out">
                <img src="../../../public/Study/Certificates/CERTIFICADO-APLICACION_DEL_MARCO_DE_TRABAJO_SCRUM_PARA_PROYECTOS_DE_DESARROLLO_DE_SOFTWARE.png" class="absolute w-full h-44 hover:w-64 hover:h-40 object-cover" alt="">
              </a>
            </div>
            <div class="text-justify m-2">
              Application Of The Scrum Framework For Software Development Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</div>
<div class="absolute w-full bottom-14 z-50">
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
</template>